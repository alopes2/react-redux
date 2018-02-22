import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    console.log('Type: ', action.type);
    switch(action.type) {
        case actionTypes.INCREMENT:
            let updatedCounter = state.counter;
            updatedCounter++;
            return {
                ...state,
                counter: updatedCounter
            };
        case actionTypes.DECREMENT:
            let decrementedCounter = state.counter;
            decrementedCounter--;
            return {
                ...state,
                counter: decrementedCounter
            };
        case actionTypes.ADD:
            let addedCounter = state.counter;
            addedCounter += action.value;
            return {
                ...state,
                counter: addedCounter
            };
        case actionTypes.SUBTRACT:
            let subtractedCounter = state.counter;
            subtractedCounter -= action.value;
            return {
                ...state,
                counter: subtractedCounter
            };
        case actionTypes.STORE_RESULT:
            // const storedResults = [...state.results];
            // const counter = state.counter;
            // storedResults.push(counter);
            // return {
            //     ...state,
            //     results: storedResults
            // };
            return {
                ...state,
                results: state.results.concat(state.counter)
            };
        case actionTypes.DELETE_RESULT:
            // let updatedResults = [...state.results];
            // updatedResults.splice(action.value, 1);
            console.log(action.index);
            const updatedResults = state.results.filter((result, index) => index !== action.index);
            return {
                ...state,
                results: updatedResults
            };
        default: 
            console.log('Default')
            return state;
    }
}

export default reducer;