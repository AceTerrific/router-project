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
import Townhouse from "./pages/Townhouse";
import ProjectLayout from "./layouts/ProjectLayout";
import Condominium from "./pages/Condominium";
import Projects from "./pages/Projects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="projects-main" element={<ProjectLayout />}>
        <Route index element={<Projects />} />
        <Route path="townhouse" element={<Townhouse />} />
        <Route path="condominium" element={<Condominium />} />
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
