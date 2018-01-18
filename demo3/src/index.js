import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducer/reducers';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
