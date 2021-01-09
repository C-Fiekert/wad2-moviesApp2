import React from "react";
import "../../globals/fontawesome";
import { Header } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const ActorHeader = ({ person }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <Header as='h2' style={{color:"white"}}>
          <Header.Content>{person.name}</Header.Content>
          <a href={person.homepage}>
            <Icon name='home' />
          </a>
        </Header>
      </div>
    </div>
  );
};

export default ActorHeader;