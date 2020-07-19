import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddPizzaForm.css";

export default function AddPizzaForm() {
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [description, set_description] = useState("");
  const [image, set_image] = useState("");

  const submit = (event) => {
    event.preventDefault();

    dispatch({
      type: "ADD_PIZZA",
      payload: {
        id: Math.random(),
        name,
        description,
        image,
      },
    });

    set_name("");
    set_description("");
    set_image("");
  };

  return (
    <div className="pizzaForm">
      <form onSubmit={submit}>
        <h2>Add a new pizza</h2>
        <p>
          <label>
            Name <br />
            <input
              type="text"
              value={name}
              onChange={(e) => set_name(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Image url <br />
            <input
              type="text"
              value={image}
              onChange={(e) => set_image(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Description <br />
            <textarea
              type="tex"
              value={description}
              onChange={(e) => set_description(e.target.value)}
            />
          </label>
        </p>

        <p>
          <button type="submit">Add this pizza!</button>
        </p>
      </form>
    </div>
  );
}
