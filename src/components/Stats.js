export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Please Add</em>
      </p>
    );
  const packed = items.filter((item) => {
    return item.packed;
  }).length;
  const avrage = Math.round((packed / items.length) * 100);
  return (
    <footer className="stats">
      {avrage === 100 ? (
        <em>You Got Everything! Ready To Go! 👨🏻‍✈️ </em>
      ) : (
        <em>
          💼you have {items.length} item on yout list , and you already packed{" "}
          {packed}({avrage}%)
        </em>
      )}
    </footer>
  );
}
