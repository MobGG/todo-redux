export const sortReducer = (state = 'desc', action) => {
  switch (action.type) {
      case 'SORT':
          return action.text;
      default:
          return state;
  }
};