import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";


class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ul className='nav nav-pills nav-stacked col-md-2'>
                <li>
                    <NavLink to='/page1/page1-1'>Page1-1</NavLink>
                </li>
                <li>
                    <NavLink to='/page1/page1-2/test'>Page1-2</NavLink>
                </li>
                <li>
                    <NavLink to='/page1/page1-2/ssss'>Page1-3</NavLink>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}


export default connect()(Page1);