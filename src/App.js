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
import Budget from './components/Budget/Budget';

// Demo Components
import DemoRichText from './components/Demos/DemoRichText';
import DemoTable from './components/Demos/DemoTable';
import DemoLogError from './components/Demos/DemoLogError';

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <BrowserRouter>
        <Header title="Budget" isLoggedIn={false} />
        <Routes>
          <Route path="/" element={<SignIn setToken={setToken} />} />
          <Route path="/signup" element={<Signup setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    < div >
      <BrowserRouter>
        <SessionTimeout>
          <Header title="Budget" isLoggedIn={true} />
          <Container maxWidth="md" component="main">
            <Routes>
              <Route path="/" element={<Budget />} />
              <Route path="bug" element={<DemoLogError />} />
              <Route path="richtext/*" element={<DemoRichText />} />
              <Route path="table" element={<DemoTable />} />
            </Routes>
          </Container>
        </SessionTimeout>
      </BrowserRouter>
    </div >
  );
};

export default App;
