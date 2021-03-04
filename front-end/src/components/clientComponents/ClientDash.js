import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import ClassCard from "./ClassCard";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";

const initialSearch = {
  name: "",
  time: "",
  duration: "",
  type: "",
  intensity: "",
  location: "",
};

const ClientDash = (props) => {
  const [search, setSearch] = useState(initialSearch);
  const { push } = useHistory();
  const { fitnessClasses, setFitnessClasses, clientClasses } = props;

  const logout = () => {
    localStorage.removeItem("token");
  };

  const getClassList = () => {
    axiosWithAuth()
      .get("/api/classes")
      .then((res) => {
        setFitnessClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClassList();
  }, []);

  return (
    <div>
      <TopContentContainer>
        <LogoutLink to="/signin" onClick={logout}>
          Logout
        </LogoutLink>
        <MyDiv>
          <MyTitle>My Classes (click to cancel)</MyTitle>
        </MyDiv>
        <ContainerClassDiv>
          {clientClasses.map((reservation, index) => {
            return (
              <ClassLink to={`/client-class-delete/${index}`}>
                <MyClassDiv>
                  <h3>{reservation.name}</h3>
                </MyClassDiv>
              </ClassLink>
            );
          })}
        </ContainerClassDiv>
      </TopContentContainer>
      <UpcomingDiv>
        <UpcomingTitle>All Upcoming Classes (click to reserve)</UpcomingTitle>
      </UpcomingDiv>
      <FormStyled>
        <Input
          type="text"
          placeholder="Search by name..."
          onChange={(event) => {
            setSearch({ ...search, name: event.target.value });
          }}
          value={search.name}
        ></Input>
        <Input
          type="text"
          placeholder="start date (d/m/y format)..."
          onChange={(event) => {
            setSearch({ ...search, date: event.target.value });
          }}
          value={search.date}
        ></Input>
        <Input
          type="text"
          placeholder="Search by duration..."
          onChange={(event) => {
            setSearch({ ...search, duration: event.target.value });
          }}
          value={search.duration}
        ></Input>
        <Input
          type="text"
          placeholder="Search by class type..."
          onChange={(event) => {
            setSearch({ ...search, type: event.target.value });
          }}
          value={search.type}
        ></Input>
        <Input
          type="text"
          placeholder="Search by intensity..."
          onChange={(event) => {
            setSearch({ ...search, intensity: event.target.value });
          }}
          value={search.intensity}
        ></Input>
        <Input
          type="text"
          placeholder="Search by location..."
          onChange={(event) => {
            setSearch({ ...search, location: event.target.value });
          }}
          value={search.location}
        ></Input>
      </FormStyled>
      <BigDiv>
        {fitnessClasses
          .filter((value) => {
            // FILTER BY CLASS NAME
            if (search.name === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.name.toLowerCase())
            ) {
              return value;
            }
          })
          .filter((value) => {
            // FILTER BY CLASS START DATE
            if (search.date == null) {
              return value;
            } else if (value.date.includes(search.date)) {
              return value;
            }
          })
          .filter((value) => {
            // FILTER BY CLASS DURATION
            if (search.duration == null) {
              return value;
            } else if (value.duration.includes(search.duration)) {
              return value;
            }
          })
          .filter((value) => {
            // FILTER BY CLASS TYPE
            if (search.type == "") {
              return value;
            } else if (
              value.type.toLowerCase().includes(search.type.toLowerCase())
            ) {
              return value;
            }
          })
          .filter((value) => {
            // FILTER BY INTENSITY LEVEL
            if (search.intensity === "") {
              return value;
            } else if (
              value.level.toLowerCase().includes(search.intensity.toLowerCase())
            ) {
              return value;
            }
          })
          .filter((value) => {
            // FILTER BY CLASS LOCATION
            if (search.location === "") {
              return value;
            } else if (
              value.location
                .toLowerCase()
                .includes(search.location.toLowerCase())
            ) {
              return value;
            }
          })
          .map((event, index) => (
            <ClassLink to={`/client-class/${index}`}>
              <ClassCard data={event} key={index} />
            </ClassLink>
          ))}
      </BigDiv>
    </div>
  );
};

// MY CLASSES STYLES //
// MY CLASSES STYLES //
const LogoutLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  margin-left: 25px;
`;
const ContainerClassDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const MyClassDiv = styled.div`
  width: 300px;
  height: 75px;
  margin: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 14px -2px rgb(48, 47, 47);
  background: linear-gradient(0.45turn, #eff1f3, #c4cbd4);
  color: black;
  border-radius: 25px;
  background-color: #f5f5f5;
`;
const MyTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #eff1f3;
`;
const MyDiv = styled.div`
  width: 350px;
  border-bottom: 2px dashed #eff1f3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 40px;
`;
const TopContentContainer = styled.div`
  padding: 20px 0 20px 0;
  box-sizing: border-box;
  background: linear-gradient(0.45turn, #1f466f, #13293d);
`;

// CARD STYLES/UPCOMING STYLES //
// CARD STYLES/UPCOMING STYLES //
const ClassLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
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
const UpcomingDiv = styled.div`
  margin: 50px auto 0 auto;
  width: 450px;
  border-bottom: 2px dashed black;
  height: 40px;
`;

// FORM STYLING //
// FORM STYLING //
const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 25px;
  background: linear-gradient(0.45turn, #6cb2a0, #468677);
  box-shadow: 0px 3px 10px -2px rgb(108, 107, 107);
  width: 1200px;
  height: 75px;
  border-radius: 25px;
`;

const Input = styled.input`
  width: 180px;
  height: 25px;
  padding-left: 10px;
  font-family: "Roboto", sans-serif;
  border: none;
  border-bottom: 1px solid white;
  border-right: 1px dashed white;
  outline: none;
  background: none;
  caret-color: white;
  color: white;
  font-size: 0.9rem;
  &::placeholder {
    color: white;
  }
`;

export default ClientDash;
