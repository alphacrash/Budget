import { Alert, AlertTitle } from '@mui/material';

function MultiUseCard({
  children,
  cardType,
  cardTitle,
  cardVariant,
  cardActions
}) {
  return (
    <div>
      <Alert variant={cardVariant} severity={cardType}>
        {cardTitle && <AlertTitle>{cardTitle}</AlertTitle>}
        {children}
        {cardActions && <div>{cardActions}</div>}
      </Alert>
    </div>
  );
}

export default MultiUseCard;
