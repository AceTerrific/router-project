import { NavLink, useLoaderData } from "react-router-dom";

function Cocktail() {
  const items = useLoaderData();
  return (
    <>
      <ul className="drinks-item">
        {items.drinks.map((item, index) => (
          <li key={item.idDrink}>
            <img src={item.strDrinkThumb} alt={item.strDrink} />
            <h3>{item.strDrink}</h3>
            <p>{item.strInstructions}</p>
            <NavLink to={`${index}`}>See Details</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cocktail;

export const drinkLoader = async () => {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );
  return res.json();
};
