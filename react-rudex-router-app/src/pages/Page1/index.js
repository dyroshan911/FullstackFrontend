import React from 'react';
import { connect } from 'react-redux';


class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <div>
            这里是Page1
        </div>
    }
}


export default connect()(Page1);