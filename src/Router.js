import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import useToken from './useToken';
import App from './App';
import SignIn from './components/SignIn';
import ErrorLoggingDemo from './components/ErrorLoggingDemo';
import Category from './components/Category';
import Signup from './components/Signup';
import CategoryType from './components/CategoryType';
import ReTable from './components/ReTable';
import Header from './components/Header';
import {
  transactions,
  transactionsHeaders
} from './services/transactionData';
import MultiUseCardDemo from './components/MultiUseCardDemo';
import ReusableComponents from './components/ReusableComponents';
import SpinnerDemo from './components/SpinnerDemo';

// Rich Text Box
import DemoRichText from './componentsx/RichText/DemoRichText';
import RichTextCreate from './componentsx/RichText/RichTextCreate';
import RichTextList from './componentsx/RichText/RichTextList';


const Router = () => {
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
        <Container maxWidth="md" component="main">
          <Header title="Budget" />
          <Routes>
            <Route path="/bug" element={<ErrorLoggingDemo />} />
            <Route path="/" element={<App />} />
            <Route path="/category" element={<Category />}>
              <Route exact path=":type" element={<CategoryType />} />
            </Route>
            <Route path="/reuse" element={<ReusableComponents />} />
            <Route
              path="/table"
              element={
                <ReTable rows={transactions} rowHeaders={transactionsHeaders} />
              }
            />
            <Route path="/spinner" element={<SpinnerDemo />} />
            <Route path="/muc" element={<MultiUseCardDemo />} />

            <Route path="richtext" element={<DemoRichText />}>
              <Route path="edit" element={<RichTextCreate />} />
              <Route path="list" element={<RichTextList />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default Router;
