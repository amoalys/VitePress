const path = require('path')

module.exports = {
  lang: 'zh-Hans',

  title: '云虚仿平台',
  description: '云虚仿平台使用文档',
  base:'/vuePressDoc',
  themeConfig: {
    navbar:false,
    repo: 'docschina/vitepress-docs-cn',
    docsDir: 'docs',
    smoothScroll: true,
    editLinks: false,
    editLinkText: '在 GitHub 上编辑此页面',
    lastUpdated: '上次更新',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    sidebar: {
      '/': getGuideSidebar()
    }
  },
}

function getGuideSidebar() {
  return [
    {
      text: '文档教程',
      children: [
        { text: '教师端', link: '/index.html'},
        { text: '学生端', link: '/getting-started.html' },
        { text: '仿真界面(教师、学生通用)', link: '/configuration.html' },
      
      ]
    },
    {
      text: '视频教程',
      children: [
        { text: '基本使用', link: '/video.html' },
      
      ]
    }
  ]
}