import React from 'react';
import ProTypes from 'prop-types';

// const {PureComponent} = React;
class PureComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        //浅比较
        for (let prop in nextProps) {
            if (nextProps[prop] !== this.props[prop]) {
                return true;
            }
        }
        for (let prop in nextState) {
            if (nextState[prop] !== this.state[prop]) {
                return true;
            }
        }
        return false;
    }
}
export default class Counter extends PureComponent {
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

    shouldComponentUpdate(nextProps, nextState) { //性能优化的重点
        console.log('4.shouldComponentUpdate-->');
        return true;
    }

    render() {
        console.log('2.render-->')
        return (
            <div>thi is a Counter: {this.state
            .count}</div>
        )
    }
}