import React from "react";
import { useSelector } from "react-redux";
import "./PizzaList.css";

const selectUser = (reduxState) => {
  return reduxState.user;
};

// const selectPizzas = (reduxState) => {
//   return reduxState.pizzas;
// };

const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.length;
};

const selectPopularPizzas = (reduxState) => {
  return reduxState.pizzas.slice().sort((a, b) => {
    return b.bought - a.bought;
  });
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const numberOfPizzas = useSelector(selectNumberOfPizzas);
  const popularPizzas = useSelector(selectPopularPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <ul>
        {popularPizzas.map((pizza) => {
          return (
            <div className="singlePizza">
              <strong>{pizza.name}</strong>
              <li>{pizza.description}</li>
              <li>{pizza.bought} times bought</li>
            </div>
          );
        })}
      </ul>
      <p>Number of pizzas: {numberOfPizzas}</p>
    </div>
  );
}
