var typeTitleReducer = (prevstate="锤子",data={})=>{	
	let {type,payload} = data;
	switch(type){
		case "typeTitle":		
			return payload;
		default:
			return prevstate;
	}
	return prevstate;
}
export default typeTitleReducer;