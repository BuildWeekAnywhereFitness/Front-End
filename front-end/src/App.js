import React, {useState} from 'react'

import './App.css';
import Form from './SignupForm';
import schema from './formSchema'
import SignIn from './SignIn'


export default function App() {
  

  return (
    <div className="App">

      <div className="container">
        <Form/>
      
      </div>     
    </div>
  );
}