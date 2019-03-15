import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from './session';
import browse from './browse';
import paginate from './paginate';
import requestInProcess from './request';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    session,
    browse,
    paginate,
    requestInProcess
});

export default rootReducer;
