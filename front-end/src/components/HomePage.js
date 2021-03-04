import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <NavBar>
        <TopLink to="/signup">Sign Up</TopLink>
        <TopLink to="/login">Log In</TopLink>
      </NavBar>
      <MainContent>
        <Header>
          Welcome to <br />
          <Span>AnywhereFitness</Span>
        </Header>
        <Para>The best place to post and find fitness classes!</Para>
        <StyledLink to="/login">Log In Here</StyledLink>
        <Para2>
          Not with us yet? <StyledLink to="/signup">Sign Up Here</StyledLink>
        </Para2>
      </MainContent>
    </div>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 25px;
  font-family: "Roboto", sans-serif;
  background: linear-gradient(0.45turn, #1f466f, #13293d);
`;

const TopLink = styled(Link)`
  text-decoration: none;
  margin-right: 35px;
  font-weight: 700;
  color: white;
  font-size: 1.2rem;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  background: linear-gradient(0.45turn, #6cb2a0, #468677);
  border-radius: 50px;
  margin: 150px auto;
  color: white;
  width: 400px;
  height: 350px;
`;

const Header = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  padding-top: 30px;
  margin-bottom: 10px;
`;

const Span = styled.span`
  font-weight: 900;
  letter-spacing: 1px;
`;

const Para = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0;
`;

const Para2 = styled(Para)`
  margin-top: 5px;
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 900;
  color: white;
  margin-top: 60px;
`;

export default HomePage;
