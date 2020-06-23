import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Card, Icon } from "semantic-ui-react";
import "./App.scss";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=81658f5acccfefd659f27ef7b3ee3c9d&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          M O V I E &nbsp; N A M E :
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="ex: Star Wars"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          S E A R C H &nbsp; &nbsp;
          <Icon name="video camera" />
        </button>
      </form>
      <br />
      <br />
      <br />
      <Card.Group centered>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </Card.Group>
    </>
  );
}
