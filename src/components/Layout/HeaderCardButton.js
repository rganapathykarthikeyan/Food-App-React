import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";

import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cartContext";

const HeaderCardButton = (props) => {

  const [btnHighLighted , isBtnHighLighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const numberofCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnsty = `${classes.button} ${btnHighLighted ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0){
      return;
    }
    isBtnHighLighted(true);

    const timer = setTimeout(() => {
      isBtnHighLighted(false); 
    }, 300);

    return () => {
      clearTimeout(timer); // Clean up function for the timer 
    } 
  }, [items]);

  return (
    <button className={btnsty} onClick={props.onPressed}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
