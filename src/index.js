import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer/reducer";
import RouterComponent from "./router/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const allReducers = combineReducers({
    mainReducer: reducer
});


const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><RouterComponent /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
