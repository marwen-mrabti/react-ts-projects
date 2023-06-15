import { pizzaData } from "../data";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  console.log(pizzaData);
  return (
    <ul className="pizzas">
      {pizzaData.map((pizza, index) => (
        <PizzaCard key={index} pizza={pizza} />
      ))}
    </ul>
  );
};

export default PizzaList;
