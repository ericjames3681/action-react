import React, { Component } from "react";
import "./App.css";
import SearchMovies from "./SearchMovies.jsx";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">A C T I O N !</h1>

        <br />
        <SearchMovies />
      </div>
    );
  }
}

export default App;
