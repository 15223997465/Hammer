var showReducer = (prevstate=true,data={})=>{
	let {type,payload} = data;
	switch(type){
		case "showFooter":
			return true;
		case "hideFooter":
			return false;
		default:
			return prevstate;
	}
	return prevstate;
}
export default showReducer