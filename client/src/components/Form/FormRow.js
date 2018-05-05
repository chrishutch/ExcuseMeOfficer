import React from "react";

export const FormRow = ({ fluid, children }) => (
  <div className={`form-row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);