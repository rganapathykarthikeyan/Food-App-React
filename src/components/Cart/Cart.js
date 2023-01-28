import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";

const Cart = (props) => {
  const CartCxt = useContext(CartContext);
  const totalAmount = `$${CartCxt.totalAmount.toFixed(2)}`;
  const hasItems = CartCxt.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    CartCxt.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    CartCxt.addItem({...item, amount: 1});
  };

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {CartCxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
