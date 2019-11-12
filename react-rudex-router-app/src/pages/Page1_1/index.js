import React from 'react';
import { connect } from 'react-redux';


class Page1_1 extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <div>
            这里是page1-1
        </div>
    }
}


export default connect()(Page1_1);