import React from "react";

const Form = ({ getRecipe }) => {
  return (
    <form onSubmit={getRecipe}>
      <input
        placeholder="find Recipe ..."
        name="recipeName"
        type="name"
        className="form__input"
      />
      <button className="form__button">Search</button>
    </form>
  );
};

export default Form;
