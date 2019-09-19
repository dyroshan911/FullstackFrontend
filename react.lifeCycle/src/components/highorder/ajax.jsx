import React, { Component } from "react";
/**
 * 高阶组件
 * 传入一个老组件返回一个新组件
 */

export default function (OldComponent) {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                data: '',
            }
        }
        componentDidMount() {
            fetch('/user.json').then(respone => respone.json()).then(user => {
                console.log(this.props.data);
                this.setState({ data: user[this.props.data] || this.props.placeholder });
            });
            // this.setState({data: localStorage.getItem(name) || placeholder});
        }
        render() {
            return <OldComponent data={this.state.data} save={this.save} />
        }
    }
    return NewComponent;
}