import React, { useState, useEffect } from "react";
import formSchema from "./formSchema";
import * as yup from "yup";
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
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.role}</div>
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
            checked={form.role === "2".valueOf()}
            value="2"
            onChange={onChange}
            name="role"
            type="radio"
          />
        </label>

        <label>
          Instructor
          <input
            checked={form.role === "1"}
            value="1"
            onChange={onChange}
            name="role"
            type="radio"
          />
        </label>

        <div className="submit">
          <button disabled={disabled}>Sign-Up</button>
        </div>
      </div>
    </form>
  );
}
