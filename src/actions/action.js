let nextTodoId = 1;

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

export const writeHistory = (text, removed) => ({
    type: 'WRITE_HISTORY',
    text,
    removed
});

export const clearAllHistory = () => ({
    type: 'CLEAR_ALL_HISTORY'
});

export const sort = (text) => ({
    type: 'SORT',
    text
});

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// };