import React from 'react';
import { connect } from "react-redux";
import action from "../store/action";

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { data } = this.props;
        return <div className='panel-body'>
            <ul className="list-group">
                {
                    data.filter((item) => this.isNeedShow(item)).map((item, index) => <li className='list-group-item' key={index}>
                        <input type="checkbox" name='todo' />
                        <span>{item.name}</span>
                        <a onClick={this.onClickDelete.bind(this, item.id)} className='btn-danger'>删除</a>
                    </li>)
                }
            </ul>
        </div>
    }

    onClickDelete = (id) => {
        
    }

    isNeedShow = (item) => {
        const statusArr = ['uncomplete', 'complete'];
        console.log(this.props.flag, item.state);
        return (this.props.flag === 'all' || this.props.flag === statusArr[item.state])

    }
}

export default connect(state => ({ ...state.todo }), action.todo)(Body);