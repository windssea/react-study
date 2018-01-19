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


store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });