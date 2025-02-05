---
title: 错误代码
---

# 目录

[[toc]]

----

## throws 的异常类型

| 异常类        |   异常含义 |
| ------------- | -------------- | 
| `IdsException` | `jap-ids` 中的公共异常，其他异常皆继承自该异常类。请通过 `getError` 和 `getErrorDescription` 获取具体异常描述。 |
| `IdsTokenException` | 创建 Jwt Token 时发生异常，可能是 Jwt 加解密失败。        |
| `InvalidClientException` | 请求的 `client_id` 或 `client_secret` 参数无效，或者 `client_id` 对应的客户端不存在。       |
| `InvalidCodeException` | ① 授权码无效或已过期。<br> ② 启用 `PKCE` 模式时，`code_challenge` 验证失败。       |
| `InvalidGrantException` | 授权相关的异常：<br> ① `grant_type` 未传；<br> ② 不合适的 `grant_type` 。     |
| `InvalidJwksException` | JWKS 加解密异常。 <br> ① `IdsConfig.JwtConfig.jwksJson` 为空或者不正确。<br> ② 创建/解析/验证 JwkToken 时发生异常。      |
| `InvalidRedirectUriException` | 请求中传递的 `redirect_uri` 和客户端绑定的 `redirect_uri` 不一致。     |
| `InvalidRequestException` | 请求的参数不全或不支持或不正确。     |
| `InvalidScopeException` | 请求的 `scope` 参数无效、未知或者请求的权限范围超出了数据所有者授予的权限范围。     |
| `InvalidTokenException` | 无效 Token（包括 `access_token`、`refresh_token`或`id_token`）     |
| `UnsupportedGrantTypeException` | 授权服务器不支持该 `grant_type`，或者当前客户端未获得该 `grant_type` 的授权。    |
| `UnsupportedResponseTypeException` | 授权服务器不支持该 `response_type`，或者当前客户端不允许该 `response_type`。    |

