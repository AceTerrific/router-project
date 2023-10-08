import { Outlet, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

function ProjectLayout() {
  const location = useLocation();
  return (
    <div>
      <header className="tab">
        <NavLink to="cocktail">Cocktail</NavLink>
        <NavLink to="wine">Wine</NavLink>
      </header>
      <main>
        <span className="breadcrumbs">{location.pathname}</span>
        <br />
        <br />
        <Outlet />
      </main>
    </div>
  );
}

export default ProjectLayout;
