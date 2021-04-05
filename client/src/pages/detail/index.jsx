import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Button, OfficialAccount } from "@tarojs/components";
import "./index.less";

import share from "../../images/share.svg";
import address from "../../images/detail/address@2x.png";
import collect from "../../images/detail/collect@2x.png";
import dateImg from "../../images/detail/date@2x.png";
import name from "../../images/detail/name@2x.png";
import oil from "../../images/detail/oil@2x.png";
import phone from "../../images/detail/phone@2x.png";
import price from "../../images/detail/price@2x.png";
import restImg from "../../images/detail/rest@2x.png";
import wechat from "../../images/detail/wechat@2x.png";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      users: []
    };
  }
  id = null;

  componentWillMount() {
    this.id = Taro.getCurrentInstance().router.params.id;
  }

  componentDidMount() {
    Taro.showLoading({ title: "Loading..." });
    Taro.cloud
      .callFunction({
        name: "queryDetail",
        data: {
          id: this.id
        }
      })
      .then(res => {
        if (res.result && res.result.length === 1) {
          this.setState({
            detail: res.result[0]
          });
          Taro.setNavigationBarTitle({
            title: res.result[0].title
          });
        } else {
          Taro.showToast({
            title: "活动ID不存在或重复～"
          });
        }
        console.log(1111, res.result);
        Taro.hideLoading();
      })
      .catch(err => {
        Taro.showToast({
          title: "网络异常，请重试～"
        });
      });

    Taro.cloud
      .callFunction({
        name: "queryUsers",
        data: {
          id: this.id
        }
      })
      .then(res => {
        this.setState({
          users: res.result.map(item => item.userinfo)
        });
        console.log(2222, res);
      });

    Taro.getSystemInfo({
      success: res => {
        this.setState({
          bottom: res.screenHeight - res.safeArea.bottom
        });
      }
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onShareAppMessage() {
    console.log("share", this.id);
    return {
      title: this.state.detail.title,
      path: `/pages/detail/index?id=${this.id}`,
      imageUrl: this.state.detail.detailImgID
    };
  }

  onJoin() {
    const {
      date,
      detailImgID,
      price,
      rest,
      title
    } = this.state.detail;
    Taro.navigateTo({
      url: `/pages/join/index?id=${this.id}&title=${
        title
      }&detailImgID=${encodeURIComponent(
        detailImgID
      )}&price=${price}&rest=${rest}&date=${date}`
    });
  }

  render() {
    const {
      date,
      describe,
      detail = [],
      detailImgID,
      price,
      province,
      pv,
      rest,
      title
    } = this.state.detail;

    return (
      <View className="detail-container">
        <View className="detail-image">
          <Image src={detailImgID} mode="aspectFill" />
        </View>
        <View
          style={{
            marginTop: "38rpx",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text className="title">{title}</Text>
          <Button className="share" openType="share">
            <Image src={share} />
          </Button>
        </View>
        <View
          style={{
            marginTop: "22rpx",
            fontSize: "26rpx",
            color: "rgba(5,5,5, 0.4)"
          }}
        >
          <Text>浏览 {pv} 次</Text>
        </View>
        <View
          style={{
            marginTop: "14rpx",
            fontSize: "48rpx",
            color: "#E02020"
          }}
        >
          <Text style={{ fontSize: "26rpx" }}>¥</Text>
          <Text>{price}</Text>
        </View>
        <View className="date-rest">
          <Image src={dateImg} />
          <Text style={{ paddingLeft: "8rpx" }}>{date}</Text>
          <Image style={{ paddingLeft: "26rpx" }} src={restImg} />
          <Text style={{ paddingLeft: "8rpx" }}>{rest}</Text>
        </View>

        <OfficialAccount></OfficialAccount>

        <View className="joined-users">
          <Text>最近参与</Text>
          {this.state.users.map(user => (
            <Image src={user.avatarUrl} />
          ))}
        </View>

        <View style={{ marginTop: "50rpx" }}>
          <View
            style={{
              color: "#050505",
              fontSize: "38rpx",
              marginBottom: "12rpx",
              fontWeight: "600"
            }}
          >
            <Text>活动详情</Text>
          </View>
          <View className="detail-info">
            {detail.map(item => {
              if (
                item.indexOf("cloud://") >= 0 ||
                item.indexOf("https://") >= 0
              ) {
                return <Image src={item} mode="widthFix" />;
              } else {
                return <Text>{item}</Text>;
              }
            })}
          </View>
        </View>

        <View className="join-container">
          <View className="join-bottom">
            <View className="join-icon">
              <Image src={collect} />
              <Text>收藏</Text>
            </View>
            <View className="join-icon">
              <Image src={oil} />
              <Text>补给站</Text>
            </View>
            <View className="join" onClick={this.onJoin.bind(this)}>
              <Text>立即报名</Text>
            </View>
          </View>
          <View style={{ height: `${this.state.bottom || 0}px` }} />
        </View>
      </View>
    );
  }
}
