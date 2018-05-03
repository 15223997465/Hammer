import React, {Component} from 'react';
import './Home.css';
import ReactSwipe from 'react-swipe';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
      shortcut:[],
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
    </div>);
  }
  componentDidMount() {
    fetch('../../../home.json').then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          this.setState({
            banner: data.banner.dataList,
            shortcut:data.shortcut.dataList,
          })
          console.log(this.state.shortcut)
        })
      }
    }).catch((res) => {
      console.log(res.status);
    });

  }
}

export default Home;
