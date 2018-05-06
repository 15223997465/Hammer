import React, { Component } from 'react';
import './index.css';
import Hotphone from "../Hotproduct"
import axios from "axios"
class PurifierandAccessories extends Component {
  render() {
    return (
      this.props.dataList
      ? <div id="hotproduct">
        <h3>{this.props.dataList.floorName}<span>&gt;</span>
        </h3>
        {/* <Hotphone ish3shouw={false} dataList={this.props.dataList.dataList.}/> */}
      </div>
      : null)
  }
}

export default PurifierandAccessories;
