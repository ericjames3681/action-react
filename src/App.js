import React, { Component } from "react";
import "./App.css";
import SearchMovies from "./SearchMovies.jsx";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">E R I C ' S</h1>
        <h1 className="title">M O V I E S</h1>
        <br />
        <SearchMovies />
      </div>
    );
  }
}

export default App;
