import * as actionTypes from '../../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_REQUEST_IN_PROCESS:
            return setRequestInProgress(state, action);
    }
    return state;
}

function setRequestInProgress(state, action) {
    const { inProcess, requestType } = action;
    const requestObject = {};
    requestObject[requestType] = inProcess;
    return Object.assign({}, state, requestObject);
}
