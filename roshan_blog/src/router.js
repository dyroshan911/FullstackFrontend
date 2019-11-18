import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
function Admin(){
    return <div>
        Admin
    </div>
}


class Routers extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <Router>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/admin" component={Admin}/>
            </Switch>
        </Router>
    }
}


// export default connect()(Routers);
export default Routers;