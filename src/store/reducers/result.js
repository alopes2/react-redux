import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

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
            return {
                ...state,
                results: state.results.concat(action.result)
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