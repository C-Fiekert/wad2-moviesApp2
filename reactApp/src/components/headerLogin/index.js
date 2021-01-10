import React from "react";
import "../../globals/fontawesome";
import { Header } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const LoginHeader = () => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <Header as='h1' style={{color:"white"}}>
          <Header.Content>Login/Sign-Up </Header.Content>
          <Icon name='lock' />
        </Header>
      </div>
    </div>
  );
};

export default LoginHeader;