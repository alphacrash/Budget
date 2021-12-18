/* eslint-disable react/jsx-boolean-value */
import { Box, Container, Stack, Typography } from '@mui/material';
import MultiUseCard from './MultiUseCard';

function MultiUseCardDemo() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Multi Use Card
      </Typography>
      <Container maxWidth="sm">
        <Stack sx={{ width: '100%' }} spacing={2}>
          <MultiUseCard cardVariant="outlined" cardType="error">
            Card: Variant - Outlined, Type - Error
          </MultiUseCard>
          <MultiUseCard cardVariant="outlined" cardType="warning">
            Card: Variant - Outlined, Type - Warning
          </MultiUseCard>
          <MultiUseCard cardVariant="outlined" cardType="info">
            Card: Variant - Outlined, Type - Info
          </MultiUseCard>
          <MultiUseCard cardVariant="outlined" cardType="success">
            Card: Variant - Outlined, Type - Success
          </MultiUseCard>
          <MultiUseCard
            cardVariant="filled"
            cardType="info"
            cardTitle="Information"
          >
            Card: Variant - Filled, Type, Title - Information
          </MultiUseCard>
          <MultiUseCard
            cardVariant="filled"
            cardType="success"
            cardTitle="Success"
          >
            Card: Variant - Filled, Type, Title - Success
          </MultiUseCard>
        </Stack>
      </Container>
    </Box>
  );
}

export default MultiUseCardDemo;
