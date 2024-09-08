import { Container} from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import NewStatistic from "./components/NewStatistic";
import NewStatistics from "./NewStatistics";
import EntryLine from "./components/EntryLine";
function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <NewStatistic size="small" label="Your Balance" />
      <NewStatistics />

      <MainHeader title="History" type="h3" />
      <EntryLine description='income' value="$10.00"/>
      <EntryLine description='expense' value="$10.00" isExpense/>

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
