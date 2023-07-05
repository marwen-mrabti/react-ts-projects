import React from "react";
import PackingItem from "./PackingItem";

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface PackingListProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const PackingList = ({ items, setItems }: PackingListProps) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem key={item.id} item={item} setItems={setItems} />
        ))}
      </ul>
      <div className="actions">
        <select name="" id=""></select>
        <button>clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
