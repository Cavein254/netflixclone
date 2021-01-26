import React from "react";
import Feature from "../components/feature";
import { OptFormContainer } from "../containers/optform";

export function FeatureContainer({ children, ...restProps }) {
  return (
    <Feature>
      {children}
      <Feature.Title>Unlimited films, TV programmes and more...</Feature.Title>
      <Feature.SubTitle>Watch Anywhere. Cancel anytime</Feature.SubTitle>
      <OptFormContainer />
    </Feature>
  );
}
