const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INC_COUNTER':
            const incrementedCounter = state.counter;
            incrementedCounter++;
            return {
                ...state,
                counter: incrementedCounter
            };
        case 'ADD_COUNTER':
            const addedCounter = state.counter;
            addedCounter += action.value;
            return {
                ...state,
                counter: addedCounter
            };
        default:
            return state;
    }

};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
// console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});