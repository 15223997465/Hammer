import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import router from "./Routers";

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
