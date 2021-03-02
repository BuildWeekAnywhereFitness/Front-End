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
