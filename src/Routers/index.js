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
import sortDetail from "../Components/sortDetail/sortDetail"
import Car from "../Components/Car/Car"
const router= (
	<Router>
		<App>
		    <Switch>
				<Route path="/home" component={Home}/>
				<Route path="/classify" component={Classify}/>
				<Route path="/car" component={Car}/>
				<Route path="/detail" component={Detail}/>
				<Route path="/sortDetail/:id" component={sortDetail}/>
				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
)
export default router;