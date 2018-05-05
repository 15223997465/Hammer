var footerStateReducer = (prevstate=true,data={})=>{
	let {type,payload} = data;
	switch(type){
		case "hidefooter":
			return false;
		case "showfooter":
			return true;
		default:
			return prevstate;
	}
	return prevstate;
}
export default footerStateReducer