import React, {Component} from 'react';
import './index.css';
import ReactSwipe from 'react-swipe';
class hotproduct extends Component {

  render() {

    return (
      this.props.dataList
      ? <div id="hotproduct">
        <h3>{this.props.protitle}<span>&gt;</span>
        </h3>
        <ReactSwipe className="carousel loopbanner">
        {
            this.props.dataList.map((item,index)=>{
              if(index<this.props.upperLimit){
                return(
                  <div key={item.id} className="prolist" onClick={this.handleClick.bind(this,item.id)}>
                    <img src={item.shop_info.ali_image} alt="productimg"/>
                    <div className="info">
                      <h4>{item.product_info.product_name}</h4>
                      <p className="desc">{item.shop_info.sku_mobile_sub_title}</p>
                      <p className="price">¥ {item.price}</p>
                    </div>
                  </div>
                )
              }

            })
          }
        </ReactSwipe>
      </div>
      : null)
  }

  handleClick(id){
    this.props.history.push({pathname:"/detail",state:{id:id}});

  }
}

export default hotproduct;
