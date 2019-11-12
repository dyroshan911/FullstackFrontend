import * as TYPE from '../action-types';

let todo = {
    //增加任务信息
    add(payload) {
        return {
            type: TYPE.TODO_ADD,
            payload
        }
    },

    //删除任务信息
    delete(id) {
        return {
            type: TYPE.TODO_DELETE,
            id
        }
    },

    //修改过滤信息
    filter(status) {
        return {
            type: TYPE.TODO_FILTER,
            status
        }
    }
}

export default todo;