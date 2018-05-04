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
    axios.get(`/product/spus?category_id=${this.props.match.params.id}&page=1&page_size=20&sort=sort`).then(res=>{
      this.setState({
        datalist:res.data.data.list
      })

      console.log(this.state.datalist[0].sku_info[0].ali_image)
    })

}
  
  
}

export default sortDetail;
