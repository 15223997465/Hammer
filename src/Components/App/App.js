import React, { Component } from 'react';
import './App.css';
import {NavLink} from "react-router-dom";
import Detail from "../Detail/Detail";
import {connect} from "react-redux";
import history from 'history/createBrowserHistory' 
class App extends Component {
  constructor(){
    super();
    this.state={
      isShow:false,
      footerState:true,
      shopNum:0
    }
  }
  render() {
    return (
      <div className="App">
      	<header>
      			   {this.props.backState===true?<i className="icon iconfont icon-liebiao1"></i>
               :<button onClick={
                this.clickBack.bind(this,null)
               } className="backBtn"><NavLink to="/classify">返回</NavLink></button>}
                <span className="title">{this.props.mytitle}</span>
               {this.state.isShow===true?<button className="btn">编辑</button>:<span className="space">　　　　</span>}
      	</header>
        <content>
                {this.props.children}         
        </content>

         {this.props.footerState===true?
        <footer>
        		<span>
                <NavLink to="/home" activeClassName="active" className="btn">
                 <i className="icon iconfont icon-zhuye" onClick={()=>{
                    this.setState({
                      isShow:false,
                    });
                }}></i>
                  <p className="text">首页</p>
                </NavLink>

            </span>
            <span>
                <NavLink to="/classify" activeClassName="active" className="btn">
                  <i className="icon iconfont icon-liebiao" onClick={()=>{
                    this.setState({
                      isShow:false,
                    });
                }}></i>
                  <p className="text">分类</p>
                </NavLink>
            </span>
            <span>
                <NavLink to="/car" activeClassName="active" className="btn" >
                <i className="icon iconfont icon-56" onClick={()=>{
                    this.setState({
                      isShow:true,
                    });
                }}></i>
                <p className="text">购物车</p>
            </NavLink>
            <p className="PshopNum">{this.state.shopNum}</p>
            </span>
        </footer>:
        <footer>
            <i className="icon iconfont icon-56">
                <p className="shopNum">{this.state.shopNum}</p>
            </i>
            <button className="add">加入购物车</button>
            <button className="pay">现在购买</button>
        </footer>
       }
      </div>
    );
  }
    clickBack(){    
      this.props.mychangeFooter();
      this.props.mychangeBack();
  }
}

export default connect(
  (state)=>{
    return {
      mytitle:state.typeTitleReducer,
      footerState:state.footerStateReducer,
      backState:state.backStateReducer
    }
  },
  {
   mychangeFooter:()=>{
      return{
        type:"showfooter"
      }
    },
   mychangeBack:()=>{
      return{
        type:"hideBack"
      }
    }
  }
  
  
  
 ,undefined,{pure:false})(App);
