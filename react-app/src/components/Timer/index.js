import "./index.less"

import React from 'react';
import Paper from "./paper";

class FlipTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            second_l: 0,
            second_h: 0,
            minute_l: 0,
            minute_h: 0,
            hour_l: 0,
            hour_h: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            const date = new Date();
            let second_l = date.getSeconds() % 10;
            let second_h = Math.floor(date.getSeconds() / 10) || 0;

            let minute_l = date.getMinutes() % 10;
            let minute_h = Math.floor(date.getMinutes() / 10) || 0;

            let hour_l = date.getHours() % 10;
            let hour_h = Math.floor(date.getHours() / 10) || 0;

            this.setState({ second_l, second_h, minute_l, minute_h, hour_l, hour_h })
            console.log(second_h);

        }, 1000);
    }

    render() {

        return <div className="dy-flip-clock">
            <Paper value={this.state.hour_h} />
            <Paper value={this.state.hour_l} />
            <em >:</em>
            <Paper value={this.state.minute_h} />
            <Paper value={this.state.minute_l} />
            <em >:</em>
            <Paper value={this.state.second_h} />
            <Paper value={this.state.second_l} />
        </div>

    }
}

export default FlipTimer;