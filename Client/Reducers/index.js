import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { LoginReducer as login } from './LoginReducer';
import { ChatRoomsReducer as chatRooms } from './ChatRoomsReducer';

const reducers = combineReducers({
    login,
    chatRooms
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;