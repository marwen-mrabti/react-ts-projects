import React from "react";

interface ControlsProps {
  totalSteps: number;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

export default function Controls({ totalSteps, active, setActive }: ControlsProps) {
  return (
    <div className="buttons">
      <button
        disabled={active === 1}
        style={{ backgroundColor: "#7950f2", color: " #f2f2f2" }}
        onClick={() => setActive((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        prev
      </button>
      <button
        disabled={active === totalSteps}
        style={{ backgroundColor: "#7950f2", color: " #f2f2f2" }}
        onClick={() => setActive((prev) => (prev < totalSteps ? prev + 1 : prev))}
      >
        next
      </button>
    </div>
  );
}
