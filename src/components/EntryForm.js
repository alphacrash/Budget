import { Box, FormControlLabel, Switch, TextField } from '@mui/material';

function EntryForm() {
  return (
    <Box>
      <TextField />
      <TextField />
      <FormControlLabel
        control={
          <Switch
            checked={isExpense}
            onChange={() => setIsExpense((state) => !state)}
          />
        }
      />
    </Box>
  );
}

export default EntryForm;
