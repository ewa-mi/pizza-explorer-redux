import React from "react";
import "./App.css";
import PizzaList from "./components/PizzaList";
import AddPizzaForm from "./components/AddPizzaForm.js";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;
