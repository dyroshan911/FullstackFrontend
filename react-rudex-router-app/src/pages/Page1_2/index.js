import React from 'react';
import { connect } from 'react-redux';


class Page1_2 extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <div>
            这里是page1-2
        </div>
    }
}


export default connect()(Page1_2);