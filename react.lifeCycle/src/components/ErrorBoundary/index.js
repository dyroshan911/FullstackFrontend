import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {hasError: false};
    }
    componentDidCatch(hasError) {
        this.setState({hasError});
    }

    render() {
        if (this.state.hasError) {
            return <div>此组件暂时无法显示</div>
        }
    }
}