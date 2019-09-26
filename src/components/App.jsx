import React, { Component } from "react";
import "./App.css";

import axios from "../apis/axios";
import Form from "./Form";
import RecipeItem from "./RecipeItem";
import Logo from "../assets/logo.png";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipes = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;

    const KEY = "8428474eaa924204b81ceacde40a5feb";
    const responce = await axios.get("/search", {
      params: {
        app_id: "1e813a2f",
        app_key: KEY,
        q: recipeName,
        to: 36
      }
    });

    console.log(responce.data.hits);

    this.setState({
      recipes: responce.data.hits
    });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  componentDidMount = () => {
    const recipes = JSON.parse(localStorage.getItem("recipes"));

    this.setState({
      recipes
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            className="logo"
            style={{
              background: `url(${Logo}) no-repeat`,
              width: "70px",
              height: "70px",
              backgroundSize: "contain",
              position: "absolute",
              left: "3%",
              top: "0.8em"
            }}
          />
          <h1 className="App-title">
            Lets' Cook!!!
            <div className="logo" />
          </h1>
        </header>

        <Form getRecipe={this.getRecipes} />
        <RecipeItem recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
