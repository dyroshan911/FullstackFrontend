import React from 'react';
import "./index.less"

class Paper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        }
    }

    render() {
        const { value = 0 } = this.props;
        const { current } = this.state;
        let next = current + 1 < 10 ? current + 1 : 0;
        let flipClass = 'flip down';
        if (value !== current) {
            flipClass = 'flip down go';
            next = value;
            setTimeout(()=>{
                this.setState({current: value});
            },600)
        }
        const frontClass = `digital number${current} front`;
        const backClass = `digital number${next} back`;
        
        
        return <div className={flipClass}>
            <div className={backClass}></div>
            <div className={frontClass}></div>
        </div>
    }
}

export default Paper;