import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import App from './App';

const Basic = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
                <li>
                    <Link to="/page2">Page2</Link>
                </li>
            </ul>

            <hr/>

            <Route exact path="/" component={App}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
        </div>
    </Router>
)
export default Basic;