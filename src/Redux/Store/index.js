import {createStore,combineReducers,applyMiddleware,compose } from "redux" // 

import typeTitleReducer from "../Reducers/typeTitleReducer";
import showReducer from "../Reducers/showReducer";

import reduxthunk from "redux-thunk";
var reducer =combineReducers({
	typeTitleReducer,
	showReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxthunk)
  ));

export default store;