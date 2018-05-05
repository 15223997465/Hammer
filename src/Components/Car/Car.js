import React, { Component } from 'react';
import './Car.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
class Car extends Component {
  render() {
    return (
      <div>
      car
       <NavLink to="/detail/ids=100040603">详情</NavLink>
      </div>
    );
  }
  componentDidMount() {
  	this.props.mychangeCarTitle("购物车");
  }
}

export default connect(null,
    {

    mychangeCarTitle:(data)=>{
      console.log(data);
      return {
        type:"typeTitle",
        payload:data
      }
    }
  }
)(Car);
