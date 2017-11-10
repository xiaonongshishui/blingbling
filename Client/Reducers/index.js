import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import LoginReducer from './LoginReducer';

const reducers = combineReducers({
    LoginReducer:LoginReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;