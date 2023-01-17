import "./App.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, changeshowCart] = useState(false);

  const showCartHandler = () => {
    changeshowCart(true);
  };

  const hideCartHandler = () => {
    changeshowCart(false);
  }

  return (
    <React.Fragment>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header ShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
