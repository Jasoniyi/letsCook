import React, { Component } from "react";

import axios from "../apis/axios";
import { Link } from "react-router-dom";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const KEY = "8428474eaa924204b81ceacde40a5feb";

    const responce = await axios.get("/search", {
      params: {
        app_id: "1e813a2f",
        app_key: KEY,
        q: title,
        to: 36
      }
    });

    console.log(responce.data.hits[0]);

    this.setState({
      activeRecipe: responce.data.hits[0]
    });
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 ? (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.recipe.image}
              alt={recipe.label}
            />
            <h3 className="active-recipe__label">{recipe.recipe.label}</h3>
            <h2 className="active-recipe__time">{`Time to cook: ${recipe.recipe.totalTime} minutes`}</h2>
            <h4 className="active-recipe__ingredients">
              Ingredients:{" "}
              {recipe.recipe.ingredientLines.map((item, i) => (
                <ul key={i} className="list-group list-ingredients">
                  <li className="list-group-item">{item}</li>
                </ul>
              ))}
            </h4>
            <h4 className="active-recipe__health-label">
              Health Label:
              {recipe.recipe.healthLabels.map((label, i) => (
                <ul key={i} className="list-group list-ingredients">
                  <li className="list-group-item list-group-item-warning">
                    {label}
                  </li>
                </ul>
              ))}
            </h4>
            <div class="list-group visit">
              Please Visit For more info
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={recipe.recipe.shareAs}
                className="list-group-item list-group-item-action text-break"
              >
                {recipe.recipe.shareAs}
              </a>{" "}
            </div>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        ) : (
          <div className="loading spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
