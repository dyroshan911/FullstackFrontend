import * as TYPE from '../action-types';

export default function todo(state = {
    data: [],
    flag: 'all' //all, completed, uncompleted
}, action) {
    state = JSON.parse(JSON.stringify(state)); //为了不直接修改原有的状态信息
    switch (action.type) {
        //增加任务信息
        case TYPE.TODO_ADD:
            let { payload } = action;
            payload.id = state.data.length === 0 ? 1 : (parseFloat(state.data[state.data.length - 1]['id']) + 1);
            state.data.push(payload);
            console.log(state);
            break;
        //删除任务信息
        case TYPE.TODO_DELETE:
            let { id } = action;
            console.log(id);
            break;
        //修改过滤条件
        case TYPE.TODO_FILTER:
            let { status } = action;
            state.flag = status;
            break;
    }
    return state;
}