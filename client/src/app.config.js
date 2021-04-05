export default {
  pages: [
    "pages/index/index",
    "pages/mine/index",
    "pages/detail/index",
    "pages/join/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "中欧校友会",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    color: "#333333",
    selectedColor: "#333333",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "images/tabs/home@2x.png",
        selectedIconPath: "images/tabs/home-active@2x.png"
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "./images/tabs/mine@2x.png",
        selectedIconPath: "./images/tabs/mine-active@2x.png"
      }
    ]
  },
  cloud: true
};
