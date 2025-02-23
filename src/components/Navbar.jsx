import React, { useState } from "react";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // You can integrate actual search functionality here
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white" >
      <div className="container-fluid">
        {/* Logo on the left */}
        <a className="navbar-brand fs-3 fw-light" href="/">
        <span  style={{ color: "orange" }}>Tasty</span>

          <span className="fst-italic">Tales</span>
        </a>

        {/* Centered navigation links */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="/about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="/recipes">
                RECIPES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="/start-here">
                START HERE
              </a>
            </li>
          </ul>
        </div>

        {/* Search bar, Login, and Register on the right */}
        <div className="d-flex align-items-center">
          <form onSubmit={handleSearch} className="d-flex me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-dark ms-2">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <a className="text-dark me-2 fw-bold" href="/login">
            LOGIN
          </a>
          <span className="fw-bold">/</span>
          <a className="text-dark ms-2 fw-bold" href="/register">
            REGISTER
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
