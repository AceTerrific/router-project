import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function ProjectLayout() {
  return (
    <div>
      <tab className="tab">
        <NavLink to="townhouse">Townhouse</NavLink>
        <NavLink to="condominium">Condominium</NavLink>
      </tab>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ProjectLayout;
