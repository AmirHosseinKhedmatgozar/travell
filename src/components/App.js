import { useState } from "react";
import "./App.css";
import PackingList from "./PackingList";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
//Array
export const array = Array.from({ length: 20 }, (_, i) => {
  return i + 1;
});

function App() {
  const [items, setItems] = useState([]);
  function handlerItems(item) {
    // setItems((a) => a.push(item));
    setItems((items) => [...items, item]);
  }
  function handlerDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function hadlerCheckPacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function deleteItems() {
    const confirm = window.confirm("Are You Sure?");
    return confirm && setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handlerItems} />
      <PackingList
        items={items}
        onDeletItem={handlerDeleteItem}
        onPacked={hadlerCheckPacked}
        onClearList={deleteItems}
      />
      <Stats items={items} />
    </div>
  );
}
export default App;
