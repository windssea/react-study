import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom'
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
                <li>
                    <Link to="/page3">Page3</Link>
                </li>
                <li>
                    <Link to="/staff/唐海峰">唐海峰</Link>
                </li>
                <li>
                    <Link to="/staff/测试">测试</Link>
                </li>
                <li>
                    <Link to="/404">404</Link>
                </li>
            </ul>

            <hr/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
                <Redirect from="/page3" to="/page1"/>
                <Route path="/staff/:user" component={User}/> 
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>
)

export default Basic;

const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  )

  const User = ({ match }) => (
    <div>
      <h2>User: {match.params.user}</h2>
    </div>
  )