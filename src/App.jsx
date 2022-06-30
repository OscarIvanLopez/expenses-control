import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconNewExpense from "./img/nuevo-gasto.svg";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 1000);
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="nuevo-gasto">
          <img
            src={IconNewExpense}
            alt="Icon New Expense"
            onClick={handleNewExpense}
          />
        </div>
      )}

      {modal && <Modal setModal={setModal} animateModal={animateModal} />}
    </div>
  );
};

export default App;
