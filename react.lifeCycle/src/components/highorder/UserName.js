import React, { Component } from "react";
import local from './local'
import ajax from './ajax'
class UserName extends Component{
    
    render() {
        return (
            <label>用户名: <input value={this.props.data}/><br/></label>
        )
    }
}
// export default local(UserName, 'username', '');
UserName = ajax(UserName);
export default local(UserName, 'username', '');