import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import noteApp from '../reducers';

import {createLogger} from "redux-logger";

// const fromMiddleWithThunk = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    noteApp,
    // initialState,
    composeEnhancers(applyMiddleware(thunk, createLogger())));

export default store;
