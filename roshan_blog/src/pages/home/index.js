import React from 'react';
import './index.less'
import { Form, Input } from 'antd'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div className='home-page'>
            <div className='login-form'>
                <h1>欢迎光临ROSHAN BLOG</h1>
                <LoginForm></LoginForm>
            </div>
        </div>
    }
}

@Form.create()
class LoginForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Form.Item>
                    {
                        getFieldDecorator('username', {
                        })(<Input />)
                    }
                </Form.Item>
            </Form>
        )
    }
}

export default Home;