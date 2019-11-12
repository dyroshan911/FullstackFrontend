import React from "react";
import { connect } from "react-redux";
import action from "../store/action";

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.showData = [
            { title: '全部', value: 'all' },
            { title: '已完成', value: 'complete' },
            { title: '未完成', value: 'uncomplete' }
        ];
    }

    render() {
        return <div className='panel-footer'>
            <nav className="nav nav-pills">
                {
                    this.showData.map((item, index) => <li className={item.value === this.props.flag ? "presentation active" : "presentation"}  key={index}>
                        <a onClick={this.onClickChangeFilter.bind(this, item.value)}>{item.title}</a>
                    </li>)
                }

            </nav>
        </div>
    }

    onClickChangeFilter = (status) => {
        this.props.filter(status);
    }
}

export default connect(state => ({ ...state.todo }), action.todo)(Footer);