import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PizzaList.css";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.length;
};

const selectPizzas = (reduxState) => {
  return reduxState.pizzas.slice().sort((a, b) => {
    return b.bought - a.bought;
  });
};

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const numberOfPizzas = useSelector(selectNumberOfPizzas);
  const pizzas = useSelector(selectPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <ul>
        {pizzas.map((pizza) => {
          const toggle = () => {
            dispatch({
              type: "TOGGLE_FAVORITE_PIZZA",
              payload: pizza.id,
            });
          };
          return (
            <div className="singlePizza">
              <strong>{pizza.name}</strong>
              <li>{pizza.description}</li>
              <li>{pizza.bought} times bought</li>
              <button onClick={toggle}>
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
            </div>
          );
        })}
      </ul>
      <p>Number of pizzas: {numberOfPizzas}</p>
    </div>
  );
}
