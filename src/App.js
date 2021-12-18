import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import ListPosts from './components/ListPosts';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';
import { getAllEntries } from './actions';
import Balance from './components/Balance';
import ConditionalField from './components/ConditionalField';

export default function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const [addEntry, setAddEntry] = useState(false);
  const posts = useSelector((state) => state.posts);
  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = posts.findIndex((e) => e.id === id);
    setEntry(posts[index]);
  }, [isOpen, id, posts]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    posts.map((post) => {
      if (post.isExpense) {
        totalExpense += Number(post.value);
        return totalExpense;
      }
      totalIncome += Number(post.value);
      return totalIncome;
    });
    const totalx = totalIncome - totalExpense;
    setTotal(totalx);
    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpense);
  }, [posts]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <>
      <Balance
        balance={total}
        incomeTotal={incomeTotal}
        expenseTotal={expenseTotal}
      />

      <Box sx={{ mt: 2, mb: 2 }}>
        <Button variant="contained" onClick={() => setAddEntry(!addEntry)}>
          Add Entry (Conditional Field)
        </Button>
      </Box>

      <ConditionalField condition={addEntry}>
        <NewEntryForm />
      </ConditionalField>

      <ListPosts posts={posts} isOpen={isOpen} />

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ModalEdit isOpen={isOpen} {...entry} />
    </>
  );
}
