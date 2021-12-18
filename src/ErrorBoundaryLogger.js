import { ErrorBoundary } from 'react-error-boundary';
import request from 'superagent';

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

function ErrorBoundaryLogger({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => logError(error, errorInfo)}
    >
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryLogger;
