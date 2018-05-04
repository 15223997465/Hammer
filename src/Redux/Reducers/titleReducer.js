var titleReducer = (prevstate="分类",data={})=>{	
	let {type,payload} = data;
	switch(type){
		case "hammerTitle":
		{
			console.log(data);
			return payload;
		}
			
		
		default:
			return prevstate;
	}

	return prevstate;	// 返回是什么， 状态就被改成什么
}


export default titleReducer;