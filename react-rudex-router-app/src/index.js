import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './component/Nav';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from './store';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Provider store={store}>
    <div>
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/page1" exact>
                        <Page1 />
                    </Route>
                    <Route path="/page2" exact>
                        <Page2 />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
</Provider>, document.getElementById('root'));
