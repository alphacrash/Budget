import { Button, Typography } from "@mui/material";
import useEntryDetails from "./hooks/useEntryDetails";
import EntryForm from "./EntryForm";

const NewEntryForm = () => {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails();

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Add New Transaction
      </Typography>

      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        setValue={setValue}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => addEntry()}
      >
        Add
      </Button>
    </>
  );
};

export default NewEntryForm;
