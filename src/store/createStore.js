function createStore(reducer, initialState) {
    let state = initialState;
    let subscribers = {};

    function getState() {
        return state;
    }

    function subscribe(callback) {
        subscribers.push(callback);
    }

    function dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach(sub => {
            sub()
        })
    }

    return {
        getState,subscribe,dispatch
    }
}