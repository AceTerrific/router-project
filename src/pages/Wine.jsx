import { Suspense } from "react";
import { Await, NavLink, defer, useLoaderData } from "react-router-dom";

function Wine() {
  const items = useLoaderData();
  console.log(items);
  return (
    <>
      <ul className="drinks-item">
        <Suspense fallback={<>Loading data...</>}>
          <Await
            resolve={items}
            errorElement={<>Could not load services data</>}
          >
            {(items) =>
              items.res.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.wine} />
                  <h3>{item.wine}</h3>
                  <p>
                    <strong>Winery:</strong> {item.winery}
                  </p>
                  <NavLink to={`${item.id}`}>See Details</NavLink>
                </li>
              ))
            }
          </Await>
        </Suspense>
      </ul>
    </>
  );
}

export default Wine;

export const wineLoader = async () => {
  const res = await fetch("https://api.sampleapis.com/wines/reds").then((res) =>
    res.json()
  );

  return defer({ res });
};
