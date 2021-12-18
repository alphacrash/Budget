/* eslint-disable react/no-array-index-key */
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from '@mui/material';
import ExportToExcel from './ExportToExcel';

function ReusableTable({ data }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Field</TableCell>
                <TableCell align="right">Value</TableCell>
                <TableCell align="right">Previous Value</TableCell>
                <TableCell align="right">Username</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="right">{row.field}</TableCell>
                  <TableCell align="right">{row.updatedValue}</TableCell>
                  <TableCell align="right">{row.oldValue}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TablePagination rowsPerPageOptions={[5, 50]} />
          </Table>
        </TableContainer>
      </Paper>
      <Box sx={{ mt: 2 }}>
        <ExportToExcel apiData={data} fileName="table" />
      </Box>
    </Box>
  );
}

export default ReusableTable;
