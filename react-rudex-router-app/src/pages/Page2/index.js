import React from 'react';
import { connect } from 'react-redux';


class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <div>
            这里是PAGE2
        </div>
    }
}


export default connect()(Page2);