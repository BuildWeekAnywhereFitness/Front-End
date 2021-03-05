import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import InstClassCard from "./InstCard";
import styled from "styled-components";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import axios from "axios";

const InstClass = (props) => {
  const {
    addToInstClasses,
    instClasses,
    setSavedClasses,
    setInstClasses,
  } = props;
  const [currentClass, setCurrentClass] = useState([]);
  const params = useParams();
  const { push } = useHistory();

  // let id = 1;
  // let calcId = id + Number(params.id);

  const saveClass = (e) => {
    e.preventDefault();
    addToInstClasses(currentClass);
    push(`/update-class/${params.id}`);
  };

  const deleteClass = () => {
    axiosWithAuth()
      .delete(`/api/classes/${params.id}`)
      .then((res) => {
        console.log("res in delete:", res);
        const scopedClasses = instClasses.filter((item) => {
          return item.id !== currentClass.id;
        });
        setInstClasses(scopedClasses);
        push("/inst-dash");
      })
      .catch((err) => {
        console.log("error in delete", err);
      });
    push("/inst-dash");
  };

  const getClasses = (id) => {
    axiosWithAuth()
      .get(`/api/classes/${id}`)
      .then((res) => {
        setCurrentClass(res.data);
        const filteredClasses = instClasses.filter(
          (value) => res.data.id !== value.id
        );
        setSavedClasses(filteredClasses);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClasses(params.id);
  }, []);

  return (
    <div>
      <CardDiv>
        <HomeLink to="/inst-dash">Dashboard</HomeLink>
        <Question>What do you want To do With this Class?</Question>
        <InstClassCard data={currentClass} />
        <ReserveButton onClick={saveClass}>Edit</ReserveButton>
        <ReserveButton onClick={deleteClass}>Delete</ReserveButton>
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
export default InstClass;
