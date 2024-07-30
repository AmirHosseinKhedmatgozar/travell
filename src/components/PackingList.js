import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeletItem,
  onPacked,
  onClearList,
}) {
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") {
    sortedItems = items.slice();
  }
  if (sort === "descriptin") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sort === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              onDeletItem={onDeletItem}
              key={item.id}
              onPacked={onPacked}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          value={sort}
          onChange={(e) => {
            return setSort(e.target.value);
          }}
        >
          <option value="input">sort by input</option>
          <option value="descriptin">sort by descriptin</option>
          <option value="packed">sort by packed</option>
        </select>
        <button
          onClick={() => {
            onClearList();
          }}
        >
          clear list
        </button>
      </div>
    </div>
  );
}
