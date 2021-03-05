import "./App.css";

import React, { useState } from "react";
import { Route } from "react-router-dom";

//General Imports
import Signin from "./components/SignIn";
import SignUp from "./components/SignupForm";
import HomePage from "./components/HomePage";
//Instructor Imports
import InstructorWalkthrough from "./components/instructorComponents/InstructorWalkthrough";
import InstDash from "./components/instructorComponents/InstDash";
import InstClass from "./components/instructorComponents/InstClass";
import InstUpdateClass from "./components/instructorComponents/InstUpdateClass";
import InstAddClass from "./components/instructorComponents/AddClass";
import InstPrivateRoute from "./components/instructorComponents/InstPrivateRoute";

//Client imports
import ClientWalkthrough from "./components/clientComponents/ClientWalkthrough";
import ClientDash from "./components/clientComponents/ClientDash";
import ClientClass from "./components/clientComponents/ClientClass";
import CancelClass from "./components/clientComponents/CancelClass";
import ClientPrivateRoute from "./components/clientComponents/ClientPrivateRoute";

function App() {
  // CLIENT SIDE STATE
  const [fitnessClasses, setFitnessClasses] = useState([]); // API CLASSES
  const [clientClasses, setClientClasses] = useState([]); // SAVED CLASSES
  // Instructor STATE
  const [instClasses, setInstClasses] = useState([]); //Inst API CLASSES
  const [savedClasses, setSavedClasses] = useState([]); //Inst SAVED CLASSES

  const addToReservedClasses = (reservation) => {
    setClientClasses([...clientClasses, reservation]);
  };

  const addToInstClasses = (newClass) => {
    setSavedClasses([...savedClasses, newClass]);
  };

  return (
    <div>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
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

      <Route path="/inst-walk" component={InstructorWalkthrough}></Route>

      <InstPrivateRoute
        exact
        path="/inst-dash"
        component={InstDash}
        instClasses={instClasses}
        setInstClasses={setInstClasses}
        savedClasses={savedClasses}
        setSavedClasses={setSavedClasses}
      />

      <InstPrivateRoute
        path="/instructor-class/:id"
        component={InstClass}
        addToInstClasses={addToInstClasses}
        instClasses={instClasses}
        setSavedClasses={setSavedClasses}
        setInstClasses={setInstClasses}
      />

      <InstPrivateRoute
        path="/update-class/:id"
        component={InstUpdateClass}
        setSavedClasses={setSavedClasses}
        savedClasses={savedClasses}
        instClasses={instClasses}
        setInstClasses={setInstClasses}
      />

      <InstPrivateRoute
        path="/add-class"
        component={InstAddClass}
        setInstClasses={setInstClasses}
      />
    </div>
  );
}

export default App;
