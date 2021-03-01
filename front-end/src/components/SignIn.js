import React, { useState } from 'react'
 
const initialFormValues = {username:'', password:''}
 
export default function Sinein(){
    const [form, setForm] = useState(initialFormValues)
 
 
    const onChange = evt => {
 
        console.log(evt.target)
        const {checked, type, name, value} = evt.target
      const valueToUse = type === 'checkbox' ? checked : value
        setForm({...form, [name]: valueToUse })
    }
 
    const onSubmit = evt => {
        evt.preventDefault()
    }
 
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input
                        name='username'
                        type='text'
                        onChange={onChange}
                        value={form.username}
                        placeholder='type a username...'
                        maxLength='30'
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
 
 
 
                <div className='submit'>
                    <button disabled={!form.username || !form.password}>submit</button>
                </div>
            </div>
        </form>
    )
}