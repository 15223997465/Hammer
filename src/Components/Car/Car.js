import React, { Component } from 'react';
import './Car.css';
import {NavLink} from "react-router-dom";
class Car extends Component {
  constructor(props){
    super(props);
    this.state={
      id:"100040603"
    }
  }
  render() {
    return (
      <div>
      car
       <button onClick={this.handleClick.bind(this,this.state.id)}>详情</button>
      </div>
    );
  }
 handleClick(id){
		this.props.history.push({pathname:"/detail",state:{id:this.state.id}}); 
 }
 	
	
}

export default Car;
