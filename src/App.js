import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEntries } from './store/actions';

import AddEntry from './components/AddEntry';
import BalanceSheet from './components/BalanceSheet';
import Header from './components/Header';
import ListEntries from './components/ListEntries';
import UpdateEntry from './components/UpdateEntry';

function App() {
  const entries = useSelector((state) => state.entries);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <BalanceSheet />
      <AddEntry />
      <ListEntries entries={entries} />
      <UpdateEntry />
    </div>
  );
}

export default App;
