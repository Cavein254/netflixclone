import React from "react";
import { FaqsContainer } from "../containers/faq";
import { Feature } from "../components";
import { FeatureContainer } from "../containers/feature";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home({ children, ...restProps }) {
  console.log(Feature);
  return (
    <>
      <HeaderContainer>
        <FeatureContainer />
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
