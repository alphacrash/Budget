import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';

function DemoLogError() {
  const [counter, setCounter] = useState(0)

  if (counter === 5) {
    // Simulate a JS error
    throw new Error('I crashed!');
  }

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
          Error Logging
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Button below will throw an error and log to DB once it reaches 5.
        </Typography>

        <Box textAlign="center">
          <Button variant="contained" onClick={() => setCounter(counter + 1)}>
            {counter}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default DemoLogError;
