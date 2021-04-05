import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";

import "taro-ui/dist/style/components/tabs.scss";
import "./index.less";

import Logo from "../../components/logo/index.weapp.jsx";
import Activity from "../../components/activity/index.weapp.jsx";
import ActivityLight from "../../components/activity-light/index.weapp.jsx";
import Toggle from "../../components/toggle/index.weapp.jsx";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      activeties: [],
      toggle: false
    };
  }

  componentWillMount() {}

  componentDidMount() {
    Taro.showLoading({ title: "Loading..." });
    Taro.cloud
      .callFunction({
        name: "queryActivitiesList"
      })
      .then(res => {
        this.setState({
          activeties: res.result
        });
        console.log(1111, res);
        Taro.hideLoading();
      })
      .catch(err => {
        Taro.showToast({
          title: "网络异常，请重试～"
        });
      });
    // Taro.showShareMenu({
    //   withShareTicket: true
    // }).then(res => {
    //   console.log('share success', res)
    // }).catch(err => {
    //   Taro.showToast({
    //     title: err
    //   });
    // })
    Taro.getSystemInfo({
      success: res => {
        this.setState({
          statusBarHeight: res.statusBarHeight,
          screenHeight: res.screenHeight
        });
      }
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onShareAppMessage(args) {
    console.log(args);
    if (args.from === "button") {
      if (args.target.dataset.share) {
        const { share } = args.target.dataset;
        return {
          title: share.title,
          path: "/pages/index/index",
          imageUrl: share.imageUrl
        };
      }
    }
    return {
      title: "三十而立攀登之旅",
      path: "/pages/index/index"
    };
  }

  handleClick(value) {
    this.setState({
      current: value
    });
  }
  onToggle() {
    this.setState({
      toggle: !this.state.toggle
    });
  }
  onDetailClick(id) {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    });
  }

  render() {
    const tabList = [{ title: "活动" }, { title: "补给站" }, { title: "我们" }];
    return (
      <View className="container">
        <View
          style={`height: ${this.state.statusBarHeight ||
            22}px; position: fixed; top: 0; width: 100%; background: #fff;z-index: 10000;`}
        />
        <Logo statusBarHeight={this.state.statusBarHeight || 22} />
        <View style={{ position: "relative" }}>
          <AtTabs
            current={this.state.current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane current={this.state.current} index={0}>
              <View
                style={{
                  textAlign: "center",
                  height: `${this.state.screenHeight -
                    this.state.statusBarHeight -
                    160}px`,
                  padding: "0 16px"
                }}
              >
                {this.state.activeties.length > 0 &&
                  this.state.activeties.map((item, index) => {
                    return !this.state.toggle ? (
                      <Activity
                        key={item.id}
                        homeImgID={item.homeImgID}
                        share={{
                          title: item.title,
                          id: item.id,
                          imageUrl: item.detailImgID
                        }}
                        onDetailClick={this.onDetailClick.bind(this, item.id)}
                      />
                    ) : (
                      <ActivityLight
                        key={item.id}
                        index={index}
                        detailImgID={item.detailImgID}
                        info={{
                          title: item.title,
                          id: item.id,
                          province: item.province,
                          date: item.date
                        }}
                        onDetailClick={this.onDetailClick.bind(this, item.id)}
                      />
                    );
                  })}
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
                补给站建设中...
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
                我们建设中...
              </View>
            </AtTabsPane>
          </AtTabs>

          <Toggle onToggle={this.onToggle.bind(this)} />
        </View>
      </View>
    );
  }
}
