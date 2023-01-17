import React from "react";
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to You</h2>
      <p>
        Choose your favorite meals from the broad selection of the available
        options in the menu and enjoy you meal
      </p>
      <p>
        All our meals are cooked with high quality ingredients and experienced
        chefs and with love.
      </p>
    </section>
  );
};

export default MealsSummary;
