import React from "react";
import LoginHeader from '../headerLogin'
import LoginForm from '../loginForm'
import SignUpForm from '../signUpForm'
//import "./moviePage.css";
import { Image } from 'semantic-ui-react'

const TemplateLoginPage = () => {
  return (
    <>
      <center>
      <LoginHeader />
      <br></br><br></br><br></br><br></br><br></br>
      <div className="row">
        <div className="col-4">
          <LoginForm />
        </div >
        <div className="col-4">
          <Image src="../Youre-Almost-There.jpg" size='massive'></Image>
          {/* <Icon name='sign-in' size='massive'/> */}
        </div>
        <div className="col-4">
          <SignUpForm />
        </div>
      </div>
      </center>
    </>
  );
};

export default TemplateLoginPage;