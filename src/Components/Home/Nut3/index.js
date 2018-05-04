import React, { Component } from 'react';
import './index.css';
import axios from 'axios'
class nut3 extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  render() {
    return (
      this.props.dataList
      ? <div id="nut3">
        <h3>{this.props.dataList.floorName}<span>&gt;</span>
        </h3>
        <ul className="list">
          {
            this.state.data.map(item=>{
              return (<li key={item.id}>
                <img src={item.shop_info.ali_image} alt="productimg"/>
                <div className="info">
                  <h4>{item.name}</h4>
                  <p className="desc">{item.shop_info.sku_mobile_sub_title}</p>
                  <p className="price">¥ {item.price}</p>
                </div>
              </li>)
            })
          }
        </ul>
      </div>
      : null)
  }
  componentWillReceiveProps(data){
    console.log(data.dataList);
    var length = data.dataList.upperLimit;
    var str = '';
    for(var i = 0;i<length;i++){
      str+= data.dataList.dataList[i]+',';
    }
    console.log(str);
    axios.get(`/product/skus?ids=${str}&with_stock=true&with_spu=true`).then(res=>{
      this.setState({
        data:res.data.data.list
      })
    })
  }
}

export default nut3;
