import types from '../actions';

// eslint-disable-next-line default-param-last
const entriesReducer = (state = [], action) => {
  switch (action.type) {
    case types.POPULATE_ENTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default entriesReducer;
