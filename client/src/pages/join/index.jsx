import React, { Component } from "react";
import Taro from "@tarojs/taro";
import {
  View,
  Text,
  Image,
  Button,
  Input,
  RadioGroup,
  Radio,
  Label,
  Form
} from "@tarojs/components";
import "./index.less";

import share from "../../images/share.svg";
import address from "../../images/detail/address@2x.png";
import collect from "../../images/detail/collect@2x.png";
import dateImg from "../../images/detail/date@2x.png";
import name from "../../images/detail/name@2x.png";
import oil from "../../images/detail/oil@2x.png";
import phone from "../../images/detail/phone@2x.png";
import priceImg from "../../images/detail/price@2x.png";
import restImg from "../../images/detail/rest@2x.png";
import wechat from "../../images/detail/wechat@2x.png";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      users: [],
      submitLoading: false
    };
  }
  id = null;

  componentWillMount() {
    this.id = Taro.getCurrentInstance().router.params.id;
  }

  componentDidMount() {}

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

  onJoin() {}
  formSubmit(e) {
    console.log(e.detail);
    Taro.getUserProfile({
      lang: "zh_CN",
      desc: "获取您的基本信息用于辅助报名",
      success: res => {
        this.queryJoinSubmit(e.detail.value, res.userInfo);
      },
      fail: err => {
        console.log(err);
        this.queryJoinSubmit();
      }
    });
  }
  queryJoinSubmit(data, userInfo) {
    console.log(data, userInfo);
    this.setState({
      submitLoading: true
    });
    Taro.cloud
      .callFunction({
        name: "queryJoinSubmit",
        data: {
          id: this.id,
          userInfo,
          ...data
        }
      })
      .then(res => {
        console.log("报名结果：", res);
        Taro.showToast({
          title: res.result || "恭喜报名成功～"
        });
        this.setState({
          submitLoading: false
        });
      })
      .catch(err => {
        this.setState({
          submitLoading: false
        });
      });
  }
  onPayImgClick() {
    Taro.previewImage({
      showmenu: true,
      urls: [
        "cloud://cloud1-4gelhm0mac74a842.636c-cloud1-4gelhm0mac74a842-1305964684/images/WechatIMG770.png"
      ]
    });
  }

  render() {
    const {
      date,
      detailImgID,
      price,
      rest,
      title
    } = Taro.getCurrentInstance().router.params;
    const form = [
      {
        label: "真实姓名",
        name: "name",
        placehoudler: "请输入"
      },
      {
        label: "性别",
        name: "sex",
        inputType: "radio"
      },
      {
        label: "手机号",
        name: "phone",
        placehoudler: "填写你的真实手机号",
        type: "number"
      },
      {
        label: "身份证号码",
        name: "idcard",
        placehoudler: "仅用于购买户外保险",
        type: "idcard"
      },
      {
        label: "身高 cm",
        name: "height",
        placehoudler: "仅用于购买队服尺码参考",
        type: "number"
      },
      {
        label: "体重 kg",
        name: "weight",
        placehoudler: "仅用于购买队服尺码参考",
        type: "digit"
      },
      {
        label: "上衣尺码 xs/s/m/l/xl/xxl",
        name: "size",
        placehoudler: "仅用于购买队服制作"
      }
    ];

    return (
      <View className="detail-container">
        <View className="detail-image">
          <Image src={decodeURIComponent(detailImgID)} mode="aspectFill" />
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
        </View>

        <View className="date-rest">
          <View className="date-rest-item">
            <Image src={dateImg} />
            <Text
              style={{
                paddingLeft: "12rpx",
                color: "rgba(5,5,5,0.6)"
              }}
            >
              集合时间：
            </Text>
            <Text>{date}</Text>
          </View>
          <View className="date-rest-item">
            <Image src={address} />
            <Text
              style={{
                paddingLeft: "12rpx",
                color: "rgba(5,5,5,0.6)"
              }}
            >
              集合地点：
            </Text>
            <Text>{rest}</Text>
          </View>
          <View className="date-rest-item">
            <Image src={priceImg} />
            <Text
              style={{
                paddingLeft: "12rpx",
                color: "rgba(5,5,5,0.6)"
              }}
            >
              活动费用：
            </Text>
            <Text>{price}元/人</Text>
          </View>
        </View>

        <Form onSubmit={this.formSubmit.bind(this)}>
          <View className="join-form">
            <View className="form-title">
              <Text>报名表</Text>
            </View>
            {form.map(item => (
              <View key="item.label">
                <View className="form-label">
                  <Text>{item.label}</Text>
                </View>
                {item.inputType === "radio" ? (
                  <RadioGroup name={item.name}>
                    <Label>
                      <Radio
                        value={0}
                        checked={true}
                        style={{
                          background: "#F7F8FA",
                          width: "200rpx",
                          height: "80rpx",
                          lineHeight: "80rpx",
                          paddingLeft: "16rpx",
                          borderRadius: "16rpx"
                        }}
                        color="#1E5090"
                      >
                        男
                      </Radio>
                    </Label>
                    <Label style={{ marginLeft: "20rpx" }}>
                      <Radio
                        value={1}
                        checked={false}
                        style={{
                          background: "#F7F8FA",
                          width: "200rpx",
                          height: "80rpx",
                          lineHeight: "80rpx",
                          paddingLeft: "16rpx",
                          borderRadius: "16rpx"
                        }}
                        color="#1E5090"
                      >
                        女
                      </Radio>
                    </Label>
                  </RadioGroup>
                ) : (
                  <Input
                    placeholder={item.placehoudler}
                    confirm-type="done"
                    type={item.type || "text"}
                    placeholder-class="form-input"
                    name={item.name}
                  />
                )}
              </View>
            ))}
          </View>

          <View
            className="date-rest"
            style={{
              paddingBottom: "170rpx",
              marginTop: "58rpx"
            }}
          >
            <View
              className="form-title"
              style={{ marginBottom: "32rpx" }}
              onClick={() => this.onPayImgClick()}
            >
              <Text>费用支付</Text>
              <Image
                src={
                  "cloud://cloud1-4gelhm0mac74a842.636c-cloud1-4gelhm0mac74a842-1305964684/images/WechatIMG770.png"
                }
                style={{ width: "100%" }}
                mode="widthFix"
                show-menu-by-longpress
              />
            </View>

            <View className="form-title" style={{ marginBottom: "32rpx" }}>
              <Text>报名联系人</Text>
            </View>
            <View className="date-rest-item">
              <Image src={name} />
              <Text
                style={{
                  paddingLeft: "12rpx",
                  color: "rgba(5,5,5,0.6)"
                }}
              >
                联系人：
              </Text>
              <Text>{"邢哲魁"}</Text>
            </View>
            <View
              className="date-rest-item"
              onClick={() =>
                Taro.makePhoneCall({
                  phoneNumber: "18618399795"
                })
              }
            >
              <Image src={phone} />
              <Text
                style={{
                  paddingLeft: "12rpx",
                  color: "rgba(5,5,5,0.6)"
                }}
              >
                手机：
              </Text>
              <Text style={{ color: "#1E5090" }}>{"186 1839 9795"}</Text>
            </View>
            <View className="date-rest-item">
              <Image src={wechat} />
              <Text
                style={{
                  paddingLeft: "12rpx",
                  color: "rgba(5,5,5,0.6)"
                }}
              >
                微信：
              </Text>
              <Text>186 1839 9795</Text>
            </View>
          </View>

          <View className="join-container">
            <View className="join-bottom">
              <Button
                className="join"
                formType="submit"
                loading={this.state.submitLoading}
              >
                立即报名
              </Button>
            </View>
            <View style={{ height: `${0}px` }} />
          </View>
        </Form>
      </View>
    );
  }
}
