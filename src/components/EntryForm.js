import { Box, FormControlLabel, Switch, TextField } from '@mui/material';

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setIsExpense,
  setValue
}) {
  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        id="email"
        label="Description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <TextField
        margin="normal"
        required
        name="password"
        label="Value"
        id="value"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <FormControlLabel
        control={
          <Switch
            checked={isExpense}
            onChange={() => setIsExpense((oldState) => !oldState)}
          />
        }
        label="Is Expense?"
      />
    </Box>
  );
}

export default EntryForm;
