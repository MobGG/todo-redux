let nextTodoId = 1;
let nextHistoryId = 1;

export const create = (text) => ({
    type: 'CREATE',
    id: nextTodoId++,
    text
});

export const remove = (id) => ({
    type: 'REMOVE',
    id
});

export const search = (text) => ({
    type: 'SEARCH',
    text
});

export const writeHistory = (obj) => ({
    type: 'WRITE_HISTORY',
    id: nextHistoryId++,
    dateTime: obj.dateTime,
    text: obj.text,
    status: obj.status,
});

export const clearAllHistory = () => ({
    type: 'CLEAR_ALL_HISTORY'
});

export const sort = (text) => ({
    type: 'SORT',
    text
});