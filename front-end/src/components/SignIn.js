import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
        }
        setForm(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
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
            maxLength="30"
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
          <button disabled={!form.username || !form.password}>submit</button>
        </div>
      </div>
    </form>
  );
}
