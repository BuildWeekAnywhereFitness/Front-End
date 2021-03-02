<<<<<<< HEAD
import React, { useState } from "react";

const initialFormValues = {
  username: "",
  password: "",
  user: "",
};

export default function Signup() {
  const [form, setForm] = useState(initialFormValues);

  const onChange = (evt) => {
    const { checked, type, name, value } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: valueToUse });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Name
          <input
            name="username"
            type="text"
            onChange={onChange}
            value={form.username}
            placeholder="type a username..."
            maxLength=""
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="text"
            onChange={onChange}
            value={form.password}
            placeholder="type a password..."
            maxLength="30"
          />
        </label>

        <label>
          Client
          <input
            checked={form.user === "client"}
            value="client"
            onChange={onChange}
            name="user"
            type="radio"
          />
        </label>

        <label>
          Instructor
          <input
            checked={form.user === "instructor"}
            value="instructor"
            onChange={onChange}
            name="user"
            type="radio"
          />
        </label>

        <div className="submit">
          <button disabled={!form.username || !form.password || !form.user}>
            submit
          </button>
        </div>
      </div>
    </form>
  );
}
=======
import React, {useState, useEffect} from 'react'
import formSchema from './formSchema'
import * as yup from 'yup'	

const initialFormValues = {
    username: '',
    password: '',
    user: '',
  }
  
  const initialFormErrors = {
    username: '',
    password: '',
    user: '',
  }
  const initialDisabled = true

export default function App() {
	const [form, setForm] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)


    const inputChange = (name, value) => {
        yup.reach(formSchema, name)
          .validate(value)
          .then(() => {setFormErrors({...formErrors, [name]: ''})})
          .catch(err => {setFormErrors({...formErrors, [name]: err.errors[0]})})
        setForm({
          ...form,
          [name]: value
        })
      }

    const onChange = evt => {
        const {name, value} = evt.target
       inputChange(name, value)
    }
 
    const onSubmit = evt => {
        evt.preventDefault()
    }
    useEffect(() => {
        formSchema.isValid(form).then(valid => setDisabled(!valid))
      }, [form])
 
    return  (
       
        <form className='form container' onSubmit={onSubmit}> 
            <div className='form-group inputs'>
                 <div>{formErrors.username}</div>
                 <div>{formErrors.password}</div>
                 <div>{formErrors.user}</div>
                    <label>Name
                    <input
                   
                        name='username'
                        type='text'
                        onChange={onChange}
                        value={form.username}
                        placeholder='type a username...'
                        maxLength=''
                    />
                </label>
 
                <label>Password
                    <input
                        name='password'
                        type='text'
                        onChange={onChange}
                        value={form.password}
                        placeholder='type a password...'
                        maxLength='30'
                    />
                </label>
 
                <label>Client
                <input 
                    checked={form.user === 'client'} 
                    value='client'
			        onChange={onChange}
 			        name='user' 
                    type='radio' />
                </label>
 
                <label>Instructor
                <input 
			        checked={form.user === 'instructor'}
			        value='instructor'
			        onChange={onChange}
                    name='user' 
                    type='radio' />
                </label>
 
                <div className='submit'>
                    <button disabled={disabled}>submit</button>
                </div>
            </div>
        </form>
    )
}
>>>>>>> origin
