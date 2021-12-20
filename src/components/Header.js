import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header({ title, isLoggedIn }) {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              {title}
            </Link>
          </Typography>
          {isLoggedIn ?
            <>
              <nav>
                <Link to="/bug" style={{ textDecoration: "none" }}>
                  <Button>
                    Log Error
                  </Button>
                </Link>
                <Link to="/table" style={{ textDecoration: "none" }}>
                  <Button>
                    Table
                  </Button>
                </Link>
                <Link to="/richtext" style={{ textDecoration: "none" }}>
                  <Button>
                    Rich Text
                  </Button>
                </Link>
              </nav>
              <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={() => {
                localStorage.removeItem("user")
                window.location.replace("/")
              }}>
                Logout
              </Button>
            </>
            :
            <nav>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button>
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button>
                  Sign Up
                </Button>
              </Link>
            </nav>}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;