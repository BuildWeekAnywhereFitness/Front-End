import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mockData } from "./mockData";
import ClassCard from "./ClassCard";

const ClientDash = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [intensitySearch, setIntensitySearch] = useState("");

  return (
    <div>
      <div>
        <Link>My Classes</Link>
        <Link>Upcoming Classes</Link>
      </div>
      <TitleDiv>
        <UpcomingTitle>Upcoming Classes</UpcomingTitle>
      </TitleDiv>
      <form>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(event) => {
            setNameSearch(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Search by intensity..."
          onChange={(event) => {
            setIntensitySearch(event.target.value);
          }}
        ></input>
      </form>
      <BigDiv>
        {mockData
          .filter((value) => {
            if (nameSearch == "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(nameSearch.toLowerCase())
            ) {
              return value;
            }
          })
          .map((event) => (
            <ClassCard data={event} />
          ))}
      </BigDiv>
    </div>
  );
};

const BigDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
`;

const UpcomingTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  text-align: center;
`;
const TitleDiv = styled.div`
  margin: 50px auto 0 auto;
  width: 250px;
  border-bottom: 2px dashed black;
  height: 40px;
`;

export default ClientDash;
