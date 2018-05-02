import React, { Component } from 'react';
import './App.css';
import {NavLink} from "react-router-dom";
class App extends Component {
  constructor(){
    super();
    this.state={
      isShow:false,
      title:"锤子科技商城"
    }
  }
  render() {
    return (
      <div className="App">
      	<header>
      			   <i className="icon iconfont icon-liebiao1"></i>
               <span>{this.state.title}</span>
               {this.state.isShow===true?<button className="btn">编辑</button>:<span>　　　　</span>}
      	</header>
        <content>
                {this.props.children}
        </content>
         
        <footer>
        		<span>
                <NavLink to="/home" activeClassName="active" className="btn">
                 <i className="icon iconfont icon-zhuye" onClick={()=>{
                    this.setState({
                      isShow:false,
                      title:"锤子科技商城"

                    });
                }}>首页</i>
                    
                </NavLink>

            </span>
            <span>
                <NavLink to="/classify" activeClassName="active" className="btn">
                  <i className="icon iconfont icon-liebiao" onClick={()=>{
                    this.setState({
                      isShow:false,
                      title:"分类"
                    });
                }}>分类</i>
                    
                </NavLink>
            </span>
            <span>
                <NavLink to="/car" activeClassName="active" className="btn" >
                <i className="icon iconfont icon-56" onClick={()=>{
                    this.setState({
                      isShow:true,
                       title:"购物车"
                    });
                }}>购物车</i>
                
            </NavLink>
            </span>
        </footer>
       
      </div>
    );
  }
}

export default App;
