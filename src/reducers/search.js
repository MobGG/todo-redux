export const searchReducer = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH':
            return action.text;
        default:
            return state;
    }
};