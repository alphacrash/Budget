import { CircularProgress, Typography, Stack } from '@mui/material';

function Spinner({ size, message }) {
  if (!size) size = 80;
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      <CircularProgress size={size} thickness={5} />
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        paragraph
      >
        {message}
      </Typography>
    </Stack>
  );
}

export default Spinner;
