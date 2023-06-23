import React, { useState } from "react";
import Controls from "./components/Controls";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "travel around the world ✈",
];

function App() {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="close" onClick={() => setOpen((prev) => !prev)}>
        &times;
      </button>
      {!open ? null : (
        <ul className="steps">
          <div className="numbers">
            {messages.map((_, index) => (
              <React.Fragment key={index}>
                <div className={`${active === index + 1 ? "active" : ""}`}>
                  {index + 1}
                </div>
              </React.Fragment>
            ))}
          </div>

          <p className="message">
            step {active}: {messages[active - 1]}
          </p>
          <Controls totalSteps={messages.length} active={active} setActive={setActive} />
        </ul>
      )}
    </>
  );
}

export default App;
