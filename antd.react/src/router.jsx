import React from 'react';
import {Link, Switch, Router, Route, Redirect} from 'react-router-dom';
import history from './history';
import App from './App';
import Login from './pages/login';
import Home from './pages/home';
import Admin from './pages/admin';
import Order from './pages/order';

export default class ERoute extends React.Component{
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/'>
                        <App>
                            <Switch>
                                <Route exact path='/' Component={Login}/>
                                <Route path='/home'>
                                    <Home>
                                        <Switch>
                                            <Route exact path='/home' Component={Admin}/>
                                            <Route path='/home/order' Component={Order}/>
                                            <Redirect to='/home'/>
                                        </Switch>
                                    </Home>
                                </Route>
                                <Redirect to='/'/>
                            </Switch>
                        </App>
                    </Route>
                </Switch>
            </Router>
        )
    }
}