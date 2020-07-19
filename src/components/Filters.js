import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Filters({ filters, set_filters }) {
  const ingredients = ["mozzarella", "garlic", "basil", "tomatoes"];

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <form>
            {ingredients.map((ingredient) => (
              <div className="checkbox" key={ingredient}>
                <label>
                  <input
                    type="checkbox"
                    value={ingredient}
                    onChange={() => {
                      if (filters.includes(ingredient)) {
                        const newFilters = filters.filter(
                          (filter) => filter !== ingredient
                        );

                        set_filters(newFilters);
                      } else {
                        const newFilters = [...filters];
                        newFilters.push(ingredient);

                        set_filters(newFilters);
                      }
                    }}
                  />
                  {ingredient}
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}
