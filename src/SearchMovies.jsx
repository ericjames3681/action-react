import React from "react";

export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting...");
    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=81658f5acccfefd659f27ef7b3ee3c9d&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="ex: Jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
