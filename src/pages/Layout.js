import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-light float-end">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/"><strong>Home</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/allEmployees"><strong>All</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/uploadEmployees"><strong>Upload</strong></Link>
              </li>
            </ul>
          </div>
        </nav>
  
        <Outlet />
      </>
    )
}
export default Layout;