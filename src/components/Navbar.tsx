export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-gradient">
        <a className="navbar-brand " href="/home">
          <img
            src="https://www.freepnglogos.com/uploads/cleveland-auto-show-car-logo-png-25.png"
            width="80"
            height="50"
            className="d-inline-block "
            alt="CarRental Logo"
          />
        </a>
        <a className="navbar-brand navbar-car-brand" href="/home">
          CarRental
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
                <a className="nav-link exp" href="/home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item exp">
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>
              <li className="nav-item exp">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
