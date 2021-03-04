import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ClassCard from "./ClassCard";
import styled from "styled-components";

const CancelClass = (props) => {
  const [currentClass, setCurrentClass] = useState({});
  const { clientClasses } = props;
  const params = useParams();
  const { push } = useHistory();

  const setClass = (id) => {
    setCurrentClass(clientClasses[id]);
  };

  const deleteClass = () => {
    const filteredClasses = clientClasses.filter(
      (value) => value !== currentClass
    );
    props.setClientClasses(filteredClasses);
    push("/client-dash");
  };

  useEffect(() => {
    setClass(params.id);
  }, []);

  return (
    <div>
      <CardDiv>
        <HomeLink to="/client-dash">Home</HomeLink>
        <Question>Are you sure you want to cancel your reservation?</Question>
        <ClassCard data={currentClass} />
        <CancelButton onClick={deleteClass}>Cancel Class</CancelButton>
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

const Question = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
`;

const CancelButton = styled.div`
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

const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: -15px 0 75px 0;
  font-weight: 500;
  background: linear-gradient(0.45turn, #6cb2a0, #468677);
  width: 75px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-family: "Roboto", sans-serif;
`;

export default CancelClass;
