# wxapp-taro-demo

使用Taro（开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 等应用）作为开发微信小程序的Demo。集成微信云开发功能。
复杂组件库使用的是**Taro-UI** 3.0版本，目前是alpha版本，不过配合Taro3.0已可以简单使用。

云数据库建议尽量只在云服务端调用
cloud/functions即为云函数；cloud/images为云存储静态资源，在数据库中存储路径给client调用

#### 快速使用

开发
```shell
# 准备工作，如有可跳过
yarn global add @tarojs/cli

cd client
yarn install
yarn dev:weapp
```
将微信开发者工具的目录指定为项目根目录，开发者工具会根据根目录的[project.config.json]找到显示代码[client/dist]。云函数需要在开发者工具中右键每个函数文件夹，点击[创建并部署：云端安装依赖]，云函数本地有修改，需要右键函数文件夹，点击[上传并部署：云端安装依赖]

生产打包
```shell
cd client
yarn build:weapp
```
微信开发者工具上传，并在微信后台指定为体验版

### 参考文档

Taro文档：https://taro-docs.jd.com/taro/docs/GETTING-STARTED
Taro设计稿尺寸配置：https://taro-docs.jd.com/taro/docs/size 可以自己修改client/config/index的配置
Taro基础组件：https://taro-docs.jd.com/taro/docs/components-desc
Taro云开发：https://taro-docs.jd.com/taro/docs/apis/cloud/cloud
Taro路由跳转API：https://taro-docs.jd.com/taro/docs/apis/route/navigateTo
微信获取用户信息（最新2021-04上线）：https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html
微信分享：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object
开发者若需要在界面中展示用户的头像昵称信息，使用<open-data>组件：https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html
微信云开发数据库基础概念：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/capabilities.html#%E6%95%B0%E6%8D%AE%E5%BA%93
微信云函数基础概念：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/getting-started.html
微信云开发数据库增删改查：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database/read.html
微信云函数获取用户数据（openid、unionid等）：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/userinfo.html
Taro-UI文档：https://taro-ui.jd.com/#/docs/tabs
小程序登录、用户信息相关接口调整说明：https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?idescene=6
Taro实现原理：https://mp.weixin.qq.com/s?__biz=MzU3NDkzMTI3MA==&mid=2247483770&idx=1&sn=ba2cdea5256e1c4e7bb513aa4c837834
remax实现原理：https://remaxjs.org/guide/implementation-notes