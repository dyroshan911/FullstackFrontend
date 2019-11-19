import React from 'react';
import {Row, Col} from 'antd';
import Header from '../../components/Header';

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return <Row>
            <Col span="24">
                <Header />
            </Col>
        </Row>
    }
}
export default Admin;