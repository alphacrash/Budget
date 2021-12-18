import { Box, Container, Typography } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import request from 'superagent';

import ErrorThrowingComponent from './ErrorThrowingComponent';

const logError = async (error, errorInfo) => {
  const appError = {
    appErrorCode: '',
    appErrorNumber: '',
    userName: '',
    exceptionMessage: error,
    stackTrace: errorInfo,
    component: 'ReactJavaScript'
  };

  const apiUrl = 'http://localhost:3001/api/error';
  request.post(apiUrl).send(appError).set('accept', 'json').end();
};

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

function ErrorLoggingDemo() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Error Logging
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Button below will throw an error and log to DB once it reaches 5.
        </Typography>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onError={(error, errorInfo) => logError(error, errorInfo)}
        >
          <ErrorThrowingComponent />
        </ErrorBoundary>
      </Container>
    </Box>
  );
}

export default ErrorLoggingDemo;
