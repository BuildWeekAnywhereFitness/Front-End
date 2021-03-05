import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ClassCard from "./ClassCard";
import styled from "styled-components";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";

const ClientClass = (props) => {
  const { addToReservedClasses, fitnessClasses, setFitnessClasses } = props;
  const [selectClass, setSelectClass] = useState([]);
  const params = useParams();
  const { push } = useHistory();

  let id = 1;
  let calcId = id + Number(params.id);

  const saveClass = (e) => {
    e.preventDefault();
    addToReservedClasses(selectClass);
    push("/client-dash");

    // API ISN'T READY FORT THIS PART, THAT's WHY ITS COMMENTED
    //   axiosWithAuth()
    //     .post(`/api/attending/${params.id}`)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  };
  const fetchClasses = (id) => {
    axiosWithAuth()
      .get(`/api/classes/${id}`)
      .then((res) => {
        setSelectClass(res.data);
        const filteredClasses = fitnessClasses.filter(
          (value) => res.data.id !== value.id
        );
        setFitnessClasses(filteredClasses);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchClasses(params.id);
  }, []);

  return (
    <div>
      <CardDiv>
        <HomeLink to="/client-dash">Home</HomeLink>
        <Question>Is this the class you'd like to reserve?</Question>
        <ClassCard data={selectClass} />
        <ReserveButton onClick={saveClass}>Reserve Class</ReserveButton>
      </CardDiv>
    </div>
  );
};

const CardDiv = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ReserveButton = styled.div`
  background: linear-gradient(0.45turn, #00a3cc, #00627a);
  width: 125px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  cursor: pointer;
`;
const Question = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: -15px 0 75px 0;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 2px;
  background: linear-gradient(0.45turn, #6cb2a0, #468677);
  width: 75px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-family: "Roboto", sans-serif;
`;

// BLUE:    DARK #00627A  LIGHT #00A3CC
export default ClientClass;
