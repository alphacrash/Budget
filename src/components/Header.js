import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Header({ title }) {
  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        {title}
      </Typography>
      <nav>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/category">Category</Link>
        </Button>
        <Button>
          <Link to="/bug">Error Logging</Link>
        </Button>
        <Button>
          <Link to="/notes">Notes</Link>
        </Button>
      </nav>
    </Toolbar>
  );
}

export default Header;
