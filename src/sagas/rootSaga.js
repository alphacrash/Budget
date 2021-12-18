import { call, fork, put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";
import entriesTypes, {
  populateEntries,
  populateEntryDetails,
} from "../actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const { data } = yield call(axios, "http://localhost:3001/api/entries");
  yield put(populateEntries(data));
}

function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/api/values/${id}`);
  yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}

async function addEntry({ id, description }) {
  await axios.post("http://localhost:3001/api/entries", {
    id,
    description,
  });
}

async function addEntryDetails({ id, value, isExpense }) {
  await axios.post("http://localhost:3001/api/values", {
    id,
    value,
    isExpense,
  });
}

function* addEntryToDb({ payload }) {
  yield call(addEntry, payload);
  yield call(addEntryDetails, payload);
  yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload });
}

export function* addEntrySaga() {
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb);
}

async function deleteEntry(id) {
  axios.delete(`http://localhost:3001/api/entries/${id}`);
  axios.delete(`http://localhost:3001/api/values/${id}`);
}

export function* deleteEntrySaga() {
  while (true) {
    const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
    yield call(deleteEntry, payload.id);
    yield put({ type: "REMOVE_ENTRY_RESULT", payload: { id: payload.id } });
  }
}
