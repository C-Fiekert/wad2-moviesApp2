import React, { useState } from "react";
import ActorHeader from "../headerActorList";
import ActorList from "../actorList";
import ActorFilter from "../actorFilterControls";

const ActorListPageTemplate = ({ persons, name}) => {
  const [nameFilter, setNameFilter] = useState("");
  let displayedActors = persons
    .filter(p => {
      return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      <ActorHeader name={name} numActors={displayedActors.length} />
      <ActorFilter onUserInput={handleChange} numActors={displayedActors.length}/>
      <ActorList
       persons={displayedActors}
      />
    </>
  );
};

export default ActorListPageTemplate ;