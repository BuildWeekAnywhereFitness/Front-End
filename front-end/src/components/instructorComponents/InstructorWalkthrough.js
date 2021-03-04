import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const InstructorWalkthrough = () => {
  return (
    <div>
      <CardWrapper>
        <HeaderWrapper>
          <Header>
            Welcome Back!
            <br />
            <HeaderSpan>AnywhereFitness!</HeaderSpan>
          </Header>
        </HeaderWrapper>
        <ParaWrapper>
          <Para>
            <ParaSpan>AnywhereFitness</ParaSpan> is the all-in-one solution to
            meet your “on-location” fitness class needs. Our goal is to make it
            painless for Instructors and Clients alike to hold and attend
            Fitness classes wherever they might be held.
          </Para>
          <Para2>
            This is your all-in one dashboard were you can add, update, and
            delete classes at your discretion. Using this should help you
            organize and handle all your needs to be a successful instructor!
          </Para2>
          <StyledLink to="/inst-dash">Skip</StyledLink>
        </ParaWrapper>
      </CardWrapper>
    </div>
  );
};

const kf = keyframes`
      100% {
          opacity: 1;
          transform: scale(1);
          transform: translate(0);
      }
  `;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 425px;
  height: 550px;
  margin: 10% auto 0 auto;
  box-shadow: 0px 3px 14px -2px rgb(158, 157, 157);
  border-radius: 25px;
`;

const HeaderWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0.45turn, #6cb2a0, #468677);
  font-family: "Roboto", sans-serif;
  color: white;
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const HeaderSpan = styled.span`
  font-size: 2.1rem;
`;

const Header = styled.h2`
  opacity: 0;
  transform: scale(0.9);
  animation: ${kf} 0.8s forwards;
`;

const ParaWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  font-family: "Roboto", sans-serif;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Para = styled.p`
  width: 85%;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  opacity: 0;
  transform: scale(0.85);
  transform: translate(0, -30px);
  animation: ${kf} 0.8s forwards;
  animation-delay: 0.8s;
`;

const Para2 = styled(Para)`
  animation-delay: 2.3s;
`;

const ParaSpan = styled.span`
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 10px;
  background: linear-gradient(0.45turn, #00a3cc, #00627a);
  height: 30px;
  width: 60px;
  border-radius: 10px;
  animation: ${kf} 0.8s forwards;
  opacity: 0;
  transform: scale(0.8);
  animation-delay: 0.4s;
  transition: 0.5s;
  &:hover {
    transition: 0.3s;
    box-shadow: 0px 1px 5px 1px rgb(188, 187, 187);
  }
`;

export default InstructorWalkthrough;
