import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  budget,
  setBudget,
  expenses,
  setExpenses,
  setIsValidBudget,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalExpense = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    );
    const totalAvailable = budget - totalExpense;

    // calculate percentage spent
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );
    setAvailable(totalAvailable);
    setSpent(totalExpense);

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);
  }, [expenses]);

  const FormatQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      type: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const res = confirm("Do you want to reset budget and expenses?");

    if (res) {
      setExpenses({});
      setBudget(0);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage > 100 ? "#ef476f" : "#3b82f6",
            textColor: "#3b82f6",
          })}
          text={`${percentage}% Spent`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget: </span> ${FormatQuantity(budget)}
        </p>
        <p className={`${available < 0 ? "negativo" : ""}`}>
          <span>Available: </span> ${FormatQuantity(available)}
        </p>
        <p>
          <span>Spent: </span> ${FormatQuantity(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
