import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-gradient">
        <a className="navbar-brand ">
          <img
            src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png"
            width="80"
            height="50"
            className="d-inline-block "
            alt="CarRental Logo"
          />
        </a>

        <a className="navbar-brand navbar-car-brand">
          <Link className="link-black" to="/vite-carshop/home">
            CarRental
          </Link>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-right-position ">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link exp">
                  <Link className="link-black" to="/vite-carshop/home">
                    Home
                  </Link>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item exp">
                <a className="nav-link">
                  <Link className="link-black" to="/vite-carshop/about">
                    About us
                  </Link>
                </a>
              </li>
              <li className="nav-item exp">
                <a className="nav-link">
                  <Link className="link-black" to="/vite-carshop/contact">
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
