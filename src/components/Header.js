import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="">
    <h1>Players Management Admin</h1>
    <div className="navlinks">
      <NavLink to="/" className="link" activeClassName="active" exact>
        Players List
      </NavLink>
      <NavLink to="/add" className="link" activeClassName="active">
        Add Player
      </NavLink>
    </div>
  </header>
);

export default Header;
