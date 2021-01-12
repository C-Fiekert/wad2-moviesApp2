import React, {useContext, useState } from "react";
import "./loginForm.css";
import { Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Input, Button, Icon} from 'semantic-ui-react';

const LoginForm = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  const { from } = props.location.state || { from: { pathname: "/" } };
  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
    <h2>Login</h2>
    <Input focus id="username" placeholder="Username" onChange={e => {setUserName(e.target.value); }}></Input>
    <br/><br/>
    <Input focus id="password" type="password" placeholder="Password" onChange={e => {setPassword(e.target.value); }}></Input>
    <br/><br/>
    {/* Login web form  */}
    <Button className="ui button" animated='vertical' color="yellow" onClick={login}>
      <Button.Content hidden><Icon name='angle double right' /></Button.Content>
      <Button.Content visible>
        Login
      </Button.Content>
    </Button>
    </>
  );
};

export default withRouter(LoginForm);