import React, { Component } from 'react';
import './index.css';
class PurifierandAccessories extends Component {
  render() {
    return (
      this.props.dataList
      ? <div id="hotproduct">
        <h3>{this.props.dataList.floorName}<span>&gt;</span>
        </h3>
      </div>
      : null)
  }
}

export default PurifierandAccessories;
