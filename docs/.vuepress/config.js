module.exports = {
    base: '/',
    port: 8088,
    title: 'JA Plus',
    description: 'JAP 是一款开源的认证中间件，基于模块化设计，并且与业务高度解耦，使用起来非常灵活，开发者可以毫不费力地将 JAP 集成到任何 web 应用程序中。',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'JA Plus',
            description: 'Just auth for any app'
        },
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'JA Plus',
            description: 'Just auth for any app'
        }
    },
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'baidu-site-verification', content: 'code-OmTOoMHYB6'}],
        ['meta', {name: 'description', content: 'JAP 是一款开源的认证中间件，基于模块化设计，并且与业务高度解耦，使用起来非常灵活，开发者可以毫不费力地将 JAP 集成到任何 web 应用程序中。'}],
        ['meta', {name: 'keywords', content: 'JAP,JustAuth,第三方授权登录,OAuth,SAML,登录认证'}],
        ['script', {}, `
             var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?f71eac525bffaa9e543a90337ddeb24b";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
              
              // gitter
              var hm1 = document.createElement("script");
              hm1.src = "https://sidecar.gitter.im/dist/sidecar.v1.js";
              var s1 = document.getElementsByTagName("script")[0]; 
              s1.parentNode.insertBefore(hm1, s1);
            })();
            
            ((window.gitter = {}).chat = {}).options = {
              room: 'fujieid/JAP'
            };
        `]
    ],
    plugins: [
        ['homebadge', {
            selector: '.hero',
            repoLink: 'https://github.com/fujieid/jap/releases',
            badgeLink: 'https://img.shields.io/badge/version-1.0.1%20alpha-green',
            badgeGroup: [
                'https://img.shields.io/badge/license-LGPL%203.0-red',
                'https://img.shields.io/badge/JDK-1.8+-green.svg',
                'https://img.shields.io/badge/Api%20Docs-latest-orange',
                'https://img.shields.io/badge/Docs-latest-blueviolet.svg',
                'https://codecov.io/gh/fujieid/jap/branch/master/graph/badge.svg?token=WmfmgwxtnJ',
                'https://travis-ci.com/fujieid/jap.svg?branch=master&status=passed',
                'https://gitee.com/fujieid/jap/badge/star.svg?theme=white',
                'https://img.shields.io/github/stars/fujieid/jap?style=social'
            ]
        }]
    ],
    markdown: {
        // 代码块显示行号
        lineNumbers: true
    },
    theme: 'antdocs',
    themeConfig: {
        // 显示所有页面的标题链接
        // displayAllHeaders: true,
        search: true,
        // 搜索结果数量
        searchMaxSuggestions: 10,
        // 最后更新时间 string | boolean
        lastUpdated: '上次更新',
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        // 启用页面滚动效果
        smoothScroll: true,
        backToTop: true,
        logo: '/sidebar-logo.png', // 侧边栏显示2级

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/fujieid/jap',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://gitee.com/fujieid/jap-wiki',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',

        ads: {
            style: 2,
            speed: 3000,
            items:[
                {
                    text: '好工具一定要分享给最好的朋友，ProcessOn助您和好友一起高效办公！',
                    image:'/ads/my/processon.png',
                    link: 'https://www.processon.com/i/5b7e28ffe4b08faf8c3116db'
                },
                {
                    text: '爆款特惠 - 精选爆款产品低至0.55折',
                    image:'/ads/my/aliyun1.jpg',
                    link: 'https://www.aliyun.com/activity/daily/bestoffer?userCode=wylo59db'
                },
                {
                    text: '新人福利专场 - 新用户福利享不停',
                    image:'/ads/my/aliyun2.jpg',
                    link: 'https://www.aliyun.com/1111/new?userCode=wylo59db'
                },
                {
                    text: '四步夺宝 赢 Flink 潮牌卫衣，首购享一折优惠',
                    image:'/ads/my/aliyun3.jpg',
                    link: 'https://developer.aliyun.com/topic/ffa2020/treasure1?userCode=wylo59db'
                },
                {
                    text: '如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在 JustAuth 文档侧边栏等页面。',
                    image:'/_sponsor.png',
                    link: '/sponsor'
                }
            ]
        },
        nav: [ // 导航栏配置
            {text: 'Getting Started', link: '/about'},
            {
                text: '💸 特别赞助商',
                ariaLabel: '特别赞助商',
                items: [
                    {text: '我要赞助', link: '/sponsor'},
                    {text: '符节科技 - 企业级身份云', link: 'https://www.fujieid.com?utm_source=justauth', target: '_blank'},
                ]
            },
            // { text: '📖 博客', link: '/blogs' },
            {text: '💬 留言', link: 'https://github.com/fujieid/jap/issues', target: '_blank'},
            {
                text: '👪 社区',
                ariaLabel: 'JAP 社区',
                items: [
                    {text: '我们需要什么？', link: '/community/weneed'},
                    {text: '成员相关', link: '/community/members'},
                    {text: '贡献者行为准则', link: '/community/code-of-conduct'},
                    {text: '贡献者指南', link: '/community/contributing'},
                    {text: '用户权益', link: '/community/user-rights'},
                ]
            },
            {
                text: '❓ 常见问题',
                items: [
                    {text: '项目相关问题', link: '/qa/project'},
                    {text: '异常相关问题', link: '/qa/error'},
                    {text: '功能相关问题', link: '/qa/func'},
                ]
            },
            {
                text: '🚀 开源地址',
                items: [
                    {text: 'Gitee', link: 'https://gitee.com/fujieid/jap', target: '_blank'},
                    {text: 'Github', link: 'https://github.com/fujieid/jap', target: '_blank'}
                ]
            },
        ],
        sidebar: {
            '/': [
                // ['demo', '例子'],
                ['about', '关于'],
                {
                    title: '快速开始',
                    path: '/quickstart/',
                    sidebarDepth: 3, // 侧边栏显示2级
                    children: [
                        ['/quickstart/notice', '须知'],
                        ['/quickstart/explain', '名词解释'],
                        ['/quickstart/jap-simple', '使用 jap-simple'],
                        ['/quickstart/jap-social', '使用 jap-social'],
                        ['/quickstart/jap-oauth2', '使用 jap-oauth2'],
                        ['/quickstart/jap-oidc', '使用 jap-oidc'],
                        ['/quickstart/jap-sso', '使用 jap-sso'],
                        ['/quickstart/jap-mfa', '使用 jap-mfa'],
                        ['/quickstart/front-end-and-backend', '前后端分离架构下使用 JAP'],
                        {
                            title: '    旧版文档',
                            path: '/quickstart/old/',
                            sidebarDepth: 4, // 侧边栏显示2级
                            children: [
                                ['/quickstart/old/jap-simple', '使用 jap-simple【旧版 v1.0.0】'],
                                ['/quickstart/old/jap-social', '使用 jap-social【旧版 v1.0.0】'],
                                ['/quickstart/old/jap-oauth2', '使用 jap-oauth2【旧版 v1.0.0】'],
                                ['/quickstart/old/jap-oidc', '使用 jap-oidc【旧版 v1.0.0】'],
                                ['/quickstart/old/jap-sso', '使用 jap-sso【旧版 v1.0.0】'],
                                ['/quickstart/old/jap-mfa', '使用 jap-mfa【旧版 v1.0.0】']
                            ]
                        }
                    ]
                },
                // {
                //     title: '进阶使用',
                //     path: '/quickstart/',
                //     sidebarDepth: 3, // 侧边栏显示2级
                //     children: [
                //         ['/quickstart/notice', '须知'],
                //         ['/quickstart/explain', '名词解释'],
                //         ['/quickstart/jap-simple', '使用 jap-simple'],
                //         ['/quickstart/jap-social', '使用 jap-social'],
                //         ['/quickstart/jap-oauth2', '使用 jap-oauth2'],
                //         ['/quickstart/jap-oidc', '使用 jap-oidc'],
                //         ['/quickstart/jap-sso', '使用 jap-sso'],
                //         ['/quickstart/error_code', '异常代码']
                //     ]
                // },
                ['contributors', '贡献者'],
                ['thx', '致谢'],
                ['update', '更新记录'],
            ]
        }, // 侧边栏配置
        sidebarDepth: 1
    }
};
