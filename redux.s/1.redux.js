/**
 * rendux 是一个状态管理器，什么是状态呢，数据就是状态
 */
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'RENAME':
            return {
                ...state,
                name: action.payload
            }
    }
}

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
    
    return {
        subcribe,
        dispatch,
        getState
    }
}

let store = createStore(reducer, {
    count: 3,
    name: 'math'
});


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
