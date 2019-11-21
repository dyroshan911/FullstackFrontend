import React from 'react';
import { Row, Col, Icon } from 'antd'
import "./index.less"
import service from '../../service/users'
import { withRouter } from 'react-router-dom';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        const username = sessionStorage.getItem('username');
        this.setState({username})
    }

    logout = () => {
        service.signout().then((data) => {
            if (data.code === 0) {
                sessionStorage.clear();
                this.props.history.replace('/')
            }
        });
    }

    render() {
        return <Row className="page-header">
            <Col span="6">
                <h2>Roshan's Blog</h2>
            </Col>
            <Col>
                <div className="right-content">
                    <Icon type="smile" /><span>{this.state.username}</span>
                    <a onClick={this.logout}>
                        <Icon type="logout" /><span>退出</span>
                    </a>
                </div>

            </Col>
        </Row>
    }
}

export default withRouter(Header);