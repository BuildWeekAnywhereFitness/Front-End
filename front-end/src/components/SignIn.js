import React, { useState, useEffect } from "react";
import formSchema from './formSchema'
import * as yup from 'yup'
import './FormStyling.css'
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialFormValues = { username: "", password: "" };
 const initialDisabled = true
 
export default function Signin() {
  const [form, setForm] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled)
  const { push } = useHistory();

 

  const onChange = (evt) => {
    console.log(evt.target);
    const { checked, type, name, value } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: valueToUse });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };
  useEffect(() => {
    formSchema.isValid(form).then(valid => setDisabled(!valid))
  }, [form])

  return (
    <form className="SignInContainer" onSubmit={onSubmit}>
      <div className="FormGroupInputs">
        <header>
          <h1>Sign In!</h1>
        </header>
                 
        <section className='info'>
          <label className='username'><h4>Username</h4>
                <input className='inputBox'
                   
                    name='username'
                    type='text'
                    onChange={onChange}
                    value={form.username}
                    placeholder='type a username...'
                    maxLength=''
                    />
          </label>
 
          <label className='password'><h4>Password</h4>
                <input className='inputBox'
                    name='password'
                    type='text'
                    onChange={onChange}
                    value={form.password}
                    placeholder='type a password...'
                    maxLength='30'
                    />
          </label>

          <div className='submit'>
            <button className='button' disabled={disabled}>submit</button>
          </div>
        </section>
      </div>
    </form>
  );
}
//
