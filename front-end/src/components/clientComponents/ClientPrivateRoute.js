import React from "react";
import { Redirect, Route } from "react-router-dom";

function ClientPrivateRoute({
  component: Component,
  clientClasses,
  fitnessClasses,
  setFitnessClasses,
  addToReservedClasses,
  setClientClasses,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return (
            <Component
              clientClasses={clientClasses}
              setClientClasses={setClientClasses}
              fitnessClasses={fitnessClasses}
              setFitnessClasses={setFitnessClasses}
              addToReservedClasses={addToReservedClasses}
            />
          );
        } else {
          return <Redirect to={"/signin"} />;
        }
      }}
    />
  );
}

export default ClientPrivateRoute;
