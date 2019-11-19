import React from 'react';
import { Row, Col, Icon } from 'antd'
import "./index.less"

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Row className="page-header">
            <Col span="6">
                <h2>Roshan's Blog</h2>
            </Col>
            <Col>
                <div className="right-content">
                    <Icon type="simle" /><span>欢迎XX</span>
                    <Icon type="logout" /><span>退出</span>
                </div>

            </Col>
        </Row>
    }
}

export default Header;