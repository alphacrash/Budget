import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/rootReducer";
import * as sagas from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
export default store;
