import React, { Component } from "react";
import PropTypes from "prop-types";
class Header extends Component {
    render() {
        return (
            <div>
                <Title />
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Cotent />
            </div>
        )
    }
}

class Cotent extends Component {
    static contextTypes = {
        color: PropTypes.string
    }
    render() {
        return (
            <div style={{ color: this.context.color }}>
                content
            </div>
        )
    }
}

class Title extends Component {
    static contextTypes = {
        color: PropTypes.string,
        setColor: PropTypes.func
    }
    render() {
        console.log(this.context.setColor);
        return (
            <div style={{ color: this.context.color }}>
                <h1>title</h1>
                <button onClick={()=>{this.context.setColor('blue')}}>change blue</button>
            </div>
            
        )
    }
}

/**
 * 1. 在父组件里定义 childContextTypes 子上下文对象
 * 2. 在父组件里定义哥getchildContext 用来返回上下文对象
 * 3. 在要接收这下上下文组件中定义contextTypes
 */
export default class HomePage extends Component {
    static childContextTypes = {
        color: PropTypes.string,
        setColor: PropTypes.func
    }
    setColor = (color) => {
        this.setState({color});
    }
    getChildContext() {
        return {
            color: this.state.color,
            setColor: this.setColor
        }
    }
    constructor() {
        super();
        this.state = { color: 'red' };
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}