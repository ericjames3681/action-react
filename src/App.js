import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import "./App.scss";

import SearchMovies from "./SearchMovies.jsx";

class App extends Component {
  render() {
    return (
      <Container>
        <Header size="huge" className="title">
          . . . A C T I O N !
        </Header>

        <br />
        <br />
        <br />
        <SearchMovies />
      </Container>
    );
  }
}

export default App;
