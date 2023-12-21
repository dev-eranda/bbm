import { applyMiddleware, createStore ,combineReducers } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import promise from "redux-promise";
import reducer from '../reducer';

const middleware = applyMiddleware(promise, thunk, logger)
const store = createStore(reducer,  middleware);

/*store.subscribe(throttle(() => {
    saveAuthState({
        Auth: store.getState().Auth
    });
}, 1000));*/
export default store;