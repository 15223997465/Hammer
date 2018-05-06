import React, { Component } from 'react';
import './index.css';
 import ReactSwipe from 'react-swipe';

class loop extends Component {
  render() {
    return (
      this.props.dataList
      ? <div id="loop">
        <ReactSwipe className="carousel">
          {
            this.props.dataList.dataList.map(item=>{
              return <img src={item.src} alt="img" key={item.src}/>
            })
          }
        </ReactSwipe>
      </div>
      : null)
  }
}

export default loop;
