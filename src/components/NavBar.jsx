import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="alcohol">Drinks</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
