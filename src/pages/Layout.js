import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul className="flex justify-center gap-4 text-cyan-100">
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/blogs">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Different City</Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
