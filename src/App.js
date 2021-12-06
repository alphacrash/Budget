import AddEntry from './components/AddEntry';
import BalanceSheet from './components/BalanceSheet';
import Header from './components/Header';
import ListEntries from './components/ListEntries';
import UpdateEntry from './components/UpdateEntry';

function App() {
  return (
    <div>
      <Header />
      <BalanceSheet />
      <AddEntry />
      <ListEntries />
      <UpdateEntry />
    </div>
  );
}

export default App;
