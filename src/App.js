import "./App.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [showCart, changeshowCart] = useState(false);

  const showCartHandler = () => {
    changeshowCart(true);
  };

  const hideCartHandler = () => {
    changeshowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header ShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
