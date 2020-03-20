import { CREATE_TODO, REMOVE_TODO, SEARCH_TODO, WRITE_HISTORY, CLEAR_ALL_HISTORY, SORT_HISTORY } from './actionType';

let nextTodoId = 0;
let nextHistoryId = 0;

export const create = (text) => ({
    type: CREATE_TODO,
    payload: {
        id: nextTodoId++,
        text
    },
});

export const remove = (id) => ({
    type: REMOVE_TODO,
    payload: { id },
});

export const search = (text) => ({
    type: SEARCH_TODO,
    payload: { text },
});

export const writeHistory = (obj) => ({
    type: WRITE_HISTORY,
    payload: {
        id: nextHistoryId++,
        dateTime: obj.dateTime,
        text: obj.text,
        status: obj.status
    },
});

export const clearAllHistory = () => ({
    type: CLEAR_ALL_HISTORY
});

export const sort = (text) => ({
    type: SORT_HISTORY,
    payload: { text },
});