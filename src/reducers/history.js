const initialState = [];

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WRITE_HISTORY':
            return [
                ...state,
                {
                    id: action.id,
                    dateTime: action.dateTime,
                    text: `${action.dateTime} | ${action.status} | ${action.text}`,
                    isVisible: true
                }
            ];
        case 'CLEAR_ALL_HISTORY':
            return [];
        default:
            return state;
    }
};