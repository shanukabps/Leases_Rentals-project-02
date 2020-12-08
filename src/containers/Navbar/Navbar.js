/**
 * NavBar  functional component
 * Click the Diffrent And Tenants can goto Home page
 * if Stay Home page it not work
 * Always show this Navbar
 */

import React from "react";
import { Link } from "react-router-dom";
/**
 *
 * @ Different and Tenant Link to Home page
 *
 */
function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-light  bg-light">
        <Link className="text-decoration-none  text-sm" to={"/"}>
          <h3 className="text-danger font-weight-bold">: Different</h3>
        </Link>
        <Link
          className="text-decoration-none text-dark font-weight-bold text-sm"
          to={"/"}
        >
          TENANTS
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
