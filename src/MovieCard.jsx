import React from "react";
import "./App.scss";
import { Card, Image } from "semantic-ui-react";

export default function MovieCard({ movie }) {
  return (
    <Card className="card">
      <Image
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{movie.title.toUpperCase()}</Card.Header>
        <br />
        <Card.Meta>RELEASE DATE: {movie.release_date}</Card.Meta>
        <Card.Meta>RATING: {movie.vote_average}</Card.Meta>
        <Card.Description>{movie.overview}</Card.Description>
      </Card.Content>
    </Card>
  );
}
