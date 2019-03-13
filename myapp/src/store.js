import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const myRouterMiddleware = routerMiddleware(history);

const initialState = {};

const middleWare = [myRouterMiddleware, sagaMiddleware];

export const store = createStore(rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)));

sagaMiddleware.run(rootSaga);
