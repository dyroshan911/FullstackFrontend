import React from 'react';
import { connect } from "react-redux";
import action from "../store/action";

class Head extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { data } = this.props;

        //删除未完成的任务
        let len = data.filter((item) => item.state === 0).length;
        return <div className='panel-heading'>
            <h3 className='panel-title'>
                任务列表 [当前未完成的任务数:<span className='count'>{len}</span>]
            </h3>
            <input type="text" className='form-control' placeholder='please enter the tasks to be completed' onKeyUp={this.onKeyUp}/>
        </div>
    }

    //键盘点击响应
    onKeyUp = ev => {
        if (ev.keyCode === 13) {
            if (ev.target.value.length === 0) return;
            let value = ev.target.value.trim(); //trim 去除首尾空格
            this.props.add({
                name: value,
                state: 0
            });
            ev.target.value = '';
        }
    }
}

// export default Head;
export default connect(state => ({ ...state.todo }), action.todo)(Head);
