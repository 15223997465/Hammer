import React, { Component } from 'react';
import './index.css';
class hotproduct extends Component {
  constructor(props){
    super(props);
    this.state={
      dataList:this.props.data,
    }
  }
  render() {
    return (
      <div id="hotproduct">
      {this.props.data}
      </div>
    );
  }
}

export default hotproduct;
