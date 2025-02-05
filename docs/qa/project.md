---
title: 项目相关问题
---

# 目录

[[toc]]

----


## 为什么要做 JAP ？

参考文章：[我和 JAP（JA Plus） 的故事](https://my.oschina.net/yadong0415/blog/4914954)，通过该篇文章，或许你可以详细了解到 JAP 的前世今生和来世。

- JAP 口号：Just auth into any app!
- JAP 目标：让身份链接无处可藏
- JAP 价值：方便开发者无缝对接任何第三方应用或者自有系统，提高开发效率，减少代码维护成本
- JAP 愿景：以开源的方式，受惠于开源社区，赋能于开发者。使之成为开发者生态内必不可少的“基础设施”，以期形成新的技术标准。

**我们要让开发者可以基于 JAP 开发出自己的 IAM 或者 IDaaS 系统。**

## JAP 不支持具体的业务操作吗？

JAP 针对用户、应用等业务数据，只提供业务接口，不提供数据库层面的支持。JAP 要做的是为广大开发者提供一套技术标准，既然是标准，那就不能依赖于任何和具体业务相关的逻辑。不管你们的系统是用的 MySQL、Oracle、SQLlite、Redis、MongoDB还是其他的，JAP 通通不关心。JAP 对外提供标准接口，业务端只需要按需实现 JAP 的接口即可，这种设计能在最大程度上增加它的灵活性，使它不受限于某一具体的数据库实现方案。

## JAP 可以用到企业级项目吗？

当然，JAP 的价值就在于：方便开发者无缝对接任何第三方应用或者自有系统，提高开发效率，减少代码维护成本。所以对于企业来说，这是一个降本增效的功能。JAP 基于模块化开发，并且不侵入业务系统，可以十分方便的集成到企业内部各个系统或者统一的登录认证网关中。

## JAP 可以商用吗？

JAP 基于 [LGPL 3.0 协议](https://gitee.com/idaas/jap/blob/master/LICENSE)。商用分为以下两种情况：

1. LGPL **允许商业软件通过类库引用(link)方式使用**而不需要开源商业软件的代码。这使得**采用 LGPL 协议的开源代码可以被商业软件作为类库引用并发布和销售**。
2. 如果修改 LGPL 协议的代码或者衍生，则所有修改的代码，涉及修改部分的额外代码和衍生的代码都**必须采用 LGPL 协议**。因此 LGPL 协议的开源代码**不适合通过修改和衍生的方式做二次开发的商业软件采用**。

## `jap-oauth2` 和 `jap-social` 有什么区别？

- 本质上没有区别，[`jap-social`](/quickstart/jap-social) 是基于 [`JustAuth`](https://github.com/justauth/JustAuth) 实现的，所以也就支持了 [`JustAuth`](https://github.com/justauth/JustAuth) 中自定义第三方 OAuth 平台的功能。
- **`jap-oauth2` 能适配的平台，[`jap-social`](/quickstart/jap-social) 一样可以适配**，只不过，传递的参数不同而已。<a-tag color="blue">敲黑板</a-tag>
- 但是，**[`jap-social`](/quickstart/jap-social) 能适配的平台，`jap-oauth2` 不一定可以适配**，原因如下。<a-tag color="blue">敲黑板</a-tag>
- 这两个模块唯一的最大区别在于，**`jap-oauth2` 仅支持标准的 OAuth 2.0 协议**，类似于 `支付宝`、`Stack Overflow Key`、`Coding` 这种做了定制化的平台，`jap-oauth2`无法做到适配。（ps.好在[`JustAuth`](https://github.com/justauth/JustAuth)已经完成了这部分工作。）

## JAP 和 JustAuth 有什么区别？

- JustAuth 仅仅是集成了大部分的第三方登录，为第三方登录提供多而简的快速集成方案。 
- JAP 是**一款开源的认证中间件**，基于模块化设计，并且与业务高度解耦。
- JAP 不仅仅提供第三方登录组件（jap-social）还包括账号密码（jap-sample）、OAuth（jap-oauth2）、OIDC（jap-oidc）、HttpApi（jap-http-api）、LDAP（jap-ldap）、SAML（jap-saml） 等多种登录方式。
- JAP 不干预开发者的实际业务逻辑，除了需要实现 JAP 提供的**用于操作业务数据的标准接口**外，不需要其他额外配置，且不与数据层耦合。
- JAP 的功能更全面，适应的场景更加丰富。

## JAP 和 Keycloak 比较有什么区别？

- **JAP 不是管理端**。
- JAP 是**一款开源的认证中间件**，基于模块化设计，并且与业务高度解耦，使用起来非常灵活，开发者可以毫不费力地将 JAP 集成到任何 web 应用程序中。
- JAP 为登录模块（包括账号密码、OAuth 、SAML 等多种登录方式）提供了一套标准的接口，使开发者可以基于 JAP 灵活的集成并定制业务功能。
- JAP 不干预开发者的实际业务逻辑，除了需要实现 JAP 提供的**用于操作业务数据的标准接口**外，不需要其他额外配置，且不与数据层耦合。

## JAP 和 Spring Security 比较有什么亮点？

- 首先参考上面关于“JAP 和 Keycloak 比较有什么区别？”的解答
- 其次 JAP 属于国产开源软件，完全自研，代码十分轻量，方便开发者学习、扩展
- JAP IDS 的优势在于轻量性、全面性、标准化
    - 轻量性：JAP IDS 基于 Java 语言开发，与业务解耦，<a-tag color="blue">不依赖任何框架性质的第三方组件，不存在框架包袱</a-tag>。开发者可以将其应用于所有 Java 框架中，不限于：Spring 体系、ActFramework、Blade、JFinal 等
    - 全面性：JAP IDS 支持 OAuth 2.0 的四种授权模式：<a-tag color="blue">授权码模式、隐式授权模式、密码模式、客户端模式</a-tag>，同时也支持 <a-tag color="blue">PKCE 增强模式 和 OpenID Connect 协议</a-tag>
    - 标准化：<a-tag color="blue">基于 RFC6749、RFC7636、RFC7033 和 OpenID Connect Core 1.0 等标准协议实现</a-tag>，可以适配所有基于标准 OAuth 2.0 协议和 OIDC 协议的应用。

## JAP 的 Git 仓库中的分支都有什么含义？

主要有两个分支：

- 开发分支（`dev`）：最新代码，不保证稳定，实时发布 `SNAPSHOT` ，同时提交 `PR` 也是在这个分支。
- 主分支（`master`）：保护分支，稳定版代码，用于发布稳定版版本，**不接受任何 `PR`**。


## JAP 的版本有什么区别？

版本大类分两种：

- 稳定版：类似 `v1.0.0`，没有其他后缀，为官方推荐版本，可以用于生产环境。
- 快照版：类似 `v1.0.0-SNAPSHOT`，快照版会实时更新，想尝试新功能的开发者可以在开发环境使用 `SNAPSHOT` 版。

::: warning
快照版不可用于生产环境！！！    
快照版不可用于生产环境！！！    
快照版不可用于生产环境！！！    
:::
