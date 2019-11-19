import React from 'react';
import './index.less'
import { Form, Input, Icon, Button } from 'antd'
import service from '../../service/users'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div className='home-page'>
            <div className='login-form'>
                <h1>欢迎光临Roshan's Blog</h1>
                <UserForm onSubmit={
                    (isSignup, user) => {
                        service.index();
                        console.log(user);
                        service[isSignup ? 'signup' : 'signin'](user).then(data => {
                            console.log(user);
                        })
                    }
                }></UserForm>
            </div>
        </div>
    }
}

@Form.create()
class UserForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isSignup: false
        }
    }

    checkUsername = (rule, value, callback) => {
        if (!value) {
            callback('用户名不能为空');
        } else if (!/^1\d{10}$/.test(value)) {
            callback('请输入11位手机号');
        }
        callback();
    }

    render() {
        const { form: { getFieldDecorator, validateFieldsAndScroll }, onSubmit } = this.props;
        return (
            <Form onSubmit={(e) => {
                e.preventDefault(); //阻止默认事件
                validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        onSubmit(this.state.isSignup, values);
                    }
                })
            }}>
                <Form.Item>
                    {
                        getFieldDecorator('username', {
                            rules: [{ validator: this.checkUsername }, { required: true, message: '请输入手机号' }]
                        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />)
                    }
                </Form.Item>
                {
                    this.state.isSignup && <Form.Item>
                        {
                            getFieldDecorator('email', {
                                rules: [{ type: 'email', message: '邮箱格式不正确' }, { required: true, message: '请输入邮箱' }]
                            })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱" />)
                        }
                    </Form.Item>
                }
                <Form.Item>
                    {
                        getFieldDecorator('password', {
                            rules: [{
                                required: true,
                                message: '请输入密码'
                            }]
                        })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />)
                    }
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-from-button" > 登录 </Button>
                </Form.Item>
                <a onClick={() => this.setState({ isSignup: !this.state.isSignup })}>{this.state.isSignup ? '已有账号?直接登录' : '没有账号?立即注册'}</a>
            </Form>
        )
    }
}

export default Home;