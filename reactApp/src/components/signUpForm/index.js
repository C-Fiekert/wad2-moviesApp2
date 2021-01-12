import React, { useContext, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import "./signUpForm.css";
import { Input, Button, Icon} from 'semantic-ui-react';

const SignUpForm = props => {
    const context = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);

    const register = () => {
        if (password.length > 0 && password === passwordAgain) {
          context.register(userName, password);
          setRegistered(true);
        }
      }

  const { from } = props.location.state || { from: { pathname: "/" } };
  if (registered === true) {
    return <Redirect to="./loginSignUp" />;
  }
  return (
    <>
    <h2>Sign-Up</h2>
    <Input value={userName} placeholder="Username" onChange={e => {setUserName(e.target.value); }}></Input>
    <br /><br />
    <Input value={password} type="password" placeholder="Password" onChange={e => {setPassword(e.target.value); }}></Input>
    <br /><br />
    <Input value={passwordAgain} type="password" placeholder="Confirm Password" onChange={e => {setPasswordAgain(e.target.value);}}></Input>
    <br /><br />
    {/* Login web form  */}
    <Button className="ui button" animated='vertical' color="yellow" onClick={register}>
      <Button.Content hidden><Icon name='angle double right' /></Button.Content>
      <Button.Content visible>
        Sign-Up
      </Button.Content>
    </Button>
    </>
  );
};

export default withRouter(SignUpForm);