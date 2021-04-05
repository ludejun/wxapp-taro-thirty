import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import share from "../../images/share.svg";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View
        className="activity-container"
        onClick={this.props.onDetailClick}
      >
        <Image src={this.props.homeImgID} />
        <Button
          className="share-container"
          openType="share"
          data-share={this.props.share}
        >
          <Image src={share} />
          <Text>分享</Text>
        </Button>
      </View>
    );
  }
}
