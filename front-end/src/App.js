import "./App.css";

import React, { useState } from "react";
import { Route } from "react-router-dom";
import ClientPrivateRoute from "./components/clientComponents/ClientPrivateRoute";

import Signin from "./components/SignIn";
import SignUp from "./components/SignupForm";
import HomePage from "./components/HomePage";

import InstructorWalkthrough from "./components/InstructorWalkthrough";

import ClientWalkthrough from "./components/clientComponents/ClientWalkthrough";
import ClientDash from "./components/clientComponents/ClientDash";
import ClientClass from "./components/clientComponents/ClientClass";
import CancelClass from "./components/clientComponents/CancelClass";

function App() {
  // CLIENT SIDE STATE
  const [fitnessClasses, setFitnessClasses] = useState([]); // API CLASSES
  const [clientClasses, setClientClasses] = useState([]); // SAVED CLASSES
  // CLIENT SIDE STATE

  const addToReservedClasses = (reservation) => {
    setClientClasses([...clientClasses, reservation]);
  };

  return (
    <div>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <ClientPrivateRoute
        exact
        path="/client-walk"
        component={ClientWalkthrough}
      />
      <ClientPrivateRoute
        exact
        path="/client-dash"
        component={ClientDash}
        clientClasses={clientClasses}
        fitnessClasses={fitnessClasses}
        setFitnessClasses={setFitnessClasses}
      />
      <ClientPrivateRoute
        exact
        path="/client-class/:id"
        component={ClientClass}
        addToReservedClasses={addToReservedClasses}
        fitnessClasses={fitnessClasses}
        setFitnessClasses={setFitnessClasses}
      />
      <ClientPrivateRoute
        exact
        path="/client-class-delete/:id"
        component={CancelClass}
        clientClasses={clientClasses}
        setClientClasses={setClientClasses}
      />
    </div>
  );
}

export default App;
