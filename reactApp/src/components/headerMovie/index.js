import React from "react";
import "../../globals/fontawesome";
import { Header } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const MovieHeader = ({ movie }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <Header as='h2' style={{color:"white"}}>
          <Header.Content>{movie.title}</Header.Content>
          <a href={movie.homepage}>
            <Icon name='home' />
          </a>
        </Header>
      </div>
    </div>
  );
};

export default MovieHeader;