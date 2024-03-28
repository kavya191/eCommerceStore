import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Header = () => {
  const cartArray = useSelector((state) => state.cartReducer);
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-secondary fixed-top" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            eCommerce Store
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link to={""} style={{ textDecoration: "none" }}>
                  <a class="nav-link active">
                    Home
                    <span class="visually-hidden">(current)</span>
                  </a>
                </Link>
              </li>

              <Link
                to={"/category"}
                style={{ textDecoration: "none", marginRight: "10px" }}
              >
                <p class="nav-link active" className="text-white me-3">
                  Categories
                  <span class="visually-hidden">(current)</span>
                </p>
              </Link>
              <a className="me-4 text-decoration-none">
                {" "}
                <FaCartShopping className="text-white " />{" "}
                <b>{cartArray.length}</b>
              </a>

              <Link to={"/user"} className="text-decoration-none">
                <p className="text-white  me-3 " type="submit">
                  Users
                </p>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
