let nextTodoId = 0;

export const create = (text) => ({
    type: 'CREATE',
    id: nextTodoId++,
    text
})

export const remove = (id) => ({
    type: 'REMOVE',
    id
})

export const search = (text) => ({
    type: 'SEARCH',
    text
})

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }