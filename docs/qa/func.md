---
title: 功能相关问题
---

# 目录

[[toc]]

----

## 第三方平台获取 token 和 userinfo 的请求方式为 GET

如 Gitee 上的这个 [ISSUE](https://gitee.com/fujieid/jap/issues/I3DC7N)，这位开发者使用`jap-oauth2`对接 gitlab 时，出现问题。

经过此开发者调研，发现 gitlab 中获取用户信息的接口，强制使用 GET 请求方式。

针对这种情况，`jap-oauth2` 从 `v1.0.1` 版开始，对此做了专门适配。在 `OAuthConfig` 中添加了 `userInfoEndpointMethodType`和`accessTokenEndpointMethodType` 两个配置项。针对获取用户和获取token接口，开发者可以自定义请求方式，目前仅支持`GET`和`POST`方法，并且默认为`POST`方法。


代码如下：

```java
import cn.hutool.core.util.URLUtil;
import com.fujieid.jap.core.JapUserService;
import com.fujieid.jap.core.result.JapResponse;
import com.fujieid.jap.demo.config.JapConfigContext;
import com.fujieid.jap.oauth2.OAuthConfig;
import com.fujieid.jap.oauth2.Oauth2GrantType;
import com.fujieid.jap.oauth2.Oauth2ResponseType;
import com.fujieid.jap.oauth2.Oauth2Strategy;
import me.zhyd.oauth.utils.UuidUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 需要依赖 jap-oauth2 模块
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:07
 * @since 1.0.0
 */
@RestController
@RequestMapping("/oauth2")
public class Oauth2Controller {

    @Resource(name = "oauth2")
    private JapUserService japUserService;

    /**
     * 针对部分平台的获取用户的api不是post请求方式的处理方案：通过 setUserInfoEndpointMethodType 指定 请求类型
     *
     * @param request
     * @param response
     * @return
     * @throws IOException
     */
    @RequestMapping("/login/gitlab")
    public ModelAndView renderGitlab(HttpServletRequest request, HttpServletResponse response) throws IOException {
        JapConfigContext.strategy = "oauth2";
        OAuthConfig config = new OAuthConfig();
        config.setPlatform("gitlab")
                .setState(UuidUtils.getUUID())
                .setClientId("6a1a65a1ecf704e86d59cc86f56cd614de47d2ebc5e3ca0e0d339022a3616578")
                .setClientSecret("127898bfa5e1f5f599b78d2033c1bcd39a21f9de00588ee1337146df670b93c8")
                .setCallbackUrl("http://sso.jap.com:8443/oauth2/login/gitlab")
                .setAuthorizationUrl("https://gitlab.com/oauth/authorize")
                .setTokenUrl("https://gitlab.com/oauth/token")
                .setUserinfoUrl("https://gitlab.com/api/v4/user")
                .setScopes(new String[]{"read_user", "openid", "profile", "email"})
                .setResponseType(Oauth2ResponseType.code)
                .setGrantType(Oauth2GrantType.authorization_code)
                // 修改 userinfo endpoint 的请求方法
                .setUserInfoEndpointMethodType(Oauth2EndpointMethodType.GET)
                .setAccessTokenEndpointMethodType(Oauth2EndpointMethodType.POST);
        JapResponse japResponse = oauth2Strategy.authenticate(config, request, response);
        if (!japResponse.isSuccess()) {
            return new ModelAndView(new RedirectView("/?error=" + URLUtil.encode(japResponse.getMessage())));
        }
        if (japResponse.isRedirectUrl()) {
            return new ModelAndView(new RedirectView((String) japResponse.getData()));
        } else {
            System.out.println(japResponse.getData());
            return new ModelAndView(new RedirectView("/"));
        }
    }
}
```
