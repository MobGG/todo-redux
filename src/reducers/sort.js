import { SORT_HISTORY } from '../actions/actionType';

export const sortReducer = (state = 'desc', action) => {
  switch (action.type) {
    case SORT_HISTORY: {
      const { text } = action.payload;
      return text;
    }
    default:
      return state;
  }
};