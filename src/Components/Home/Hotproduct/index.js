import React, {Component} from 'react';
import './index.css';
import ReactSwipe from 'react-swipe';

class hotproduct extends Component {

  render() {

    return (
      this.props.dataList
      ? <div id="hotproduct">
        <h3>{this.props.dataList.floorName}<span>&gt;</span>
        </h3>
        <ReactSwipe className="carousel loopbanner" swipeOptions={{
            continuous: true,
            auto: 3000
          }}>
          <div>1111</div>
          <div>1111</div>
          <div>1111</div>
        </ReactSwipe>
      </div>
      : null)
  }
}

export default hotproduct;
