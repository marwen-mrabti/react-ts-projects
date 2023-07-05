import React from "react";

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface PackingItemProps {
  item: Item;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const PackingItem = ({ item, setItems }: PackingItemProps) => {
  const handleToggleItem = () => {
    setItems((prevItems) =>
      prevItems.map((el) => (el.id === item.id ? { ...el, packed: !el.packed } : el))
    );
  };

  const handleDeleteItem = () => {
    setItems((prevItems) => prevItems.filter((el) => el.id !== item.id));
  };

  return (
    <li>
      {item.description} ({item.quantity})
      <input type="checkbox" checked={item.packed} onChange={handleToggleItem} />
      <button onClick={handleDeleteItem}> ❌ </button>
    </li>
  );
};

export default PackingItem;
