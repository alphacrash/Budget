import { call, put, takeEvery } from 'redux-saga/effects';
import types, { populateEntries } from './actions';
import api from './api';

function* getEntries() {
  const { data } = yield call(api, 'api/entries');
  yield put(populateEntries(data));
}

export default function* rootSaga() {
  yield takeEvery(types.GET_ENTRIES, getEntries);
}
