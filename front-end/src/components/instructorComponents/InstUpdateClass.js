import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

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

const InstUpdateClass = (props) => {
  const { push } = useHistory();
  const [newClass, setNewClass] = useState(initialClass);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://anytimefitnessbuild.herokuapp.com/api/classes/${id}`)
      .then((res) => {
        console.log("Res in add Class");
        setNewClass(res.data);
      })
      .catch((err) => {
        console.log("error getting from api in updateClass:", err);
      });
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
      .put(
        `https://anytimefitnessbuild.herokuapp.com/api/classes/${id}`,
        newClass
      )
      .then((res) => {
        console.log("res when posting new class:", res);
        props.setSavedClasses(
          props.savedClasses.map((item) => {
            if (item.id === res.data.id) {
              return res.data;
            } else {
              return item;
            }
          })
        );
        setNewClass({
          attendees: null,
          classSize: null,
          date: "",
          duration: "",
          id: res.data.length + 1,
          level: "",
          location: "",
          name: "",
          startTime: "",
          type: "",
        });
        push("/inst-dash");
      })
      .catch((err) => {
        console.log("error posting new class:", err);
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
        <label>Class Attendees:</label>
        <input
          name="duration"
          onChange={handleChange}
          type="text"
          value={newClass.attendees}
          placeholder="Number of Attendees"
        ></input>

        <button>Update This Class Here!</button>
      </form>
    </div>
  );
};

export default InstUpdateClass;

// attendees: null,
// classSize: null,
// date: "",
// duration: "",
// id: date.now(),
// level: "",
// location: "",
// name: "",
// startTime: "",
// type: "",
