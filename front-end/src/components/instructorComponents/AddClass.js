import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { date } from "yup/lib/locale";

const initialClass = {
  attendees: null,
  classSize: null,
  date: "",
  duration: "",
  id: Math.floor(Math.random() * 100 + 5),
  level: "",
  location: "",
  name: "",
  startTime: "",
  type: "",
};

const InstAddClass = (props) => {
  const { push } = useHistory();
  const [newClass, setNewClass] = useState(initialClass);

  const fetchClasses = () => {
    axios
      .get("https://anytimefitnessbuild.herokuapp.com/api/classes")
      .then((res) => {
        console.log("Res in add Class");
        props.setInstClasses(...props.instClasses, res.data);
      })
      .catch((err) => {
        console.log("error getting from api in updateClass:", err);
      });
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleChange = (e) => {
    setNewClass({
      ...newClass,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://anytimefitnessbuild.herokuapp.com/api/classes", newClass)
      .then((res) => {
        console.log("res when posting:", res);
        fetchClasses();
        setNewClass(initialClass);
        push("/inst-dash");
      })
      .catch((err) => {
        console.log("error posting class:", err);
      });
  };

  return (
    <div className="editClass-container">
      <form onSubmit={handleSubmit}>
        <label>Class Name:</label>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          value={newClass.name}
          placeholder="Enter Class Name"
        ></input>
        <label>Location:</label>
        <input
          name="location"
          onChange={handleChange}
          type="text"
          value={newClass.location}
          placeholder="Enter Location Here"
        ></input>
        <label>Date:</label>
        <input
          name="date"
          onChange={handleChange}
          type="text"
          value={newClass.date}
          placeholder="Enter Date here"
        ></input>
        <label>Starting Time:</label>
        <input
          name="startTime"
          onChange={handleChange}
          type="text"
          value={newClass.startTime}
          placeholder="Enter Time here"
        ></input>
        <label>attendees:</label>
        <input
          name="attendees"
          onChange={handleChange}
          type="number"
          value={newClass.attendees}
          placeholder="Enter Time here"
        ></input>
        <label>Intensity Level:</label>
        <input
          name="level"
          onChange={handleChange}
          type="text"
          value={newClass.level}
          placeholder="Enter Intensity level here"
        ></input>
        <label>Type Of Class:</label>
        <input
          name="type"
          onChange={handleChange}
          type="text"
          value={newClass.type}
          placeholder="Enter type"
        ></input>
        <label>Class Duration:</label>
        <input
          name="duration"
          onChange={handleChange}
          type="text"
          value={newClass.duration}
          placeholder="Enter Class Duration here"
        ></input>
        <label>Max Class Size:</label>
        <input
          name="duration"
          onChange={handleChange}
          type="number"
          value={newClass.classSize}
          placeholder="Class size:"
        ></input>

        <button>Add Class Here!</button>
      </form>
    </div>
  );
};

export default InstAddClass;
