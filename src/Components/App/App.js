import React, { Component } from 'react';
import './App.css';
import {NavLink} from "react-router-dom";
class App extends Component {
  constructor(){
    super();
    this.state={
      isShow:false
    }
  }
  render() {
    return (
      <div className="App">
      	<header>
      			   <i className="icon iconfont icon-liebiao1"></i>
               <span>锤子科技商城</span>
               <span isShow={this.state.isShow}>编辑</span>
      	</header>
        <content>
                {this.props.children}
        </content>
         
        <footer>
        		<span>
                <NavLink to="/home" activeClassName="active" className="btn">
                 <i class="icon iconfont icon-zhuye"></i>
                    首页
                </NavLink>

            </span>
            <span>
                <NavLink to="/classify" activeClassName="active" className="btn">
                  <i class="icon iconfont icon-liebiao"></i>
                    分类
                </NavLink>
            </span>
            <span>
                <NavLink to="/car" activeClassName="active" className="btn">
                <i class="icon iconfont icon-56"></i>
                购物车
            </NavLink>
            </span>
        </footer>
       
      </div>
    );
  }
}

export default App;
