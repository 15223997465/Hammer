import React, { Component } from 'react';
import './Detail.css';
import axios from "axios";
import {connect} from "react-redux"
import {NavLink} from "react-router-dom";
import { Anchor } from 'antd';
const { Link } = Anchor;

class Detail extends Component {
	constructor(){
    super();
    this.state={
      detailData:[],
      detailId:"",
      showdata:{}
    }
  }
  render() {
    return (
      <div>
          <Anchor>
            <Link href="#goods" title="商品" />
            <Link href="#details" title="详情" />
            <Link href="#options" title="参数"/>
            <Link href="#recommend" title="推荐" />
          
          <div className="infobox">
            <div className="goods" id="goods">
              <div className="imgbox">
                <img src={this.state.showdata.ali_image} className="topImg"/>
              </div>
              
              <div className="goodsinfo">
                  <h2>商品信息</h2>
                  <div className="info">
                      <h4>{this.state.showdata.title}</h4>
                      <p>{this.state.showdata.sub_title}</p>
                      <span>¥{this.state.showdata.price}</span>
                  </div>
              </div>
          </div>
          <div className="details" id="details">

            详情
          </div>
          <div className="options" id="options">
            参数
          </div>
          <div className="recommend" id="recommend">
            推荐
          </div>


          </div>
          </Anchor>
      </div>
      )
  }

  componentDidMount(){
    let numstr=this.props.location.state.id.toString();
     numstr=numstr.substring(0,7);
    axios.get(`/product/spus?ids=${numstr}`).then(res=>{
            this.setState({
                 detailData:res.data.data.list[0].sku_info,
                 detailId:this.props.location.state.id

            });

            for(var item in this.state.detailData)
            {
              if(this.state.detailData[item].sku_id.toString()===this.state.detailId.toString())
              {
                this.setState({
                  showdata:this.state.detailData[item]
                })
              }
            }
            this.props.mychangeTitle(this.state.showdata.title);
            this.props.mychangeFooter();
            this.props.mychangeBack();
           
    }).catch(err=>{
      console.log(err);
    });

   
    }

}

export default connect(null,
    {

    mychangeTitle:(data)=>{
      return {
        type:"typeTitle",
        payload:data
      }
    },
    mychangeFooter:()=>{
      return{
        type:"hidefooter",
      }
    },
    mychangeBack:()=>{
      return{
        type:"showBack"
      }
    }
  }
)(Detail);
