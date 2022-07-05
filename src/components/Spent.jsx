import { formatDate } from "../helpers";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import SavingIcon from "../img/icono_ahorro.svg";
import HouseIcon from "../img/icono_casa.svg";
import FoodIcon from "../img/icono_comida.svg";
import ExpensesIcon from "../img/icono_gastos.svg";
import LeisureIcon from "../img/icono_ocio.svg";
import HealtIcon from "../img/icono_salud.svg";
import SubsIcon from "../img/icono_suscripciones.svg";

const IconsDictionary = {
  saving: SavingIcon,
  food: FoodIcon,
  house: HouseIcon,
  expense: ExpensesIcon,
  leisure: LeisureIcon,
  healt: HealtIcon,
  subscriptions: SubsIcon,
};

const Spent = ({ spent, setSpentEdit, deleteSpent }) => {
  const { category, name, date, id, amount } = spent;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setSpentEdit(spent)}>Edit</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteSpent(id)} destructive={true}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={IconsDictionary[category]} alt="Expense Icon" />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                {"Added in: "}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>

          <p className="cantidad-gasto">${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Spent;
