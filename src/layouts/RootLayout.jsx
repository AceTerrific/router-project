import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
function RootLayout() {
  return (
    <div className="nav-bar">
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
