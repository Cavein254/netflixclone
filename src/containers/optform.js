import React from "react";
import { OptForm } from "../components";

export function OptFormContainer({ children, ...restProps }) {
  return (
    <OptForm {...restProps}>
      <OptForm.Input placeholder="Email Address" />
      <OptForm.Button>Try it now</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>
        Ready to watch? Enter your Email to create or restart your Membership
      </OptForm.Text>
      {children}
    </OptForm>
  );
}
