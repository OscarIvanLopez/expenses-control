import Spent from "./Spent";

const ExpensesList = ({
  expenses,
  setSpentEdit,
  deleteSpent,
  filter,
  filteredExpenses,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>
            {filteredExpenses.length
              ? "Expenses"
              : "There are no expenses with this category"}
          </h2>
          {filteredExpenses.map((spent) => (
            <Spent
              key={spent.id}
              spent={spent}
              setSpentEdit={setSpentEdit}
              deleteSpent={deleteSpent}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Expenses" : "No expenses yet"}</h2>
          {expenses.map((spent) => (
            <Spent
              key={spent.id}
              spent={spent}
              setSpentEdit={setSpentEdit}
              deleteSpent={deleteSpent}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpensesList;
