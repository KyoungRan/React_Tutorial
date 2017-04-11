import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about/kyoungran" className="item" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/posts" className="item" activeClassName="active">
        Posts
      </NavLink>
      <NavLink to="/me" className="item" activeClassName="active">
        MyPage
      </NavLink>
      <NavLink to="/login" className="item" activeClassName="active">
        LogIn
      </NavLink>
      <NavLink to="/search" className="item" activeClassName="active">
        Search
      </NavLink>
    </div>
  );
};

export default Header;
