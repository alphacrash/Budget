import DisplayBalance from './DisplayBalance';

function DisplayBalances({ incomeTotal, expenseTotal }) {
  return (
    <>
      <DisplayBalance
        title="Income"
        value={incomeTotal}
        hsize="h6"
        psize="h5"
      />
      <DisplayBalance
        title="Expenses"
        value={expenseTotal}
        hsize="h6"
        psize="h5"
      />
    </>
  );
}

export default DisplayBalances;
