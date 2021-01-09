import React, { useContext } from "react";
import PageTemplate from '../components/templateActorListPage'
import {ActorsContext} from '../contexts/actorsContext'

const ActorListPage = () => {
  const context = useContext(ActorsContext);
  const persons = context.persons;

  return (
    <PageTemplate
      name="No. Actors"
      persons={persons}  /* Changed */
    />
  );
};

export default ActorListPage;