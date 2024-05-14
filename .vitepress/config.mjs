import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "stuNetCtl",
  description: "基于pikapython的开源的可编程控制器",
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://gitee.com/SenySunny/picture/raw/master/img/stuctl_32.png' }]  // 确保 href 的路径与你放置图标的路径匹配
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SenySunny/stuNetCtl' }
    ],
    footer: {
      message: '基于Apache-2.0许可发布',
      copyright: '版权所有 © 2019-2024 SenySunny'
    }
  }
})
