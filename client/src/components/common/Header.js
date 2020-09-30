import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="/">ComCore Projects</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <NavLink to="/" activeClassName="nav-item active" exact>
            Home
      </NavLink>
          {" | "}
          <NavLink to="/projects" activeStyle={activeStyle}>
            Projects
      </NavLink>
          {" | "}
          <NavLink to="/analyze" activeStyle={activeStyle}>
            Analyze
      </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
