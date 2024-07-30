import { useState } from "react";
import { array } from "./App";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handlerSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handlerSubmit}>
      <h3>what do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
      >
        {array.map((val) => {
          return (
            <option value={val} key={val}>
              {val}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          return setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
