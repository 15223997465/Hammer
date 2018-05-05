import React, { Component } from 'react';
import './sortDetail.css';
import {NavLink} from "react-router-dom";
import axios from "axios"
class sortDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      datalist:null,
      data:[]
    }
  }
  render() {
    return (
      <div className="sortDetail">
      {
        this.state.datalist?
        <div>
        {            
          this.state.data.map(item=>
            <div key={item.sku_id} className="outbox" onClick={this.handleClick.bind(this,item.sku_id)}>
              <img src={item.ali_image} className="showimg"/>
              <div className="righttext">
                <p>{item.title}</p>                             
                <p>{item.sub_title}</p>
                <i>¥</i><span>{item.price}</span> 
              </div>
              
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
componentDidMount(){ 
var m=0;  
    axios.get(`/product/spus?category_id=${this.props.match.params.id}&page=1&page_size=20&sort=sort`).then(res=>{
      this.setState({
        datalist:res.data.data.list
      })
      
      for(let i=0;i<this.state.datalist.length;i++){
        if(this.state.datalist[i].sku_info){
          //this.state.data[i]=this.state.datalist[i].sku_info
          //console.log(this.state.datalist[i].sku_info[0])
          this.state.data.push(this.state.datalist[i].sku_info[0])
          this.setState({
            data:this.state.data
          })

        }
      }
      
       //console.log(this.state.datalist[0].sku_info[0].ali_image)
      console.log(this.state.data)
       
    })

}
  
  
}

export default sortDetail;
