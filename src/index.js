import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page10 from './components/Page10';
import * as serviceWorker from './serviceWorker';
import {Redirect, BrowserRouter as Router , Route} from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router>
        <div>
            <Route path="/data/userinfo/:QQ/:name/:password" component={App} />
            <Route exact path = "/" component={Page10}/>
        </div>
    </Router>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
