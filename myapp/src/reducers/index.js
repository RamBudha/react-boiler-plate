import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from './session';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    session,
});

export default rootReducer;
