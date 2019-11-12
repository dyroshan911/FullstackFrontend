import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import './nav.less'


class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <nav className='navbar navbar-default'>
            <Link to='/' className="navbar-brand">Brand</Link>
            <ul className='nav navbar-nav'>
                <li>
                    <NavLink activeClassName='active' to='/' exact>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/page1'>Page1</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/page2'>Page2</NavLink>
                </li>
            </ul>
        </nav>
    }
}


export default connect()(Nav);