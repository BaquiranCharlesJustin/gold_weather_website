import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul className="flex justify-center gap-4 text-cyan-100">
          <li>
            <Link to="/">Logout</Link>
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
