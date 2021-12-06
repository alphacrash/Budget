import { Typography } from '@mui/material';

function BalanceSheet({ income, expense, balance }) {
  return (
    <>
      <Typography variant="h6" color="primary">
        Balance
      </Typography>
      <Typography component="p" variant="h4">
        ${balance}
      </Typography>
      <div>
        <Typography color="text.secondary">Total Income: ${income}</Typography>
        <Typography color="text.secondary">
          Total Expense: ${expense}
        </Typography>
      </div>
    </>
  );
}

export default BalanceSheet;
