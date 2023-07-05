import React from "react";
import { Form, Logo, PackingList, Stats } from "./components";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = React.useState(initialItems);
  const packedItems = items.filter((item) => item.packed === true);

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats totalItems={items.length} packedItems={packedItems.length} />
    </div>
  );
}

export default App;
