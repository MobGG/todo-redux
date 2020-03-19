import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { searchReducer } from './search';
import { historyReducer } from './history';

export default combineReducers({
    todoReducer,
    searchReducer,
    historyReducer
});