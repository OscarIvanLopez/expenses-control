import Spent from "./Spent";

const ExpensesList = ({ expenses, setSpentEdit, deleteSpent }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Expenses" : "No expenses yet"}</h2>

      {expenses.map((spent) => (
        <Spent
          key={spent.id}
          spent={spent}
          setSpentEdit={setSpentEdit}
          deleteSpent={deleteSpent}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
