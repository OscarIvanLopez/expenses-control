import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  console.log(isValidBudget);
  return (
    <header>
      <h1>Expenses Planning</h1>

      {isValidBudget ? (
        <BudgetControl budget={budget} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
