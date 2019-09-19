/**
 * state的拆分和合并
 */

const createStore = function (reducer, initState) {
    let state = initState;
    let listeners = [];
    function subcribe(listener) {
        listeners.push(listener);
    }
    function dispatch(action) {
        // state = newState;
        state = reducer(state, action);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }
    function getState() {
        return state;
    }
    /* 注意！！！只修改了这里，用一个不匹配任何计划的 type，来获取初始值 */
    dispatch({type: Symbol()});

    return {
        subcribe,
        dispatch,
        getState
    }
}

/* 初始值与ruducer放在一起 */
let initStateForName = {
    name: 'math'
}

function reducerRename(state, action) {
    if (!state) {
        state = initStateForName;
    }
    switch (action.type) {
        case 'RENAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}

let initStateForCount = {
    count: 3
}
function reducerCount(state, action) {
    if (!state) {
        state = initStateForCount;
    }
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
}

function combainReducer(reducers) {
    const ruducerkeys = Object.keys(reducers);
    return function (state, action) {
        const nextState = {};
        for (let i = 0; i < ruducerkeys.length; i++) {
            const key = ruducerkeys[i];
            const reducer = reducers[key];
            // nextState[key] = state[key];
            const preStateForKey = state ? state[key] : state;
            nextState[key] = reducer(preStateForKey, action);
        }
        return nextState;
    }
}

const reducer = combainReducer({
    count: reducerCount,
    name: reducerRename
})

let store = createStore(reducer);


store.subcribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    payload: null
})

store.dispatch({
    type: 'RENAME',
    payload: 'ROS'
})
