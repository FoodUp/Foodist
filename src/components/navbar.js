import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import { connect } from "react-redux";

import {
  nav,
  logo,
  chef,
  basketIcon,
  basket,
  logoLink,
  quantity
} from "../style/components/header.css";

const NavBar = ({ count }) => {
  const displayBasket =
    count > 0 ? (
      <div className={basket}>
        <div className={basketIcon} />
        <div className={quantity}>{count}</div>
      </div>
    ) : (
      <div className={basketIcon} />
    );
  return (
    <nav className={nav}>
      <Link to={process.env.PUBLIC_URL} className={logoLink}>
        <div className={`${logo}`} />
      </Link>
      <SearchBar />
      <Link to="/shoppinglist">{displayBasket}</Link>

      <div className={chef} />
    </nav>
  );
};

const mapStateToProps = state => {
  return { count: state.addedRecipes.length };
};
export default connect(mapStateToProps)(NavBar);
