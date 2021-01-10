import React, {useContext, useState } from "react";
import "./loginForm.css";
import { Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

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
    <input id="username" placeholder="Username" onChange={e => {setUserName(e.target.value); }}></input>
    <br/>
    <input id="password" type="password" placeholder="Password" onChange={e => {setPassword(e.target.value); }}></input>
    <br/>
    {/* Login web form  */}
    <button onClick={login}>Login</button>
    </>
  );
};

export default withRouter(LoginForm);