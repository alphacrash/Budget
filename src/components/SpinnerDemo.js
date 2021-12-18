import { Box, Button, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

function SpinnerDemo() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, [setShow]);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth="sm">
        {show && <Spinner />}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={() => setShow(!show)}>
            {show ? 'Stop' : 'Start'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default SpinnerDemo;
