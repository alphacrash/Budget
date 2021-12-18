import { CircularProgress, Typography, Stack } from '@mui/material';

function Spinner() {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      <CircularProgress size={80} thickness={5} />
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        paragraph
      >
        Loading in progress...
      </Typography>
    </Stack>
  );
}

export default Spinner;
