import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";

import { useContext } from "react";
import CartContext from "../../store/cartContext";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onPressed}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
