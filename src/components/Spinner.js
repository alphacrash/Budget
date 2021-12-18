import { Box, CircularProgress, Typography } from '@mui/material';

function Spinner() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={80} thickness={5} />
      <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Loading in progress...
        </Typography>
    </Box>
  );
}

export default Spinner;
