import entriesReducer from './entriesReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  entries: entriesReducer
});

export default rootReducer;
