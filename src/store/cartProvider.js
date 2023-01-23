import CartContext from "./cartContext";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state , action) => {
    if(action.type === "ADD"){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
  const addItemtoCartHandler = (item) => {
    dispatchCartAction({type: "ADD", item: item});
  };

  const removeItemfromCartHandler = (id) => {
    dispatchCartAction({type: "REMOVE", item: item});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemfromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
