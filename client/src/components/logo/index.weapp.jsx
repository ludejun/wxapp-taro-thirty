import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import logo from "../../images/logo@2x.png";

export default class Index extends Component {
  state = {
    context: {}
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View
        style={{
          width: "100%",
          textAlign: "left",
          marginLeft: "30rpx",
          marginTop: `${this.props.statusBarHeight + 23}px`
        }}
      >
        <Image src={logo} style="width: 302rpx; height: 64rpx;" />
      </View>
    );
  }
}
