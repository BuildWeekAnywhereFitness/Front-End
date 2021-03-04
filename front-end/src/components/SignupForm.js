import React, { useState, useEffect } from "react";
import formSchema from "./formSchema";
import * as yup from "yup";
import "./FormStyling.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  username: "",
  password: "",
  role: "",
};

const initialFormErrors = {
  username: "",
  password: "",
  role: "",
};
const initialDisabled = true;

export default function SignUp() {
  const [form, setForm] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("https://anytimefitnessbuild.herokuapp.com/api/auth/register", form)
      .then((res) => {
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    formSchema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <div className="FormGroupInputs">
        <header>
          <h1>Sign Up Now!</h1>
        </header>

        <section className="info">
          <label className="username">
            <h4>Username</h4>
            <div>{formErrors.username}</div>
            <input
              className="inputBox"
              name="username"
              type="text"
              onChange={onChange}
              value={form.username}
              placeholder="type a username..."
              maxLength=""
            />
          </label>

          <label className="password">
            <h4>Password</h4>
            <div>{formErrors.password}</div>
            <input
              className="inputBox"
              name="password"
              type="text"
              onChange={onChange}
              value={form.password}
              placeholder="type a password..."
              maxLength="30"
            />
          </label>

          <div>{formErrors.role}</div>
          <section className="roles">
            <h4>Role</h4>

            <label className="labels">
              Client
              <input
                className="client"
                checked={form.role === "2".valueOf()}
                value="2"
                onChange={onChange}
                name="role"
                type="radio"
              />
            </label>
            <label className="labels">
              Instructor
              <input
                className="instructor"
                checked={form.role === "1"}
                value="1"
                onChange={onChange}
                name="role"
                type="radio"
              />
            </label>
          </section>
          <div className="submit">
            <button className="button" disabled={disabled}>
              submit
            </button>
          </div>
        </section>
      </div>
    </form>
  );
}
