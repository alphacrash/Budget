import { combineReducers } from 'redux';

import entriesReducer from "./entriesReducer";
import modalsReducer from "./modalsReducer";

const rootReducer = combineReducers({
  posts: entriesReducer,
  modals: modalsReducer,
});

export default rootReducer