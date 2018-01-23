import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import Counter from './components/counter/index';
import reducers from './reducers/index';
import rootSaga from './saga/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


const render = () => ReactDOM.render(
    <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT2'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT2'})}/>, document.getElementById('root'));
render();


store.subscribe(render);