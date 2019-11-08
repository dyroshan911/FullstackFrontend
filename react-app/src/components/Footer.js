import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='panel-footer'>
            <nav className="nav nav-pills">
                <li className="presentation active">
                    <a href="javascript:;">全部</a>
                </li>
                <li className="presentation">
                    <a href="javascript:;">已完成</a>
                </li>
                <li className="presentation">
                    <a href="javascript:;">未完成</a>
                </li>
            </nav>
        </div>
    }
}