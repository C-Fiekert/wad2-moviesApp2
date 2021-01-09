import React from "react";
import {withRouter } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import MovieCredits from "../components/movieCredits"
import useActor from "../hooks/useActor";

const ActorPage = props => {
  const { id } = props.match.params;
  const [person] = useActor(id)  // NEW
  return (
    <>
    {person ? (
      <>
        <PageTemplate person={person}>
          <ActorDetails person={person} />
        </PageTemplate>
        <br></br><br></br>
        <div className="row">
          
        </div>
        <br></br><br></br>
        <center><h1 style={{color:"white"}}>Movies Featured in</h1></center>
        <MovieCredits person={person} />
      </>
    ) : (
      <p>Waiting for actor details</p>
    )}
  </>
  );
};

export default withRouter(ActorPage);