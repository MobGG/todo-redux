import { WRITE_HISTORY, CLEAR_ALL_HISTORY } from '../actions/actionType';

const initialState = [];

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_HISTORY: {
            const { id, dateTime, text, status } = action.payload;
            return [
                ...state,
                {
                    id: id,
                    dateTime: dateTime,
                    text: `${dateTime} | ${status} | ${text}`,
                    isVisible: true
                }
            ];
        }
        case CLEAR_ALL_HISTORY: {
            return [];
        }
        default:
            return state;
    }
};