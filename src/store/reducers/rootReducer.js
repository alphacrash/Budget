const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  entries: (state = []) => state
});

export default rootReducer;
