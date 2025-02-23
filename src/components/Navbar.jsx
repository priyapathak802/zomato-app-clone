import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ openLogin, openRegister }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-danger fw-bold" href="#">ZOMATO</a>
        <div>
          <button className="btn btn-outline-light me-2" onClick={openLogin}>
            Login
          </button>
          <button className="btn btn-outline-light" onClick={openRegister}>
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
