import React, { Component } from 'react';
import './Car.css';
import {NavLink} from "react-router-dom";
class Car extends Component {
  render() {
    return (
      <div>
      car
       <NavLink to="/detail/ids=100040603">详情</NavLink>
      </div>
    );
  }
}

export default Car;
