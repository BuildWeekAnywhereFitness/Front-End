import React from "react";
import styled from "styled-components";

const ClassCard = (props) => {
  const { data } = props;

  return (
    <ClassCardStyled>
      {data.intensity.toUpperCase() === "HIGH" ? (
        <HighIntensity>
          <Title>{data.name}</Title>
          <ClassDetails>
            {data.type}//{data.intensity} Intensity
          </ClassDetails>
        </HighIntensity>
      ) : (
        <TitleContainer>
          <Title>{data.name}</Title>
          <ClassDetails>
            {data.type}//{data.intensity} Intensity
          </ClassDetails>
        </TitleContainer>
      )}
      <TopInfo>
        <SeparateInfo>
          <p>
            <BoldSpan>{data.location}</BoldSpan>
          </p>
        </SeparateInfo>
        <SeparateInfo>
          <Paragraph>
            <BoldSpan>Date</BoldSpan> - {data.start}
          </Paragraph>
          <Paragraph>
            <BoldSpan>Duration</BoldSpan> - {data.duration}
          </Paragraph>
        </SeparateInfo>
        <SeparateInfo>
          <Paragraph>
            <BoldSpan>Spots Filled</BoldSpan> - {data.attendees}
          </Paragraph>
          <Paragraph>
            <BoldSpan>Total Spots</BoldSpan> - {data.maxsize}
          </Paragraph>
        </SeparateInfo>
      </TopInfo>
      <BotInfo>
        <Reserve>Reserve Spot</Reserve>
      </BotInfo>
    </ClassCardStyled>
  );
};

const ClassCardStyled = styled.div`
  width: 400px;
  height: 400px;
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 14px -2px rgb(158, 157, 157);
  border-radius: 25px;
  background-color: #f5f5f5;
`;

// HEADER OF CLASS CARDS
const TitleContainer = styled.div`
  //base styling. dynamic.
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110px;
  background: linear-gradient(0.45turn, #6cb2a0, #468677);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
const HighIntensity = styled(TitleContainer)`
  background: linear-gradient(0.45turn, #ff6978, #ff1f35);
`;
const Title = styled.h2`
  font-weight: 900;
  color: white;
`;
const ClassDetails = styled.p`
  margin-top: -15px;
  color: white;
`;

// REST OF THE INFO STYLING
const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const SeparateInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  font-weight: 400;
`;
const BoldSpan = styled.span`
  font-weight: 700;
`;
const Paragraph = styled.p`
  width: 125px;
`;

// RESERVE BUTTON STYLING
const BotInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Reserve = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 20px;
  background: linear-gradient(0.45turn, #00a3cc, #00627a);
  height: 60px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

export default ClassCard;
