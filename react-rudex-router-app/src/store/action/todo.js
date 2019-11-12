import * as TYPES from '../action-types';

let todo = {
    init(payload) {
        return {
            type: TYPES.TODO_INIT,
            payload
        }
    }
}
export default todo;