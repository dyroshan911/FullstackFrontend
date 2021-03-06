/**
 * 中间件使用方法的优化
 * 
 */
/*接收旧的 createStore，返回新的 createStore
const newCreateStore = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware)(createStore);*/

/*返回了一个 dispatch 被重写过的 store
const store = newCreateStore(reducer);*/

function applyMiddleware(...middlewares) {
    /* 返回一个接收旧的createStore的函数 */
    return function(oldCreateStore) {
        /* 返回一个新的createStore */
        return function(reducer, initState) {
            /* 调用旧的createStore生成store */
            let store = oldCreateStore(reducer, initState);
            /* 按序初始化传入的middlewares */
            const chain = middlewares.map(
                middleware => middleware(store)
            )
            let dispatch = store.dispatch;
            /* middlewares串接出新的dispatch */
            chain.reverse().map(
                middleware => {
                    dispatch = middleware(dispatch);
                }
            )
            store.dispatch = dispatch;
            return store;
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
    /* 注意！！！只修改了这里，用一个不匹配任何计划的 type，来获取初始值 */
    dispatch({ type: Symbol() });

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

//const store = createStore(reducer);

/**
 * 记录日常
 */

const logMiddleWare = (store) => (next) => (action) => {
    console.log('this state--->', store.getState());
    console.log('action--->', action);
    next(action);
    console.log('next state--->', store.getState());
}

const exceptionMiddleware = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (err) {
        console.error('错误报告: ', err)
    }
}

const timeMiddleware = (store) => (next) => (action) => {
    console.log('time', new Date().getTime());
    next(action);
}


/**
 * 初具雏形的中间件功能
 */
/*const next = store.dispatch;
const logger = logMiddleWare(store);
const exception = exceptionMiddleware(store);
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));*/

const newCreateStore = applyMiddleware(exceptionMiddleware, timeMiddleware, logMiddleWare)(createStore);

const store = newCreateStore(reducer);


store.subcribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    payload: null
})

// store.dispatch({
//     type: 'RENAME',
//     payload: 'ROS'
// })
