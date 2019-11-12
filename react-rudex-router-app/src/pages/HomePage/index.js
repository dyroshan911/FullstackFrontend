import React from 'react';
import { connect } from 'react-redux';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <div>
            这里是Home
        </div>
    }
}


export default connect()(HomePage);