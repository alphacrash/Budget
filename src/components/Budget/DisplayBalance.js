import { Typography } from '@mui/material';

function DisplayBalance({ title, value, hsize, psize }) {
  return (
    <>
      <Typography variant={hsize} color="primary">
        {title}
      </Typography>
      <Typography variant={psize}>{Number.isNaN(value) ? 0 : value}</Typography>
    </>
  );
}

export default DisplayBalance;
