import React, { Component } from "react";
import { View } from "@tarojs/components";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  onToggle() {
    this.props.onToggle()
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <View className="toggle-container" onClick={this.onToggle.bind(this)}>
        <View
          className={`toggle-item ${this.state.toggle ? "" : "toggle-active"}`}
        />
        <View
          className={`toggle-item ${
            this.state.toggle ? "" : "toggle-inactive"
          }`}
        />
        <View
          className={`toggle-item ${
            this.state.toggle ? "" : "toggle-inactive"
          }`}
        />
        <View
          className={`toggle-item ${this.state.toggle ? "" : "toggle-active"}`}
        />
      </View>
    );
  }
}