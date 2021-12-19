import { Container, Grid } from '@mui/material';
import BalanceCard from './BalanceCard';

function Balance({ balance, incomeTotal, expenseTotal }) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <BalanceCard title="Account Balance" value={balance} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BalanceCard title="Total Income" value={incomeTotal} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BalanceCard title="Total Expense" value={expenseTotal} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Balance;
