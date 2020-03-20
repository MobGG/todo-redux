import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { searchReducer } from './search';
import { historyReducer } from './history';
import { sortReducer } from './sort';

export default combineReducers({
    todoReducer,
    searchReducer,
    historyReducer,
    sortReducer
});