import { SEARCH_TODO } from '../actions/actionType';

export const searchReducer = (state = '', action) => {
    switch (action.type) {
        case SEARCH_TODO: {
            const { text } = action.payload;
            return text;
        }
        default:
            return state;
    }
};