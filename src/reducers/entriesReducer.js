import entriesTypes from '../actions';

let index = null;
const initialPosts = [];

// eslint-disable-next-line default-param-last
const entriesReducer = (state = initialPosts, action) => {
  let newEntries;
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;
    case entriesTypes.ADD_ENTRY_RESULT:
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case entriesTypes.REMOVE_ENTRY_RESULT:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case entriesTypes.POPULATE_ENTRY_DETAILS:
    case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state];
      index = newEntries.findIndex((e) => e.id === action.payload.id);
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
};

export default entriesReducer;
