import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, OpenData } from "@tarojs/components";
import './index.less'

import { AtList, AtListItem } from "taro-ui";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";

import qrcode from '../../images/mine/qrcode@2x.png'
import pay from "../../images/mine/pay@2x.png";
import success from "../../images/mine/success@2x.png";
import pay2 from "../../images/mine/pay2@2x.png";
import join from "../../images/mine/join@2x.png";
import card from "../../images/mine/card@2x.png";
import activity from "../../images/mine/activity@2x.png";
import collect from "../../images/mine/collect@2x.png";
import address from "../../images/mine/address@2x.png";
import help from "../../images/mine/help@2x.png";

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userinfo: {}
    }
  }
  componentWillMount () { }

  componentDidMount () {
    // Taro.getSetting({
    //   success: function(res) {
    //     if (!res.authSetting["scope.userInfo"]) {
    //       Taro.authorize({
    //         scope: "scope.userInfo",
    //         success: function(res) {
    //           console.log(222, res);
    //         }
    //       });
    //     }
    //   }
    // });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="mine-container">
        <View
          className="mine-base"
          style={{ height: "200rpx", display: "flex", alignItems: "center" }}
        >
          <View className="avatar">
            <OpenData type="userAvatarUrl" />
          </View>
          <View style={{ padding: "0 20rpx", width: "400rpx" }}>
            <View
              style={{ fontWeight: "550", fontSize: "40rpx", color: "#333" }}
            >
              <OpenData type="userNickName" />
            </View>
            <View style={{ fontSize: "28rpx", color: "#999" }}>
              <Text>17717288282</Text>
            </View>
          </View>
          <View>
            <Image src={qrcode} style={{ width: "40rpx", height: "40rpx" }} />
          </View>
        </View>

        <View className="mine-base" style={{ height: "300rpx", padding: 0 }}>
          <View className="mine-card-title">
            <View
              style={{ fontSize: "36rpx", color: "#333", fontWeight: "550" }}
            >
              <Text>我的票券</Text>
            </View>
            <View style={{ fontSize: "28rpx", color: "#999" }}>
              <Text>全部订单</Text>
            </View>
          </View>
          <View className="mine-card">
            <View className="mine-card-item">
              <Image src={pay} />
              <Text>待付款</Text>
            </View>
            <View className="mine-card-item">
              <Image src={success} />
              <Text>已完成</Text>
            </View>
            <View className="mine-card-item">
              <Image src={pay2} />
              <Text>待支付</Text>
            </View>
            <View className="mine-card-item">
              <Image src={join} />
              <Text>待参加</Text>
            </View>
          </View>
        </View>

        <View className="mine-base" style={{ padding: 0 }}>
          <AtList hasBorder={false}>
            <AtListItem
              title="我的名片"
              extraText="1张"
              arrow="right"
              hasBorder={false}
              thumb={card}
            />
            <AtListItem
              title="我的活动"
              arrow="right"
              hasBorder={false}
              thumb={activity}
            />
            <AtListItem
              title="我的收藏"
              extraText="详细信息"
              arrow="right"
              hasBorder={false}
              thumb={collect}
            />
            <AtListItem
              title="我的收货地址"
              arrow="right"
              hasBorder={false}
              thumb={address}
            />
          </AtList>
        </View>

        <View className="mine-base" style={{ padding: 0 }}>
          <AtList hasBorder={false}>
            <AtListItem
              title="帮助与反馈"
              arrow="right"
              hasBorder={false}
              thumb={help}
            />
          </AtList>
        </View>
      </View>
    );
  }
}
