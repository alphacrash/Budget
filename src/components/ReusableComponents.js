import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function ReusableComponents() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Reusable Components
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="outlined">
            <Link to="/table">Table</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/richtext">Rich Text Box</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/spinner">Spinner</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/muc">Multi Use Card</Link>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default ReusableComponents;
