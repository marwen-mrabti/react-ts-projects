import React from "react";

interface statsProps {
  totalItems: number;
  packedItems: number;
}

const Stats = ({ totalItems, packedItems }: statsProps) => {
  return (
    <footer className="stats">
      <em>
        💼 You have {totalItems} items on your list, and you already packed {packedItems}
      </em>
    </footer>
  );
};

export default Stats;
