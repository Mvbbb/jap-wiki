---
title: 自定义登录页面
---

# 目录

[[toc]]

----

## 问题

在很多时候，开发者并不喜欢 `jap-ids` 内置的登录页面，比如：

![](/_media/ca0e2998.png)

这个时候，开发者就需要自定义自己的登录页面。

## 1. 在授权服务中自定义登录页面

代码仅供参考，完整代码，请参考：[jap-ids-demo](https://gitee.com/fujieid/jap-ids-demo)

### 开发Controller 接口

```java
@RequestMapping("/oauth")
@Controller
public class LoginController {

    // 其他方法略

    /**
     * 演示自定义登录页面的实现方式， 自定义授权页面，需要通过 <code>JapIds.registerContext(new IdsContext().setIdsConfig(new IdsConfig().setLoginPageUrl("/oauth/login/customize")</code> 配置登录页面的入口
     *
     * @param request
     * @param model
     * @return
     * @throws IOException
     */
    @GetMapping("/login/customize")
    public ModelAndView loginCustomize(HttpServletRequest request, Model model) throws IOException {
        String authenticationUrl = ObjectUtils.appendIfNotEndWith(JapIds.getIdsConfig().getLoginUrl(), "?") + request.getQueryString();
        // form 表单的 action 值
        model.addAttribute("requestPath", authenticationUrl);
        // 用户名输入框的 name
        model.addAttribute("usernameField", JapIds.getIdsConfig().getUsernameField());
        // 密码输入框的 name
        model.addAttribute("passwordField", JapIds.getIdsConfig().getPasswordField());
        return new ModelAndView("login");
    }

}
```

### 开发 HTML 页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>JustAuthPlus 演示自定义登录页</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link href="https://getbootstrap.com/docs/4.0/examples/signin/signin.css" rel="stylesheet" crossorigin="anonymous"/>
</head>
<body>
<div class="container">
    <p>
        <h1>这是自定义的授权登录页面</h1>
    </p>
    <form class="form-signin" method="post" th:action="${requestPath}">
        <h2 class="form-signin-heading">Please sign in</h2>
        <p>
            <label for="username" class="sr-only">Username</label>
            <input type="text" id="username" th:name="${usernameField}" class="form-control" placeholder="Username" required
                   autofocus>
        </p>
        <p>
            <label for="password" class="sr-only">Password</label>
            <input type="password" id="password" th:name="${passwordField}" class="form-control" placeholder="Password" required>
        </p>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
</div>
</body>
</html>
```

### 修改 IdsConfig 配置

```java
JapIds.registerContext(new IdsContext()
    .setIdsConfig(new IdsConfig()
            // 关键这一句代码，不要带域名，jap-ids 会自动拼装为 issuer + LoginPageUrl
            .setLoginPageUrl("/oauth/login/customize")
    )
);
```

### 启动服务并访问

![](/_media/b04c381a.png)

## 2. 在前后端分离的场景下自定义登录页面

如果开发者的项目采用前后端分离的场景，登录页面部署到其他静态资源服务中，也就是说登录页面所在的服务的域名和授权服务的域名并不一致的情况下，jap-ids 也支持自定义这种场景的登录页面。

代码仅供参考，完整代码，请参考：[jap-ids-demo](https://gitee.com/fujieid/jap-ids-demo)

::: warning
这儿默认你已经准备好了前端服务
:::

### 修改 Controller 接口

因为是前后端分离的项目，所以 controller 接口以 json 格式返回相关登录表单的参数。

```java
@RequestMapping("/oauth")
@Controller
public class LoginController {

    // 其他方法略

    @GetMapping("/login/customize")
    @ResponseBody
    public Object loginCustomize(HttpServletRequest request, Model model) throws IOException {
        String authenticationUrl = ObjectUtils.appendIfNotEndWith(JapIds.getIdsConfig().getLoginUrl(), "?") + request.getQueryString();
        // form 表单的 action 值
        model.addAttribute("requestPath", authenticationUrl);
        // 用户名输入框的 name
        model.addAttribute("usernameField", JapIds.getIdsConfig().getUsernameField());
        // 密码输入框的 name
        model.addAttribute("passwordField", JapIds.getIdsConfig().getPasswordField());
        return model.asMap();
    }

}
```

### 修改 IdsConfig 配置

```java
JapIds.registerContext(new IdsContext()
    .setIdsConfig(new IdsConfig()
            // 配置登录页面的地址，必须为包含 http 协议头的完整地址
            .setLoginPageUrl("http://localhost:8080/oauth/login/customize")
            // 指定当前登录页面为外部页面，当使用外部登录页面时，该值必须置为 true
            .setExternalLoginPageUrl(true)
    )
);
```

::: warning
1. 当使用外部登录页面时，`ExternalLoginPageUrl` 必须设置为 `true`
2. `LoginPageUrl`必须为包含 http 协议头的完整地址
:::
   
## 关于 IdsConfig 配置的注意事项


::: warning
1. 当使用外部登录页面时，`ExternalLoginPageUrl` **必须设置为 `true`**，且 `LoginPageUrl` 必须为**包含 http 协议头**的完整地址
2. 当自定义的登录页面位于授权服务下时，`LoginPageUrl` 必须**不包含 http 协议头**，jap-ids 会自动拼装为 `issuer + LoginPageUrl`
:::

## 更多功能

<ref-link :link='`/ids/quickstart`' :title="`快速开始`"/>
<ref-link :link='`/ids/custom-confirm-page`' :title="`自定义确认授权页面`"/>
<ref-link :link='`/ids/scope`' :title="`自定义 scope`"/>
<ref-link :link='`/ids/cache`' :title="`自定义缓存`"/>
<ref-link :link='`/ids/jwks`' :title="`自定义 Token 加密密钥`"/>
<ref-link :link='`/ids/pkce`' :title="`使用 PKCE 模式`"/>
<ref-link :link='`/ids/auto-approve`' :title="`自动授权`"/>
<ref-link :link='`/ids/error_code`' :title="`错误代码`"/>
