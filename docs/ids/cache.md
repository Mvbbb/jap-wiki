---
title: 自定义缓存
---

# 目录

[[toc]]

----


## 默认情况

`jap-ids` 默认提供了基于内存的缓存方案，如果不能满足你的业务场景，可以实现自定义的缓存。

## 实现自定义缓存

开发者可以实现 `JapCache` 接口，实现类可以基于其他缓存方案，比如 Redis 等。

```java
package com.fujieid.ids.demo.service;

import com.fujieid.jap.core.cache.JapCache;

import java.io.Serializable;

/**
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021-04-17 20:06
 * @since 1.0.0
 */
public class IdsCacheImpl implements JapCache {
    /**
     * Set cache
     *
     * @param key   Cache key
     * @param value Cache value after serialization
     */
    @Override
    public void set(String key, Serializable value) {

    }

    /**
     * Set the cache and specify the expiration time of the cache
     *
     * @param key     Cache key
     * @param value   Cache value after serialization
     * @param timeout The expiration time of the cache, in milliseconds
     */
    @Override
    public void set(String key, Serializable value, long timeout) {

    }

    /**
     * Get cache value
     *
     * @param key Cache key
     * @return Cache value
     */
    @Override
    public Serializable get(String key) {
        return null;
    }

    /**
     * Determine whether a key exists in the cache
     *
     * @param key Cache key
     * @return boolean
     */
    @Override
    public boolean containsKey(String key) {
        return false;
    }

    /**
     * Delete the key from the cache
     *
     * @param key Cache key
     */
    @Override
    public void removeKey(String key) {

    }
}
```

## 注册缓存

通过 `IdsContext` 的 `setCache` 方法设置自定义的 `cache` 实现。

两种方法：
1. 在调用 `JapIds.registerContext` 时指定缓存实现
```java
JapIds.registerContext(new IdsContext()
        .setCache(new IdsCacheImpl());
```
2. 手动注册
```java
JapIds.getContext().setCache(new IdsCacheImpl())
```

## 更多功能

<ref-link :link='`/ids/quickstart`' :title="`快速开始`"/>
<ref-link :link='`/ids/custom-login-page`' :title="`自定义登录页面`"/>
<ref-link :link='`/ids/custom-confirm-page`' :title="`自定义确认授权页面`"/>
<ref-link :link='`/ids/scope`' :title="`自定义 scope`"/>
<ref-link :link='`/ids/jwks`' :title="`自定义 Token 加密密钥`"/>
<ref-link :link='`/ids/pkce`' :title="`使用 PKCE 模式`"/>
<ref-link :link='`/ids/auto-approve`' :title="`自动授权`"/>
<ref-link :link='`/ids/error_code`' :title="`错误代码`"/>
