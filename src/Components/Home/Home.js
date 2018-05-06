import React, {Component} from 'react';
import './Home.css';
import axios from 'axios'
import ReactSwipe from 'react-swipe';
import Hotphone from './Hotphone';
import Hotproduct from './Hotproduct';
import {connect} from "react-redux";
import Nut3 from './Nut3';
import Pro from './Pro';
import PurifierandAccessories from './PurifierandAccessories';
import Loop from './loop';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
      shortcut: [],
      floor: [],
      floors: [],
      protitle: [],
      upperLimit: [],
      fourimg: [],
      twoimg: []
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
              return <img src={item.src} alt="bannerimg" key={item.src}/>
            })
          }
        </ReactSwipe>
        <ul className="bannerlist">
          {
            this.state.shortcut.map(item => {
              return <li key={item.src}>
                <img src={item.src} alt="bannerlistimg"/>
                <p>{item.labelTitle}</p>

              </li>
            })
          }
        </ul>
      </div>
      <Hotproduct dataList={this.state.floors[0]} protitle={this.state.protitle[0]} upperLimit={this.state.upperLimit[0]} history={this.props.history}/>
      <Loop dataList={this.state.floor[1]}/>
      <Hotphone dataList={this.state.floors[1]} protitle={this.state.protitle[1]} upperLimit={this.state.upperLimit[1]} ish3shouw={true} history={this.props.history}/>
      <Loop dataList={this.state.floor[3]}/> {
        this.state.fourimg
          ? <div className="fourimg">
              <ul>
                {
                  this.state.fourimg.map((item, index) => {
                    if (index < 3) {
                      return (<li key={item.src}><img src={item.src} alt=""/></li>)
                    }
                  })
                }
              </ul>
              <div className="bigimg">
                {
                  this.state.fourimg.map((item, index) => {
                    if (index >= 3) {
                      return (<img src={item.src} alt="" key={item.src}/>)
                    }
                  })
                }
              </div>
            </div>
          : null
      }

      <Nut3 dataList={this.state.floors[2]} protitle={this.state.protitle[2]} upperLimit={this.state.upperLimit[2]} history={this.props.history}/>
      <Nut3 dataList={this.state.floors[3]} protitle={this.state.protitle[3]} upperLimit={this.state.upperLimit[3]} history={this.props.history}/>
      <Nut3 dataList={this.state.floors[4]} protitle={this.state.protitle[4]} upperLimit={this.state.upperLimit[4]} history={this.props.history}/> {
        this.state.twoimg
          ? <div className="twoimg">
              <ul>
                {
                  this.state.twoimg.map((item, index) => {
                    return (<li key={item.src}><img src={item.src} alt=""/></li>)
                  })
                }
              </ul>
            </div>
          : null
      }
      <Pro dataList={this.state.floors[5]} protitle={this.state.protitle[5]} upperLimit={this.state.upperLimit[5]} history={this.props.history}/>
      <Loop dataList={this.state.floor[11]}/>
    <Nut3 dataList={this.state.floors[6]} protitle={this.state.protitle[6]} upperLimit={this.state.upperLimit[6]} history={this.props.history}/>

    </div>);
  }
  componentDidMount() {
    fetch('../../../home.json').then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          this.setState({
            banner: data.banner.dataList,
            shortcut: data.shortcut.dataList,
            floor: data.floors,
            fourimg: data.floors[5].dataList,
            twoimg: data.floors[9].dataList
          }, function() {
            //获取数据
            var axiosurl = [];
            var protitle = [];
            var upperLimit = [];
            this.state.floor.map(item => {
              if (item.floorName && Array.isArray(item.dataList)) {
                var str = "";
                for (var i = 0; i < item.dataList.length; i++) {
                  str += item.dataList[i] + ','
                }
                axiosurl.push(str);
                protitle.push(item.floorName);
                upperLimit.push(item.upperLimit)
              }
            });
            var prolist = [];
            for (var i = 0; i < axiosurl.length; i++) {
              prolist.push(axios.get(`/product/skus?ids=${axiosurl[i]}&with_stock=true&with_spu=true`))
            }
            Promise.all(prolist).then(res => {

              var dataList = res.map(item => {
                return item.data.data.list;
              });
              this.setState({floors: dataList, protitle: protitle, upperLimit: upperLimit})
            })
          })
          // 更改首页标题
          this.props.mychangeHomeTitle("首页");
        })

      }
    }).catch((res) => {
      console.log(res.status);
    });

  }

}

export default connect(null, {

  mychangeHomeTitle: (data) => {
    console.log(data);
    return {type: "typeTitle", payload: data}
  }
})(Home);;
