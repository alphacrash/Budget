const types = {
  GET_ENTRIES: 'GET_ENTRIES',
  POPULATE_ENTRIES: 'POPULATE_ENTRIES'
};

export default types;

export const getEntries = () => ({ type: types.GET_ENTRIES });

export const populateEntries = (entries) => ({
  type: types.POPULATE_ENTRIES,
  payload: entries
});
