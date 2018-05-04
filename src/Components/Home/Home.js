import React, {Component} from 'react';
import './Home.css';
import ReactSwipe from 'react-swipe';
import Hotphone from './Hotphone'
import Hotproduct from './Hotproduct'
import Nut3 from './Nut3'
import Periphery from './periphery'
import Pro from './Pro'
import Pro2 from './Pro2'
import PurifierandAccessories from './PurifierandAccessories'
import Selected from './Selected'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
      shortcut:[],
      floor:[],
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
            this.state.shortcut.map(item=>{
              return <li key={item.src}><a href={item.linkUrl}><img src={item.src} alt="bannerlistimg"/><p>{item.labelTitle}</p></a></li>
            })
          }
        </ul>
      </div>
    <Hotproduct data={this.state.floor[0].dataList}  />
    <Hotphone/>
    <PurifierandAccessories/>
    <Nut3/>
    <Pro2/>
    <Periphery/>
    <Pro/>
    <Selected/>
    </div>);
  }
  componentDidMount() {
    fetch('../../../home.json').then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          this.setState({
            banner: data.banner.dataList,
            shortcut:data.shortcut.dataList,
            floor:data.floors
          })
          console.log(this.state.floor,)
        })
      }
    }).catch((res) => {
      console.log(res.status);
    });

  }
}

export default Home;
