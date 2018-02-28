
import * as actionTypes from './action-types';

export const saveResult = result => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (index) => {
    return {
        type: actionTypes.DELETE_RESULT,
        index: index
    };
};