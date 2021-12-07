import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEntries } from './store/actions';

import AddEntry from './components/AddEntry';
import BalanceSheet from './components/BalanceSheet';
import Header from './components/Header';
import ListEntries from './components/ListEntries';
import UpdateEntry from './components/UpdateEntry';

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const entries = useSelector((state) => state.entries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        totalExpense += Number(entry.value);
        return totalExpense;
      }
      totalIncome += Number(entry.value);
      return totalIncome;
    });
    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);
  }, [entries]);

  return (
    <div>
      <Header />
      <BalanceSheet income={income} expense={expense} balance={balance} />
      <AddEntry />
      <ListEntries entries={entries} setIsOpen={setIsOpen} />
      <UpdateEntry isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
