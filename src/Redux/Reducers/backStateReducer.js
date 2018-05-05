var backStateReducer = (prevstate=true,data={})=>{
	let {type,payload} = data;
	switch(type){
		case "hideBack":
			return true;
		case "showBack":
			return false;
		default:
			return prevstate;
	}
	return prevstate;
}
export default backStateReducer