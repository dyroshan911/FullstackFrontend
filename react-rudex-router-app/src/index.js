import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './component/Nav';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import store from './store';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page1_1 from './pages/Page1_1';
import Page1_2 from './pages/Page1_2';


ReactDOM.render(<Provider store={store}>
    <div>
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/page1">
                        <Page1 >
                            <Switch>
                                <Route path="/page1/page1-1">
                                    <Page1_1 />
                                </Route>
                                <Route path="/page1/page1-2">
                                    <Page1_2 />
                                </Route>
                                <Redirect to="/page1/page1-1"></Redirect>
                            </Switch>
                        </Page1>
                    </Route>
                    <Route path="/page2">
                        <Page2 />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
</Provider>, document.getElementById('root'));
