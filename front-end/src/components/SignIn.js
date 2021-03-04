import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./FormStyling.css";
import styled from "styled-components";

const initialFormValues = {
  username: "",
  password: "",
  role: "",
};

export default function Signin() {
  const [form, setForm] = useState(initialFormValues);
  const { push } = useHistory();

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    localStorage.clear();
    axios
      .post("https://anytimefitnessbuild.herokuapp.com/api/auth/login", form)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        if (form.role === "2") {
          push("/client-walk");
        } else if (form.role === "1") {
          push("/inst-walk");
        }
        setForm(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="SignInContainer" onSubmit={onSubmit}>
      <div className="FormContainer">
        <header>
          <h1>Sign In!</h1>
        </header>

        <section className="info">
          <label className="username">
            <h4>Username</h4>
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
            <input
              className="inputBox"
              name="password"
              type="password"
              onChange={onChange}
              value={form.password}
              placeholder="type a password..."
              maxLength="30"
            />
          </label>
          <label>
            Client
            <input
              checked={form.role === "2"}
              value={2}
              onChange={onChange}
              name="role"
              type="radio"
            />
          </label>
          <label>
            Instructor
            <input
              checked={form.role === "1"}
              value={1}
              onChange={onChange}
              name="role"
              type="radio"
            />
          </label>
          <div className="submit">
            <button
              className="button"
              disabled={!form.username || !form.password}
            >
              submit
            </button>
          </div>
          <div>
            <NotWith>
              Not with us? <Link to="/signup">Create an Account</Link>
            </NotWith>
          </div>
        </section>
      </div>
    </form>
  );
}

const NotWith = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: -50px;
  padding: 0 0 20px 0;
`;
//
