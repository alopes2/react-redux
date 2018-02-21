const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    console.log('Type: ', action.type);
    switch(action.type) {
        case 'INCREMENT':
            let updatedCounter = state.counter;
            updatedCounter++;
            return {
                ...state,
                counter: updatedCounter
            };
        case 'DECREMENT':
            let decrementedCounter = state.counter;
            decrementedCounter--;
            return {
                ...state,
                counter: decrementedCounter
            };
        case 'ADD':
            let addedCounter = state.counter;
            addedCounter += action.value;
            return {
                ...state,
                counter: addedCounter
            };
        case 'SUBTRACT':
            let subtractedCounter = state.counter;
            subtractedCounter -= action.value;
            return {
                ...state,
                counter: subtractedCounter
            };
        default: 
            console.log('Default')
            return state;
    }
}

export default reducer;