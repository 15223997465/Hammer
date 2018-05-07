import React, { Component } from 'react';
import './Classify.css';
import axios from "axios";
import {connect} from "react-redux";
class Classify extends Component {
	constructor(){
		super();
		this.state={
			datalist:null,
			alldata:null,

			tempList:[],
			temp:[],
			data:[],
			jumpNum:null

		}
	}
  render() {
    return (
      <div className="classify">

      {
      	this.state.data&&this.state.alldata?
      		<div className="container">
        			{
        				this.state.data.map(item=>
        					<div className="outbox" key={item.title}>
	        					<p className="title">{item.title}</p>
	        					<p className="logo" onClick={this.ClickDetail.bind(this,item.jumpNum)}><img src={item.src} /></p>
	        				<ul className="one">
	        			{item.map(item=>
	        				<li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
		        				<img src={item.shop_info.ali_image}/>
		        				<p>{item.shop_info.sku_mobile_title}</p>
		        				<i className="iconfont icon-iconfontjiantou5"></i>
	        				</li>
	        			)}
	        			</ul>
        					</div>
    			      )
        			}
        	</div>
        				:null

      }


      </div>



    );
  }
  handleClick(ids){
		this.props.history.push({pathname:"/detail",state:{id:ids}});
	}
	ClickDetail(id){
		this.props.history.push(`/sortDetail/${id}`);
	}
  componentWillMount(){
		axios.get("/marketing/mobile/category_3de2b51f6fd72a45304bee018af1a54a.json").then(res=>{
			this.setState({
				datalist:res.data,
			})





//*******************************************************************************
			axios.get("/product/skus?ids=100040602,100035101,100027305,100036303,100035702,100036401,100036501,100041902,100042101,100027101,100035203,100026601,100026701,100026801,100022501,100029902,100022803,100042801,100037801,100035801,100027001,100034901,100023001,100039709,100040132,100045615,100044009,100040915,100041001,100025103,100032901,100045301,100042301,100040401,100041201,100032701,100032601,100032201,100022201,100022901,100032701,100032601&with_stock=true&with_spu=true").then(res=>{
			this.setState({
				alldata:res.data.data.list
			})


			//******************
	for(var m=0;m<this.state.datalist.length;m++)
	{
			for(var i=0;i<this.state.datalist[m].layout.dataList.length;i++)
			{
				this.state.temp.push(this.state.datalist[m].layout.dataList[i].sku);

			}
			for(var i=0;i<this.state.temp.length;i++)
			{
				for(var j=0;j<this.state.alldata.length;j++)
				{
					if(this.state.temp[i]==this.state.alldata[j].id)
					{
						this.state.tempList.push(this.state.alldata[j]);

					}

				}
			}
			this.state.data.push(this.state.tempList);
			this.state.temp=[];
			this.state.tempList.title=this.state.datalist[m].name;
			this.state.tempList.src=this.state.datalist[m].image.src;
			this.state.tempList.linkUrl=this.state.datalist[m].image.linkUrl;
			this.state.tempList.jumpNum=(this.state.datalist[m].image.linkUrl).substr((this.state.datalist[m].image.linkUrl).length-2,2)

			this.state.tempList=[];
	}
	this.setState({
				data:this.state.data
			})
		})
		 this.props.mychangeClassifyTitle("分类");
//*******************************************************************************
		})

	}
}

export default connect(null,
    {

    mychangeClassifyTitle:(data)=>{
      return {
        type:"typeTitle",
        payload:data
      }
    }
  }
)(Classify);
