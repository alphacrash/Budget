import { Delete, Edit } from '@mui/icons-material';
import {
  Icon,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

function ListEntries({ entries, setIsOpen }) {
  return (
    <>
      <Typography variant="h5">List of Entries</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.title}</TableCell>
              <TableCell>{`$${entry.value}`}</TableCell>
              <TableCell>{entry.isExpense ? 'Expense' : 'Income'}</TableCell>
              <TableCell align="right">
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                  <Icon onClick={() => setIsOpen(true)}>
                    <Edit />
                  </Icon>
                  <Icon>
                    <Delete />
                  </Icon>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default ListEntries;
