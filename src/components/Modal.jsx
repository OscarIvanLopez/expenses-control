import { useState, useEffect } from "react";

import CerrarBtn from "../img/cerrar.svg";

import Message from "../components/Message";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveSpent,
  spentEdit,
  setSpentEdit,
}) => {
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(spentEdit).length > 0) {
      setName(spentEdit.name);
      setAmount(spentEdit.amount);
      setCategory(spentEdit.category);
      setId(spentEdit.id);
      setDate(spentEdit.date);
    }
  }, []);

  const hideModal = () => {
    setAnimateModal(false);
    setSpentEdit({});

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, amount, category].includes("")) {
      setMessage("All fields are required");

      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    saveSpent({ name, amount, category, id, date });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Close button" onClick={hideModal} />
      </div>

      <form
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend className="modal-legend">
          {spentEdit.name ? "Edit Expense" : "New Expense"}
        </legend>
        {message && <Message type="error">{message}</Message>}

        <div className="campo">
          <label htmlFor="name">Expense Name</label>
          <input
            id="name"
            type="text"
            placeholder="Add the Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Add the Amount. Ex. 300"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="select">-- Select</option>
            <option value="saving">-- Saving</option>
            <option value="food">-- Food</option>
            <option value="house">-- House</option>
            <option value="expense">-- Various Expenses</option>
            <option value="leisure">-- Leisure</option>
            <option value="healt">-- Healt</option>
            <option value="subscriptions">-- Subscriptions</option>
          </select>
        </div>

        <input
          type="submit"
          value={spentEdit.name ? "Save Changes" : "Add Expense"}
        />
      </form>
    </div>
  );
};

export default Modal;
