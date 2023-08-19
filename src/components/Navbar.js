// import { Vaccines } from "@material-ui/icons";
// import VaccinesIcon from '@mui/icons-material/Vaccines';

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/main" className="nav-logo">
          Drip- Monitor
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
  )
}

export default Navbar