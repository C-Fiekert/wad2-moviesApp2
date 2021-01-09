import React from "react";
import Actor from "../actorCard/";
import "./actorList.css";

const ActorList = ({persons}) => {
  const actorCards = persons.map(p => (
    <Actor key={p.id} person={p} />
  ));
  return <div className="row movies bg-info" style={{backgroundColor:"#d20000"}}>{actorCards}</div>;
};

export default ActorList;