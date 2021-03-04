import React from "react";
import { Route, Redirect } from "react-router-dom";

const InstPrivateRoute = ({
  component: Component,
  instClasses,
  setInstClasses,
  savedClasses,
  setSavedClasses,
  addToInstClasses,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return (
            <Component
              instClasses={instClasses}
              setInstClasses={setInstClasses}
              savedClasses={savedClasses}
              setSavedClasses={setSavedClasses}
              addToInstClasses={addToInstClasses}
            />
          );
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
};

export default InstPrivateRoute;
