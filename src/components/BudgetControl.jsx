const BudgetControl = ({ budget }) => {
  const FormatQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      type: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>Grafica aqui</div>

      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span> ${FormatQuantity(budget)}
        </p>
        <p>
          <span>Available: </span> ${FormatQuantity(0)}
        </p>
        <p>
          <span>Spent: </span> ${FormatQuantity(0)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
