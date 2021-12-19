import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeEditModal } from '../actions';
import useEntryDetails from './hooks/useEntryDetails';
import EntryForm from './EntryForm';
import { useEffect, useState } from 'react';
import isDirty from '../services/dirtyCheck';

const ModalEdit = ({ isOpen, id, description, value, isExpense }) => {
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);
  const previousState = [description, Number(value), isExpense];

  // eslint-disable-next-line
  useEffect(() => {
    const currentEntry = entryUpdate;
    const currentState = [currentEntry.description, Number(currentEntry.value), currentEntry.isExpense];
    const dirty = isDirty(previousState, currentState);
    setDisabled(!dirty)
  })

  return (
    <Dialog open={isOpen} onClose={() => () => dispatch(closeEditModal())}>
      <DialogTitle>Edit Post</DialogTitle>
      <DialogContent>
        <EntryForm
          description={entryUpdate.description}
          value={entryUpdate.value}
          isExpense={entryUpdate.isExpense}
          setDescription={entryUpdate.setDescription}
          setIsExpense={entryUpdate.setIsExpense}
          setValue={entryUpdate.setValue}
          addEntry={entryUpdate.addEntry}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeEditModal())}>Cancel</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} disabled={disabled}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalEdit;
