import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';

function UpdateEntry({ isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>Edit Entry</DialogTitle>
      <DialogContent>Edit Entry Values</DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        <Button onClick={() => setIsOpen(false)}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateEntry;
