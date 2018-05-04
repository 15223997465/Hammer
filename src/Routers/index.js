import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom"
import React from "react"
import App from "../Components/App/App"
import Home from "../Components/Home/Home"
import Classify from "../Components/Classify/Classify"
import Detail from "../Components/Detail/Detail"
import Car from "../Components/Car/Car"
import {Provider} from "react-redux";
import store from "../Redux/Store"
const router= (
	<Provider store={store}>
	<Router>
		<App>
		    <Switch>
				<Route path="/home" component={Home}/>
				<Route path="/classify" component={Classify}/>
				<Route path="/car" component={Car}/>
				<Route path="/detail/:id" component={Detail}/>
				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
	</Provider>
)
export default router;