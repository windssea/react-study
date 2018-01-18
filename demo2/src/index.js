import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import Counter from './components/counter/index';
import reducers from './reducers/index';

const store = createStore(reducers);
const render = () => ReactDOM.render(
    <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>, document.getElementById('root'));
render();
store.subscribe(render);


store.subscribe(() =>
  console.log(store.getState())
);


// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });