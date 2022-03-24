module.exports = {
  title: 'Linger-UI',
  base: '/linger-ui/',

  themeConfig: {
    sidebar: [
      {
        title: '快速开始', // 必要的
        path: '/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1 // 可选的, 默认值是 1
      },
      {
        title: 'Card',
        path: '/componentDocs/card.md',
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}
