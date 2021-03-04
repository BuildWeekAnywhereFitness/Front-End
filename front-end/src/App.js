import "./App.css";

import React, { useState } from "react";
import { Route } from "react-router-dom";
import ClientPrivateRoute from "./components/clientComponents/ClientPrivateRoute";
//General Imports
import Signin from "./components/SignIn";
import SignUp from "./components/SignupForm";
import HomePage from "./components/HomePage";
//Instructor Imports
import InstructorWalkthrough from "./components/instructorComponents/InstructorWalkthrough";
import InstructorDash from "./components/instructorComponents/InstDash";
import InstClass from "./components/instructorComponents/InstClass";
import InstUpdateClass from "./components/instructorComponents/InstUpdateClass";
import InstAddClass from "./components/instructorComponents/AddClass";

//Client imports
import ClientWalkthrough from "./components/clientComponents/ClientWalkthrough";
import ClientDash from "./components/clientComponents/ClientDash";
import ClientClass from "./components/clientComponents/ClientClass";
import CancelClass from "./components/clientComponents/CancelClass";

function App() {
  // CLIENT SIDE STATE
  const [fitnessClasses, setFitnessClasses] = useState([]); // API CLASSES
  const [clientClasses, setClientClasses] = useState([]); // SAVED CLASSES
  // Instructor STATE
  const [instClasses, setInstClasses] = useState([]);
  const [savedClasses, setSavedClasses] = useState([]);

  const addToReservedClasses = (reservation) => {
    setClientClasses([...clientClasses, reservation]);
  };

  const addToInstClasses = (reservation) => {
    setSavedClasses([...savedClasses, reservation]);
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

      <Route
        path="/inst-dash"
        component={InstructorDash}
        instClasses={instClasses}
        setInstClasses={setInstClasses}
        savedClasses={savedClasses}
        setSavedClasses={setSavedClasses}
      />

      <Route
        path="/instructor-class/:id"
        component={InstClass}
        addToInstructorClasses={addToInstClasses}
        instClasses={instClasses}
        setSavedClasses={setSavedClasses}
      ></Route>

      <Route
        path="/update-class/id"
        component={InstUpdateClass}
        setSavedClasses={setSavedClasses}
        savedClasses={savedClasses}
      ></Route>

      <Route path="/add-class" component={InstAddClass}>
        setInstClasses={setInstClasses}
      </Route>
    </div>
  );
}

export default App;
