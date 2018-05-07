
import React, {Component} from 'react'
import Swiper from 'swiper'
import './index.css'
import 'swiper/dist/css/swiper.min.css'
class loop extends Component {
  constructor() {
    super()
  }

  componentWillReceiveProps() {
    var loopswiper = new Swiper('#myloopswiper', {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

  render() {
    return (<div id='banner'>
    {
      this.props.dataList?
      <div className="swiper-container" id='myloopswiper' key={this.props.dataList}>
        <div className="swiper-wrapper">
          {
            this.props.dataList.dataList.map(item => {
              return <div className="swiper-slide" key={item.src}><img src={item.src}  alt="img" /></div>
            })
          }
        </div>
      </div>
      :null
    }
    </div>)
  }
}

export default loop;
