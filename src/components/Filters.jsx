
const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <legend>Filter Expenses</legend>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="select">-- All Categories</option>
            <option value="saving">-- Saving</option>
            <option value="food">-- Food</option>
            <option value="house">-- House</option>
            <option value="expense">-- Various Expenses</option>
            <option value="leisure">-- Leisure</option>
            <option value="healt">-- Healt</option>
            <option value="subscriptions">-- Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
