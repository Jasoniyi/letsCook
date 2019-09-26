import React, { Component } from "react";

import { Link } from "react-router-dom";

class RecipeItem extends Component {
  getrecipeItem = () =>
    this.props.recipes.map((recipe, i) => (
      <div key={i} className="col-md-4">
        <div className="recipes__box">
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <div className="recipes__text">
            <h5 className="recipes__label">
              {recipe.recipe.label.length < 20
                ? `${recipe.recipe.label}`
                : `${recipe.recipe.label.substring(0, 20)}...`}
            </h5>
            <p className="recipes__subtitle">
              DietLabel:
              <span>
                {recipe.recipe.dietLabels.length < 1
                  ? "Unavailable"
                  : `${recipe.recipe.dietLabels}`}
              </span>
            </p>
          </div>
          <button className="recipes__buttons">
            <Link
              to={{
                pathname: `/recipe/${recipe.recipe.label}`,
                state: { recipe: recipe.recipe.label }
              }}
            >
              View Ingredients
            </Link>
          </button>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="container">
        {this.props.recipes.length !== 0 ? (
          <div className="row">{this.getrecipeItem()}</div>
        ) : (
          <div className="loading spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    );
  }
}

export default RecipeItem;
