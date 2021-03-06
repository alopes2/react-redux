import * as actionTypes from '../actions/action-types';

import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    console.log(action.index);
    const updatedResults = state.results.filter((result, index) => index !== action.index);
    return updateObject(state, {results: updatedResults});
};

const reducer = (state = initialState, action) => {
    console.log('Type: ', action.type);
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            // const storedResults = [...state.results];
            // const counter = action.result;
            // storedResults.push(counter);
            // return {
            //     ...state,
            //     results: storedResults
            // };
            return updateObject(state, {results: state.results.concat(action.result)});
        case actionTypes.DELETE_RESULT:
            // let updatedResults = [...state.results];
            // updatedResults.splice(action.value, 1);
            return deleteResult(state, action);
        default: 
            console.log('Default')
            return state;
    }
}

export default reducer;