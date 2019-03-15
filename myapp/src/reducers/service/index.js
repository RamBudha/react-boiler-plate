import * as actionTypes from '../../constants/actionTypes';

const initialState = {};

export default function(action) {
    return {
        type: action.GET_GENRE_DATA_FROM_CLOUD
    };
}

function setRequestInProgress(state, action) {
    const { inProcess, requestType } = action;
    const requestObject = {};
    requestObject[requestType] = inProcess;
    return Object.assign({}, state, requestObject);
}
