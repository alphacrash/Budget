import { Camera } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Camera sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Budget
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
