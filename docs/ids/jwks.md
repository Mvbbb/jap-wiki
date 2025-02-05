---
title: 自定义 Token 加密密钥
---

# 目录

[[toc]]

----

## 配置 JWKS 密钥

在 [快速开始](/ids/quickstart) 一文中，简单介绍了一下配置 JWKS 加解密密钥的方式，本文将详细介绍该部分内容。

jwks 的相关内容，是通过 `JwtConfig` 配置类进行配置，如下：
```java
new JwtConfig()
    .setJwksKeyId("jap-jwk-keyid")
    .setJwksJson("{\n" +
        "    \"keys\": [\n" +
        "        {\n" +
        "            \"p\": \"v5G0QPkr9zi1znff2g7p5K1ac1F2KNjXmk31Etl0UrRBwHiTxM_MkkldGlxnXWoFL4_cPZZMt_W14Td5qApknLFOh9iRWRPwqlFgC-eQzUjPeYvxjRbtV5QUHtbzrDCLjLiSNyhsLXHyi_yOawD2BS4U6sBWMSJlL2lShU7EAaU\",\n" +
        "            \"kty\": \"RSA\",\n" +
        "            \"q\": \"s2X9UeuEWky_io9hFAoHZjBxMBheNAGrHXtWat6zlg2tf_SIKpZ7Xs8C_-kr9Pvj-D428QsOjFZE-EtNBSXoMrvlMk7fGDl9x1dHvLS9GSitkXH2-Wthg8j0j0nfAmyEt94jP-XEkYic1Ok7EfBOPuvL21HO7YuB-cOff9ZGvBk\",\n" +
        "            \"d\": \"Rj-QBeBdx85VIHkwVY1T94ZeeC_Z6Zw-cz5lk5Msw0U9QhSTWo28-d2lYjK7dhQn-E19JhTbCVE11UuUqENKZmO__yRgO1UJaj2x6vWMtgJptah7m8lI-QW0w6TnVxAHWfRPpKSEfbN4SpeufYf5PYhmmzT0A954Z2o0kqS4iHd0gwNAovOXaxriGXO1CcOQjBFEcm0BdboQZ7CKCoJ1D6S0xZpVFSJg-1AtagY5dzStyekzETO2tQSmVw4ogIoJsIbu3aYwbukmCoULQfJ36D0mPzrTG5oocEbbuCps_vH72VjZORHHAl4hwritFT_jD2bdQHSNMGukga8C0L1WQQ\",\n" +
        "            \"e\": \"AQAB\",\n" +
        "            \"use\": \"sig\",\n" +
        "            \"kid\": \"jap-jwk-keyid\",\n" +
        "            \"qi\": \"Asr5dZMDvwgquE6uFnDaBC76PY5JUzxQ5wY5oc4nhIm8UxQWwYZTWq-HOWkMB5c99fG1QxLWQKGtsguXfOXoNgnI--yHzLZcXf1XAd0siguaF1cgQIqwRUf4byofE6uJ-2ZON_ezn6Uvly8fDIlgwmKAiiwWvHI4iLqvqOReBgs\",\n" +
        "            \"dp\": \"oIUzuFnR6FcBqJ8z2KE0haRorUZuLy38A1UdbQz_dqmKiv--OmUw8sc8l3EkP9ctvzvZfVWqtV7TZ4M3koIa6l18A0KKEE0wFVcYlwETiaBgEWYdIm86s27mKS1Og1MuK90gz800UCQx6_DVWX41qAOEDWzbDFLY3JBxUDi-7u0\",\n" +
        "            \"alg\": \"RS256\",\n" +
        "            \"dq\": \"MpNSM0IecgapCTsatzeMlnaZsmFsTWUbBJi86CwYnPkGLMiXisoZxcS-p77osYxB3L5NZu8jDtVTZFx2PjlNmN_34ZLyujWbDBPDGaQqm2koZZSnd_GZ8Dk7GRpOULSfRebOMTlpjU3iSPPnv0rsBDkdo5sQp09pOSy5TqTuFCE\",\n" +
        "            \"n\": \"hj8zFdhYFi-47PO4B4HTRuOLPR_rpZJi66g4JoY4gyhb5v3Q57etSU9BnW9QQNoUMDvhCFSwkz0hgY5HqVj0zOG5s9x2a594UDIinKsm434b-pT6bueYdvM_mIUEKka5pqhy90wTTka42GvM-rBATHPTarq0kPTR1iBtYao8zX-RWmCbdumEWOkMFUGbBkUcOSJWzoLzN161WdYr2kJU5PFraUP3hG9fPpMEtvqd6IwEL-MOVx3nqc7zk3D91E6eU7EaOy8nz8echQLl6Ps34BSwEpgOhaHDD6IJzetW-KorYeC0r0okXhrl0sUVE2c71vKPVVtueJSIH6OwA3dVHQ\"\n" +
        "        }\n" +
        "    ]\n" +
        "}")
```

这儿有几点要注意：
1. `JwksKeyId`和`JwksJson`（证书）中的 `kid` 属性要一致；
2. `JwksKeyId` 默认为 `jap-jwk-keyid`；
3. 如果 `JwksJson`（证书） 中的 `kid` 不等于 `jap-jwk-keyid`，则必须要通过 `setJwksKeyId` 指定正确的 `kid`；
4. `JapIds.registerContext` 方法，必须要在 http 接口请求发起前执行。推荐处理方式：监听项目启动事件，项目启动成功后立即执行该方法。

::: warning 生成 JWK 证书的方式
- 从 [https://mkjwk.org/](https://mkjwk.org/) 平台生成。生成证书时，请注意选择加密算法，`jap-ids` 默认使用 `RS256` 算法。；
- 使用 `jap-ids` 中提供的 `com.fujieid.jap.ids.util.JwkUtil` 工具类生成证书。注意：使用 `JwkUtil.createRsaJsonWebKeySetJson` 或者 `JwkUtil.createEsJsonWebKeySetJson` **这两个方法生成证书才能用于 `jap-ids` token 的加解密**。其他方法是为了方便开发者在其他业务下便捷生成证书而提供的。
  :::

::: tip 关于支持的加解密算法
`jap-ids` 中 token 的加解密仅支持以下算法：`RS256`、`RS384`、`RS512`、`ES256`、`ES384`、`ES512`
:::

## 关于 JwtConfig 配置类

可用配置参数如下：

| 属性  | 含义 | 备注 |
| :------------: | :------------: | :------------ |
| `jwksKeyId` | 加密密钥ID | 和`jwksJson`中的`kid`一致 |
| `jwtVerificationType` | jwt令牌的验证方式 | - `HTTPS_JWKS_ENDPOINT` 使用 https jwks 端点(http 接口)验证 <br> - `JWKS` 使用 `jwks` json 配置 |
| `jwksJson` | jwks json字符串 |  |
| `tokenSigningAlg` | jwt令牌加密算法 | 和 jwks 密钥生成算法一致 |


## 更多功能

<ref-link :link='`/ids/quickstart`' :title="`快速开始`"/>
<ref-link :link='`/ids/custom-login-page`' :title="`自定义登录页面`"/>
<ref-link :link='`/ids/custom-confirm-page`' :title="`自定义确认授权页面`"/>
<ref-link :link='`/ids/scope`' :title="`自定义 scope`"/>
<ref-link :link='`/ids/cache`' :title="`自定义缓存`"/>
<ref-link :link='`/ids/pkce`' :title="`使用 PKCE 模式`"/>
<ref-link :link='`/ids/auto-approve`' :title="`自动授权`"/>
<ref-link :link='`/ids/error_code`' :title="`错误代码`"/>
