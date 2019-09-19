/**
 * reducer的拆分和合并
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

    return {
        subcribe,
        dispatch,
        getState
    }
}

function reducerRename(state, action) {
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

function reducerCount(state, action) {
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
            const preStateForKey = state[key];
            nextState[key] = reducer(preStateForKey, action);
        }
        return nextState;
    }
}

const reducer = combainReducer({
    count: reducerCount,
    name: reducerRename
})

let store = createStore(reducer, {
    count: {
        count: 3
    },
    name: {
        name: 'math'
    }
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
