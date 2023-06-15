interface PizzaCardProps {
  pizza: {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
  };
}
const PizzaCard = ({ pizza }: PizzaCardProps) => {
  return (
    <li className="pizza">
      <img src={`/assets/${pizza.photoName}`} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
        <span className="sold-out">{pizza.soldOut}</span>
      </div>
    </li>
  );
};

export default PizzaCard;
