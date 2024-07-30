export default function Item({ item, onDeletItem, onPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onPacked(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeletItem(item.id)}>❌</button>
    </li>
  );
}
