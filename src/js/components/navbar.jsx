import React from "react";


//create your first component
const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-collapse-sm navbar-light bg-dark center">
  <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
  <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;