import React, { Component } from 'react';
import './sortDetail.css';
import {NavLink} from "react-router-dom";
import axios from "axios"
class sortDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      datalist:null,
      imgData:null
    }
  }
  render() {
    return (
      <div className="sortDetail">
      {
        this.state.datalist?
        <div>
        {
            
          this.state.datalist.map(item=>
            <div>
            <p>{item.name}</p>
            <span>{item.price}</span>
            <p>{item.shop_info.spu_sub_title}</p>
            </div>
           )
            
        }
        </div>
        :null
      }
      </div>
    );
  }
componentDidMount(){ 
var m=0;  
    axios.get(`/product/spus?category_id=${this.props.match.params.id}&page=1&page_size=20&sort=sort`).then(res=>{
      this.setState({
        datalist:res.data.data.list
      })
      
      for(let i=0;i<this.state.datalist.length;i++){
        //this.state.datalist.src=this.state.datalist[i].sku_info[i].ali_image
        this.state.datalist[i].src="11";
      }
       console.log(this.state.datalist[0].sku_info[0].ali_image)
       console.log(this.state.datalist)
       
    })

}
  
  
}

export default sortDetail;
