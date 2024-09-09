import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import NewStatistic from "./components/NewStatistic";
import NewStatistics from "./NewStatistics";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setexpenseTotal] = useState(0)
const [total, setTotal] = useState(0)

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];  
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isOpen]);


useEffect(() => {
  let totalIncome = 0;
  let totalExpense = 0;
  entries.map((entry) => {
    if(entry.isExpense){
      return (totalExpense += Number(entry.value));
    }else{
      return (totalIncome += Number(entry.value));
    }

  });
  setTotal(totalIncome - totalExpense);
  setexpenseTotal(totalExpense);  
  setIncomeTotal(totalIncome);
}, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    console.log("entries", entries);
    console.log(`result`, result);
    setEntries(result);
  }

  function editEntry(id) {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }
  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log("result", result);
    console.log("entries", entries);
    setEntries(result);
    resetEntry();
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <NewStatistic size="small" label="Your Balance" value={total}/>
      <NewStatistics expenseTotal={expenseTotal} incomeTotal={incomeTotal}/>

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.00,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.00,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 300.00,
    isExpense: true,
  },
];
