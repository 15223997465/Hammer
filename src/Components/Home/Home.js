import React, {Component} from 'react';
import './Home.css';
import ReactSwipe from 'react-swipe';
import Hotphone from './Hotphone';
import Hotproduct from './Hotproduct';
import {connect} from "react-redux";
import Nut3 from './Nut3';
import Pro from './Pro';
import PurifierandAccessories from './PurifierandAccessories';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
      shortcut: [],
      floor: []
    }
  }
  render() {
    return (<div id="Home">
      <div className="banner">
        <ReactSwipe className="carousel loopbanner" swipeOptions={{
            continuous: true,
            auto: 3000
          }} key={this.state.banner.length}>
          {
            this.state.banner.map(item => {
              return <a href={item.linkUrl} key={item.beginTime}><img src={item.src} alt="bannerimg"/></a>
            })
          }
        </ReactSwipe>
        <ul className="bannerlist">
          {
            this.state.shortcut.map(item => {
              return <li key={item.src}>
                <a href={item.linkUrl}><img src={item.src} alt="bannerlistimg"/>
                  <p>{item.labelTitle}</p>
                </a>
              </li>
            })
          }
        </ul>
      </div>
      <Hotproduct dataList={this.state.floor[0]}/>
      <Hotphone dataList={this.state.floor[2]}/>
      <PurifierandAccessories dataList={this.state.floor[4]}/>
      <Nut3 dataList={this.state.floor[6]}/>
      <Nut3 dataList={this.state.floor[7]}/>
    <Nut3 dataList={this.state.floor[8]}/>
    <Pro dataList={this.state.floor[10]}/>
    <Nut3 dataList={this.state.floor[12]}/>
    </div>);
  }
  componentDidMount() {
    fetch('../../../home.json').then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          this.setState({banner: data.banner.dataList, shortcut: data.shortcut.dataList, floor: data.floors})
          console.log(this.state.floor,)
          this.props.mychangeHomeTitle("首页");
        })
      }
    }).catch((res) => {
      console.log(res.status);
    });
    
  }
  
}

export default connect(null,
    {

    mychangeHomeTitle:(data)=>{
      console.log(data);
      return {
        type:"typeTitle",
        payload:data
      }
    }
  }
)(Home);;
