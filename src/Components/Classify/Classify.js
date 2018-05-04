import React, { Component } from 'react';
import './Classify.css';
import axios from "axios"
class Classify extends Component {
	constructor(){
		super();
		this.state={
			datalist:null,
			alldata:null,
			detaiId:null
		}
	}
  render() {
    return (
      <div className="classify">
  {
  		this.state.datalist?
  		<div>
  			
  			{/*<h2>{this.state.datalist[0].layout.dataList[0].sku}</h2>
  			  			<h2>{this.state.datalist[0].layout.dataList[1].sku}</h2>
  			  			<h2>{this.state.datalist[0].layout.dataList[2].sku}</h2>
						<img src={item.poster.origin}/>
  			  		*/}
	  			{
	  				this.state.datalist.map(item=>
	  					<div className="liststyle" >
	  						<h2>{item.name}</h2>
	  						<img src={item.image.src}/>
	  					</div>
	  				

	  				)
	  			}

		</div>
  		:null
  	}
  
      </div>
  
  
  
    );
  }
  handleClick(ids){
		this.props.history.push({pathname:"/detail",state:{id:ids}});

	}
  componentWillMount(){
		axios.get("/marketing/mobile/category_3de2b51f6fd72a45304bee018af1a54a.json").then(res=>{
			this.setState({
				datalist:res.data,
			})
			console.log(this.state.datalist[0]);
			console.log(res.data[0].layout.dataList[0].sku)
			this.state.datalist.map(item=>
				this.setState({
				alldata:item.layout
				
			}),
			// this.state.alldata.map(item=>
			// 	this.setState({
			// 	detaiId:item.layout.dataList.sku
				
			// })
			// 	)
			)
			console.log(this.state.alldata)
			console.log(this.state.detaiId)
		})
		// axios.get("/product/skus?ids=100040602,100035101,100027305,100036303,100035702,100036401,100036501,100041902,100042101,100027101,100035203,100026601,100026701,100026801,100022501,100029902,100022803,100042801,100037801,100035801,100027001,100034901,100023001,100039709,100040915,100041001,100026113,100037719,100026445,100025103,100032901,100045301,100042301,100040401,100041201,100032701,100032601,100032201,100022201,100022901,100032701,100032601&with_stock=true&with_spu=true").then(res=>{
		// 	this.setState({
				
		// 	})
		// 	console.log(res.data);
		// })
	}
}

export default Classify;
