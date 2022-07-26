import {applyMiddleware, createStore,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import reducer  from './reducer.js';
//1.引入thunkMiddleware中间件（上面
const sageMiddleware = createSagaMiddleware();

//composeEnhancers函数
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//应用一些中间件
const storeEnhaner = applyMiddleware(thunkMiddleware,sageMiddleware)

const store = createStore(reducer,composeEnhancers(storeEnhaner));

export default store;