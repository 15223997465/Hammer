import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {
  render() {
    return (
      <div className="detailBox">
      		<ul className="detailheader">
      			<li><a href="#">商品</a></li>
      			<li><a href="#">详情</a></li>
      			<li><a href="#">参数</a></li>
      			<li><a href="#">推荐</a></li>
      		</ul>
      </div>
    );
  }
}

export default Detail;
