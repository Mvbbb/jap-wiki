---
title: 更新记录
editLink: false
---

# 目录

[[toc]]

----

## v1.0.1（2021-04-20）

### 新增

- 添加 `com.fujieid.jap.core.util.RequestUtil`
- 完成`jap-ids`模块

`jap-ids` 是基于 [RFC6749](https://tools.ietf.org/html/rfc6749)、[RFC7636](https://tools.ietf.org/html/rfc7636)、[RFC7033](https://tools.ietf.org/html/rfc7033)等标准协议和 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) 认证协议，实现的一款轻量级、业务解耦、简单易用的授权认证框架。

**jap-ids 目前已支持以下功能**：
- 授权码模式（Authorization Code Grant）
- 授权码-PKCE模式（Proof Key for Code Exchange）
- 隐式授权模式（Implicit Grant）
- 密码授权模式（Resource Owner Password Credentials Grant）
- 客户端授权模式（Client Credentials Grant）
- 刷新 access_token
- 回收 access_token
- 获取当前授权用户的基本信息
- 校验登录状态
- 异常提示
- 退出登录
- 服务发现（OpenID Connect Discovery）
- JWK 端点（JWKS）
- JWK 令牌颁发
- 自定义 JWT 加解密证书
- 支持多种 response type（`code`、`token`、`id_token`、`id_token token`、`code id_token`、`code token`、`code id_token token`）
- 等

### 修改

- [jap-oidc] 优化 `OidcStrategy#authenticate` 方法，缓存 `OidcDiscoveryDto`，减少不必要的 http 请求
- [jap-oidc] 优化 `OidcUtil` 工具类的代码，解决一些已知问题
- [jap-social] 解决一些已知问题
- 重构 `com.fujieid.jap.core.cache.JapLocalCache`，实现定时器，定期清理本地缓存

### PR

- 合并 Gitee PR [#9](https://gitee.com/fujieid/jap/pulls/9) by [@dreamlu](https://gitee.com/dreamlu)

### Issue

- 解决 Gitee Issue [#I3DC7N](https://gitee.com/fujieid/jap/issues/I3DC7N)


## v1.0.1-alpha.1（2021-03-07）

### 修改

- 解决 `JapErrorCode` 描述错误的问题
- 改进 `JapTokenHelper` 代码

### PR

- 合并 Gitee 的 PR [!8](https://gitee.com/fujieid/jap/pulls/8)

## v1.0.1-alpha（2021-03-05）

支持前后端分离项目，[jap-demo-vue](https://gitee.com/fujieid/jap-demo-vue)

### jap-core

#### 新功能

- 增加 `JapErrorCode` 枚举类，限定异常码和提示
- 增加 `JapResponse` 类，规范接口返回内容
- 增加 `JapTokenHelper` 类，统一管理用户的Token
- 增加 `JapContext` 类，维护 JAP 上下文信息
- 增加 `JapAuthentication` 类，统一管理登录状态信息以及 JAP 上下文信息

#### 修改

- 修改包结构
    - 将 `AuthenticateConfig`,`JapConfig` 移到 `com.fujieid.jap.core.config` 包中
    - 将 `JapUtil` 移到 `com.fujieid.jap.core.util` 包中
- 删除文件
    - 删除 `JapCacheContextHolder`
- 修改代码
    - 重构 `AbstractJapStrategy`，引入上下文 `JapContext` 和 `JapAuthentication` 类
    - 重构 `JapConfig` 类，仅保留 `sso` 和 `ssoConfig` 属性，同时增加 `tokenExpireTime` 和 `cacheExpireTime` 参数
    - 修改 `JapCacheConfig` 中的缓存默认有效期为7天
    - 修改 `JapUserService` 接口类中的默认内容
    - 在`JapCache` 中添加 `void removeKey(String key)` 方法
    - 在 `JapException` 中增加 `errorCode` 和 `errorMessage` 属性，方便将异常信息处理为统一格式的返回数据
    - 在 `JapStrategy` 接口中 `authenticate` 方法的返回类型修改为 `JapResponse`，所有模块的策略方法都返回统一格式的数据
    - 在 `JapUser` 中增加 `token` 属性，登录完成后将自动返回 JAP Token
    - 在 `JapUtil` 类中为 `redirect` 方法打上 `@Deprecated` 标记，未来可能删除。同时增加 `createToken` 方法

### jap-oauth2

- 修改 `Oauth2Strategy` 的 `authenticate` 方法，统一返回 `JapResponse`

### jap-oidc

- 修改 `OidcStrategy` 的 `authenticate` 方法，统一返回 `JapResponse`

### jap-simple

- 修改 `SimpleStrategy` 的 `authenticate` 方法，统一返回 `JapResponse`

### jap-social

- 修改 `SocialStrategy` 的 `authenticate` 方法，统一返回 `JapResponse`

### jap-sso

- 修改 `JapSsoHelper#login` 方法的返回值为当前用户的 JAP Token
- 新增 `JapSsoUtil` 类，处理 Token
- `JapSsoConfig` 类中，删除 `loginUrl` 和 `logoutUrl` 属性

### Other

- 增加一些单元测试

## v1.0.0（2021-02-18）

### 增加

- `jap-mfa` 模块，实现 TOTP 验证
- `JapUserStoreContextHolder` 中增加 `logout` 方法，一键退出登录，支持清除 Cookie、Session等
- 添加单元测试

### 修改

- 更新 `jap.sh` 脚本，支持多种常用命令
- 完善注释
- 删除 `JapConfig` 中的 `options` 属性，同时在 `SocialConfig` 中增加 `justAuthConfig` 属性
- `RememberMeDetailsUtils` 修改名称为 `RememberMeUtils`
- `Oauth2Strategy#checkOauthConfig()` 和 `Oauth2Strategy#isCallback()` 方法提到了 `Oauth2Util` 类中

### 其他

- 改进部分代码
- 重构 `SimpleConfig` 类，将非必要配置项和业务逻辑内容，移到到工具类 `RememberMeUtils` 中


## v1.0.0-alpha.1（2021-02-01）

### 增加

- 增加缓存模块`com.fujieid.jap.core.cache.JapCache`
- `jap-oauth2` 模块中增加 `state` 校验的逻辑
- 添加一些`package-info.java`

### 修改

- 修改注释
- 解决 `PkceUtil` 中 `CodeVerifier` 只能本地缓存的问题，借助 `com.fujieid.jap.core.cache.JapCache` 可以自定义实现分布式缓存
- `simple-json` 升级到 `0.0.2`

### 其他
- 修复 javadoc 编译失败的问题

## 1.0.0-alpha（2021-01-28）

JAP 是一款开源的登录中间件，基于模块化设计，并且与业务高度解耦，使用起来非常灵活，开发者可以毫不费力地将 JAP 集成到任何 web 应用程序中，就像集成 JA 一样，简单方便。Just auth into any app!

**目前实现的功能**

- [实现账号密码登录](/quickstart/jap-simple)
- [实现第三方社交帐号登录](/quickstart/jap-social)
- [实现标准的 OAuth 2.0 应用的授权码登录](/quickstart/jap-oauth2)
- [实现 OIDC 应用的登录](/quickstart/jap-oidc)
- [支持同源 domain 的单点登录](/quickstart/jap-sso)


