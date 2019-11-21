import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Admin from './pages/admin';
import {createHashHistory as createHistory} from 'history';

let history1 = createHistory();
history1.listen(loc => {
    console.log(loc);
    
    if (loc.pathname === '/admin' && !sessionStorage.getItem('username')) {
        history1.push('/')
    }
})

class Routers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router history={history1}>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/admin" component={Admin} />
            </Switch>
        </Router>
    }
}


// export default connect()(Routers);
export default Routers;