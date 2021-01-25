import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constatnts/routes";
import logo from "../logo.svg";

export default function HeaderContainer({ children, ...restProps }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="NetFlix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
    </Header>
  );
}
