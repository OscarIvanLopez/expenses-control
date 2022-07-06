import { useState, useEffect } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ExpensesList from "./components/ExpensesList";
import Modal from "./components/Modal";
import { generateID } from "./helpers";
import IconNewExpense from "./img/nuevo-gasto.svg";

const App = () => {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );

  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget") ?? 0)
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [spentEdit, setSpentEdit] = useState({});

  const [filter, setFilter] = useState("");
  const [filteredExpenses, setfilteredExpenses] = useState({});

  // this effect validate if the users is editing a spent
  useEffect(() => {
    if (Object.keys(spentEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 250);
    }
  }, [spentEdit]);

  // this effect save the budget on local storage
  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);
  // this effect validate if are expenses on local storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  // this effect filter the expenses
  useEffect(() => {
    if (filter) {
      // filter by category
      const filteredExpenses = expenses.filter(
        (spent) => spent.category === filter
      );

      setfilteredExpenses(filteredExpenses);
    }
  }, [filter]);

  // This effect validate if are a saved budget on local storage
  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget") ?? 0);

    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  const handleNewExpense = () => {
    setModal(true);
    setSpentEdit({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 250);
  };

  const saveSpent = (spent) => {
    if (spent.id) {
      // update
      const updatedExpenses = expenses.map((spentState) =>
        spentState.id === spent.id ? spent : spentState
      );
      setExpenses(updatedExpenses);
      setSpentEdit({});
    } else {
      // new spent
      spent.id = generateID();
      spent.date = Date.now();
      setExpenses([...expenses, spent]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const deleteSpent = (id) => {
    const updatedExpenses = expenses.filter((spent) => spent.id !== id);

    setExpenses(updatedExpenses);
  };

  return (
    <div className={modal && "fijar"}>
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <ExpensesList
              expenses={expenses}
              setSpentEdit={setSpentEdit}
              deleteSpent={deleteSpent}
              filter={filter}
              filteredExpenses={filteredExpenses}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewExpense}
              alt="Icon New Expense"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveSpent={saveSpent}
          spentEdit={spentEdit}
          setSpentEdit={setSpentEdit}
        />
      )}
    </div>
  );
};

export default App;
