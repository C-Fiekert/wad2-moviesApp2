import React from "react";
import ActorHeader from '../headerActor'
import "./actorPage.css";
import { Image } from 'semantic-ui-react'

const TemplateActorPage = ({ person, children }) => {
  return (
    <>
      <ActorHeader person={person} />
      <div className="row">
        <div className="col-3">
          <Image
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
            alt={person.name}
            rounded
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateActorPage;