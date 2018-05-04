import {createStore,combineReducers,applyMiddleware,compose } from "redux" // 

import titleReducer from "../Reducers/titleReducer";
import showReducer from "../Reducers/showReducer";
import reduxthunk from "redux-thunk";
var reducer =combineReducers({
	titleReducer,
	showReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxthunk)
  ));

export default store;