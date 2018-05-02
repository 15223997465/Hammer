import React, { Component } from 'react';
import './App.css';
import {NavLink} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <footer>
        		<li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
                <li><NavLink to="/classify" activeClassName="active">分类</NavLink></li>
                <li><NavLink to="/car" activeClassName="active">购物车</NavLink></li>
        </footer>
        {this.props.children}
      </div>
    );
  }
}

export default App;
