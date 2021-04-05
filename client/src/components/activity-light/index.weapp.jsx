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
    const {index, detailImgID, info: {title, date, province}} = this.props;
    console.log(index);
    return (
      <View className="activity-light-container">
        <View
          className="activity-light-content"
          style={{
            marginRight: `${index % 2 === 0 ? 4 : 0}px`,
            marginLeft: `${index % 2 === 0 ? 0 : 4}px`
          }}
          onClick={this.props.onDetailClick}
        >
          <Image src={detailImgID} />
          <View style={{ padding: "6px 6px 6px 6px" }}>
            <View className="light-title">
              <Text>{title}</Text>
            </View>
            <View style={{ display: "flex", justifyContent: "space-between" }}>
              <View>
                <Text className="light-date">{date}</Text>
              </View>
              <View>
                <Text className="light-prov">{province}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
