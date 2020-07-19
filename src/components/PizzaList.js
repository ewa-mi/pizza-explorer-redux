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

const selectFavorites = (reduxState) => {
  return reduxState.user.favorites;
};

// const selectPizzas = (reduxState) => {
//   return reduxState.pizzas;
// };

// const selectMostBoughtPizza = (reduxState) => {
//   if (reduxState.pizzas.length === 0) {
//     return null;
//   }
//   return reduxState.pizzas.reduce((mostBought, nextPizza) => {
//     return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
//   });
// };

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const numberOfPizzas = useSelector(selectNumberOfPizzas);
  const pizzas = useSelector(selectPizzas);
  // const fav = useSelector(selectFavorites);

  return (
    <div>
      <div className="header">
        <div>
          <h1 className="appName">PIZZA EXPLORER</h1>
        </div>
        <div className="welcomeBack">
          <p>
            Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
          </p>
        </div>
      </div>
      <ul className="pizzasArea">
        {pizzas.map((pizza) => {
          const toggle = () => {
            dispatch({
              type: "TOGGLE_FAVORITE_PIZZA",
              payload: pizza.id,
            });
          };
          return (
            <div key={pizza.id} className="singlePizza">
              <strong className="pizzaName">
                {pizza.name}
                {/* SELECTOR OPTION: */}
                {/* {fav.includes(pizza.id) ? "♥" : "♡"} */}

                {/* NO SELECTOR OPTION */}
                {/* {user.favorites.includes(pizza.id) ? "♥" : "♡"} */}
                <button className="favButton" onClick={toggle}>
                  {user.favorites.includes(pizza.id) ? "♥" : "♡"}
                </button>
              </strong>
              <div>
                <img src={`${pizza.image}`} alt="pizza" className="pizzaImg" />
              </div>
              <p className="descr">{pizza.description}</p>
              <p>{pizza.bought} times bought</p>
            </div>
          );
        })}
      </ul>
      <p>Number of pizzas: {numberOfPizzas}</p>
    </div>
  );
}
