import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./App.scss";
import "./module.scss";

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
          Movie Name
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
          Search
        </button>
      </form>
      <br />
      <br />
      <br />
      <Card.Group centered>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Card className="card">
              <Image
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Icon name="video camera" />
                <Card.Header>{movie.title}</Card.Header>
                <Card.Meta>RELEASE DATE: {movie.release_date}</Card.Meta>
                <Card.Meta>RATING: {movie.vote_average}</Card.Meta>
                <Card.Description>{movie.overview}</Card.Description>
              </Card.Content>
            </Card>
          ))}
      </Card.Group>
    </>
  );
}
