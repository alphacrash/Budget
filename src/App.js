import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import useToken from './useToken';

// HOC
import SessionTimeout from './SessionTimeout';

// Authorization
import SignIn from './components/Authorization/SignIn';
import Signup from './components/Authorization/Signup';

// Necessary
import Header from './components/Header';

// Demo Components
import DemoRichText from './components/Demos/DemoRichText';
import DemoTable from './components/Demos/DemoTable';
import DemoLogError from './components/Demos/DemoLogError';
import Budget from './components/Budget/Budget';

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn setToken={setToken} />} />
          <Route path="/signup" element={<Signup setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <SessionTimeout>
          <Container maxWidth="md" component="main">
            <Header title="Budget" />
            <Routes>
              <Route path="/" element={<Budget />} />
              <Route path="signin" element={<SignIn setToken={setToken} />} />
              <Route path="signup" element={<Signup setToken={setToken} />} />
              <Route path="bug" element={<DemoLogError />} />
              <Route path="richtext/*" element={<DemoRichText />} />
              <Route path="table" element={<DemoTable />} />
            </Routes>
          </Container>
        </SessionTimeout>
      </BrowserRouter>
    </div>
  );
};

export default App;
