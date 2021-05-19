import React, { Component } from 'react'
import Taro from '@tarojs/taro'
// import { Provider } from "react-redux";

// import configStore from "./store";
import './app.less'

// const store = configStore();

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: "cloud1-4gelhm0mac74a842"
      });
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    // return <Provider store={store}>{this.props.children}</Provider>;
    return this.props.children
  }
}

export default App
