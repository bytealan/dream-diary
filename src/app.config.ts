export default defineAppConfig({
  darkmode: true,
  themeLocation: 'theme.json',
  pages: [
    'pages/index/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '@bgColor',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: "custom"
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/index/index",
        text: "้ฆ้กต",
      },
      {
        pagePath: "pages/my/index",
        text: "ๆ็",
      },
    ]
  }
})
