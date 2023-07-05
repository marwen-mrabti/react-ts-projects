import React from "react";
interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface FormProps {
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Form = ({ setItems }: FormProps) => {
  const [item, setItem] = React.useState<Item>({
    id: 0,
    description: "",
    quantity: 1,
    packed: false,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleOnAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!item.description) {
      alert("Please enter an item description");
      return;
    }

    setItems((prevItems) => [...prevItems, { ...item, id: prevItems.length + 1 }]);
    setItem({ id: 0, description: "", quantity: 1, packed: false });
  };

  return (
    <form className="add-form" onSubmit={handleOnAddItem}>
      <h3>
        what do you need to pack? <span>🤔</span>
      </h3>
      <select name="quantity" value={item.quantity} onChange={(e) => handleOnChange(e)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="description"
        placeholder="Add an item..."
        value={item.description}
        onChange={(e) => handleOnChange(e)}
      />
      <button type="submit">Add to list</button>
    </form>
  );
};

export default Form;
