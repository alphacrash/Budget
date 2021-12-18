import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

function Category() {
  return (
    <div>
      <nav>
        Select the category type to view the list:
        <Button>
          <Link to="expense">Expense</Link>
        </Button>
        <Button>
          <Link to="income">Income</Link>
        </Button>
      </nav>
      <Outlet />
    </div>
  );
}

export default Category;
