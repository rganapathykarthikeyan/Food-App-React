import React from "react";
import mealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Order React</h1>
        <span className={classes.but}>
        <HeaderCardButton /></span>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Img of meals in table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
