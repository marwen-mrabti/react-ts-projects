import { PizzaList } from "./components";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Pizza Menu</h1>
      </header>
      <div className="menu">
        <h2>pizza pizza</h2>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone
          oven, all organic, all delicious.
        </p>
        <PizzaList />
      </div>
      <footer className="footer">
        <div className="order">
          <p>we're open until 23:00. Come and visit us or order online</p>
          <button className="btn">Order now</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
