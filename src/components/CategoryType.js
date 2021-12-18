import { TableBody, TableCell, TableRow } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllEntries } from '../actions';

function CategoryType() {
  const params = useParams();
  const categoryType = params.type;

  const entries = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  const filteredEntries = entries.filter((entry) =>
    categoryType === 'income' ? entry.isExpense === false : entry.isExpense
  );

  const renderFilteredEntries = filteredEntries.map((entry) => (
    <TableRow key={entry.id}>
      <TableCell>{entry.description}</TableCell>
      <TableCell>{entry.isExpense ? 'Expense' : 'Income'}</TableCell>
      <TableCell align="right">{`$${entry.value}`}</TableCell>
    </TableRow>
  ));

  return <TableBody>{renderFilteredEntries}</TableBody>;
}
export default CategoryType;
