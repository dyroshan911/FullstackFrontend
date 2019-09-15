import React from 'react';
import ProTypes from 'prop-types';

export default class Counter extends React.Component {
    static defaultProps = {
        count: 100
    }
    static propTypes = {
        count: ProTypes.number.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        }
    }

    componentWillMount() {
        console.log('1.componentWillMount-->');
    }

    componentDidMount() {
        console.log('3.componentDidMount-->')
    }

    render() {
        console.log('2.render-->')
        return (
            <div>thi is a Counter: {this.state
            .count}</div>
        )
    }
}