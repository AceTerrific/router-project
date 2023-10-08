import { useLoaderData } from "react-router";
import { NavLink } from "react-router-dom";

function WineDetails() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="detailed-wine">
      <h3>{data.wine}</h3>
      <div>
        <img src={data.image} alt={data.wine}></img>
        <p>{data.winery}</p>
        <p>
          <strong>Location: </strong>
          {data.location}
        </p>
        <p>
          <strong>Rating:</strong> {data.rating.average}
        </p>
        <p>
          <strong>Reviews:</strong> {data.rating.reviews}
        </p>

        <NavLink to="/alcohol/wine"> &lt;--- go back</NavLink>
      </div>
    </div>
  );
}

export default WineDetails;

export const wineLoaderDetail = async ({ params }) => {
  const id = params.id;
  const wineDetail = await fetch("https://api.sampleapis.com/wines/reds/" + id);

  return wineDetail.json();
};
