import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constatnts/routes";

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInValid = password === "" || email === "";
  const handleSignIn = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push(ROUTES.BROWSE))
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to NetFlix? <Form.Link to="/signup">Sign Up Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by the Google reCAPTCHA to ensure you're not
            a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
