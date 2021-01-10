import React from "react";
import FavoriteWatchCard from "../favoriteWatchCard/";
import "./favoriteWatchList.css";

const FavoriteWatchList = ({movies, review, remove}) => {
  const FavoriteWatchCards = movies.map(m => (
    <FavoriteWatchCard key={m.id} movie={m} review={review} remove={remove} />
  ));
  return <div className="row movies" style={{backgroundColor:"#d20000"}}>{FavoriteWatchCards}</div>;
};

export default FavoriteWatchList;