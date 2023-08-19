import React from 'react'
import {NavLink, useParams} from "react-router-dom";
import "./HomeMain.css";
function HomeMain() {
  const {email}= useParams();
  var to="/monitor/"+email;
  return (
    <div className="homemain">
      <div className="wrap1">
        <NavLink
              exact
              to={to}
              activeClassName="active"
              className="rent"
            >
        <button className="btn">Start</button>
            </NavLink>
            <div className="desc">
            Click the above Button Start Monitoring
          </div>
      </div>
    </div>
  )
}

export default HomeMain