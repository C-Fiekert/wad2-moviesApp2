import React from "react";
import TopRatedCard from "../topRatedCard";
import "./topRatedList.css";

const TopRatedList = ({movies}) => {
  const topRatedCards = movies.map(m => (
    <TopRatedCard key={m.id} movie={m}/>
  ));
  return <div className="row movies bg-info" style={{backgroundColor:"#d20000"}}>{topRatedCards}</div>;
};

export default TopRatedList;