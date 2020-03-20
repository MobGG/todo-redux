const initialState = [];
const mockState = [
    {
        id: 1,
        text: 'action.text1',
        removed: false
    },
    {
        id: 2,
        text: 'action.text2',
        removed: true
    },
    {
        id: 3,
        text: 'action.text3',
        removed: false
    },
]

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    removed: false
                }
            ];
        case 'REMOVE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, removed: true } : todo
            )
        default:
            return state;
    }
};