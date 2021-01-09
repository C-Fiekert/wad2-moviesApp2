import React from "react";
import "./actorFilterControls.css";
import { Input } from 'semantic-ui-react'

const ActorFilter = props => {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <div className="row bg-warning">
      <div className="col-md-12">
        <h4>
          <span>Search for Actor:</span>
          <Input icon='search' placeholder='Actor Name' onChange={handleTextChange}/>
        </h4>
      </div>
    </div>
  );
};

export default ActorFilter;