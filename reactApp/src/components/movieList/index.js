import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";

const MovieList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies" style={{backgroundColor:"#d20000"}}>{movieCards}</div>;
};

export default MovieList;