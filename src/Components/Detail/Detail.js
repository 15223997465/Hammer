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
    console.log(this.props.location.state.id);
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

  componentDidMount(){
    let numstr=this.props.location.state.id.toString();
     numstr=numstr.substring(0,7);
    console.log(numstr);
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
            console.log(this.state.showdata);
            this.props.mychangeTitle(this.state.showdata.title);
           
    }).catch(err=>{
      console.log(err);
    });

   
    }

}

export default connect(null,
    {

    mychangeTitle:(data)=>{
      return {
        type:"hammerTitle",
        payload:data
      }
    }
  }
)(Detail);
