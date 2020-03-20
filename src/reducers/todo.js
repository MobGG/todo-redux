import { CREATE_TODO, REMOVE_TODO, DELETE_TODO } from '../actions/actionType';

const initialState = [];

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO: {
            const { id, text } = action.payload;
            return [
                ...state,
                {
                    id,
                    text,
                    removed: false
                }
            ];
        }
        case REMOVE_TODO: {
            const { id } = action.payload;
            return state.map(todo =>
                todo.id === id ? { ...todo, removed: true } : todo
            );
        }
        case DELETE_TODO: {
            const { id } = action.payload;
            return state.filter(todo => todo.id !== id);
        }
        default:
            return state;
    }
};