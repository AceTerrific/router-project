import { NavLink, useLoaderData } from "react-router-dom";

function DetailedCocktail() {
  const data = useLoaderData();
  const gettingIngredient = () => {
    let string = "";
    let meas = "";
    let ingredient = [];
    for (let i = 1; i <= 15; i++) {
      string = "strIngredient" + i;
      meas = "strMeasure" + i;
      if (data[string] !== null) {
        ingredient.push(data[string] + " - " + data[meas]);
      }
    }
    return ingredient;
  };
  let dataIngredient = gettingIngredient();

  return (
    <div className="detailed-drinks">
      <h3>{data.strDrink}</h3>
      <div>
        <img src={data.strDrinkThumb} alt={data.strDrink}></img>
        <p>{data.strInstructions}</p>
        <ul>
          <h4>Ingredients</h4>
          {dataIngredient.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
          <br />
          <NavLink to="/alcohol/cocktail"> &lt;--- go back</NavLink>
        </ul>
      </div>
    </div>
  );
}

export default DetailedCocktail;

export const drinkLoaderDetail = async ({ params }) => {
  const index = params.index;
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  ).then((res) => res.json());

  return res.drinks[index];
};
