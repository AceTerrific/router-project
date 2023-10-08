import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cocktail, { drinkLoader } from "./pages/Cocktail";
import ProjectLayout from "./layouts/ProjectLayout";
import Wine, { wineLoader } from "./pages/Wine";
import Alcohol from "./pages/Alcohol";
import DetailedCocktail, { drinkLoaderDetail } from "./pages/DetailedCocktail";
import WineDetails, { wineLoaderDetail } from "./pages/WineDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="alcohol" element={<ProjectLayout />}>
        <Route index element={<Alcohol />} />
        <Route path="cocktail" element={<Cocktail />} loader={drinkLoader} />
        <Route
          path="cocktail/:index"
          element={<DetailedCocktail />}
          loader={drinkLoaderDetail}
        />
        <Route path="wine" element={<Wine />} loader={wineLoader} />
        <Route
          path="wine/:id"
          element={<WineDetails />}
          loader={wineLoaderDetail}
        />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
