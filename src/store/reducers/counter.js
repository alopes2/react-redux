import * as actionTypes from '../actions/action-types';

import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    console.log('Type: ', action.type);
    switch(action.type) {
        case actionTypes.INCREMENT:
            let updatedCounter = state.counter;
            updatedCounter++;
            return updateObject(state, {counter: updatedCounter});
        case actionTypes.DECREMENT:
            let decrementedCounter = state.counter;
            decrementedCounter--;
            return updateObject(state, {counter: decrementedCounter});
        case actionTypes.ADD:
            let addedCounter = state.counter;
            addedCounter += action.value;
            return updateObject(state, {counter: addedCounter});
        case actionTypes.SUBTRACT:
            let subtractedCounter = state.counter;
            subtractedCounter -= action.value;
            return updateObject(state, {counter: subtractedCounter});
        default: 
            console.log('Default')
            return state;
    }
}

export default reducer;