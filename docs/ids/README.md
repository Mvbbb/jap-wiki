---
title: IDS OAuth 2.0 服务端
---

## IDS OAuth 2.0 服务端

`jap-ids` 是基于 [RFC6749](https://tools.ietf.org/html/rfc6749)、[RFC7636](https://tools.ietf.org/html/rfc7636)、[RFC7033](https://tools.ietf.org/html/rfc7033)等标准协议和 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) 认证协议，实现的一款轻量级、业务解耦、开箱即用的新一代国产授权认证框架。

**目前已支持以下功能**：
- 授权码模式（Authorization Code Grant）
- 授权码-PKCE模式（Proof Key for Code Exchange）
- 隐式授权模式（Implicit Grant）
- 密码授权模式（Resource Owner Password Credentials Grant）
- 客户端授权模式（Client Credentials Grant）
- 刷新 access_token
- 回收 access_token
- 获取当前授权用户的基本信息
- 校验登录状态
- 异常响应
- 退出登录
- 服务发现（OpenID Connect Discovery）
- JWK 端点（JWKS）
- JWK 令牌颁发
- 自定义 JWT 加解密证书
- 全场景 response type 支持（`code`、`token`、`id_token`、`id_token token`、`code id_token`、`code token`、`code id_token token`）
- 等


完整项目 demo 代码，请参考：[jap-ids-demo](https://gitee.com/fujieid/jap-ids-demo)

本章节介绍 JAP 子模块 `jap-ids` 的具体使用方法。


<ref-link :link='`/ids/quickstart`' :title="`快速开始`"/>
<ref-link :link='`/ids/custom-login-page`' :title="`自定义登录页面`"/>
<ref-link :link='`/ids/custom-confirm-page`' :title="`自定义确认授权页面`"/>
<ref-link :link='`/ids/scope`' :title="`自定义 scope`"/>
<ref-link :link='`/ids/cache`' :title="`自定义缓存`"/>
<ref-link :link='`/ids/jwks`' :title="`自定义 Token 加密密钥`"/>
<ref-link :link='`/ids/pkce`' :title="`使用 PKCE 模式`"/>
<ref-link :link='`/ids/auto-approve`' :title="`自动授权`"/>
<ref-link :link='`/ids/error_code`' :title="`错误代码`"/>
