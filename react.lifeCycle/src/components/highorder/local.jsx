import React, { Component } from "react";
/**
 * 高阶组件
 * 传入一个老组件返回一个新组件
 */

 export default function(OldComponent, name, placeholder){
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                data: '',
            }
        }
        componentWillMount() {
            this.setState({data: localStorage.getItem(name) || placeholder});
        }
        render() {
            return <OldComponent data={this.state.data} />
        }
    }
    return NewComponent;
 }