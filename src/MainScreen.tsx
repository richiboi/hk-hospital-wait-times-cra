import React from "react";
import HospitalCard from "./components/Card";
import { useHospitalDataQuery } from "./utils/updates";
import styled from "styled-components";
import { MdSettings } from "react-icons/md";

type Props = {};

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1.4em;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;
`;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 3px;
  }
`;

const Title = styled.h1`
  font-size: 2.2em;
`;

const Subtitle = styled.h2`
  font-size: 1em;
  color: #3a3a3a;
  font-weight: 500;
`;

const SubSubtitle = styled.h3`
  font-size: 0.9em;
  color: #6b6b6b;
  font-weight: 200;
`;

const MainScreen = (props: Props) => {
  const { data: hospitalData, isLoading } = useHospitalDataQuery();

  if (isLoading || !hospitalData) {
    return <div>Loading...</div>;
  }

  return (
    <RootContainer>
      <HeaderContainer>
        <HeaderTextContainer>
          <Title>HK Hospitals</Title>
          <Subtitle>Accident & Emergency Wait Times</Subtitle>
          <SubSubtitle> Last update: {hospitalData.apiUpdateTime}</SubSubtitle>
        </HeaderTextContainer>
        <MdSettings size={30} style={{ marginRight: "1em" }} />
      </HeaderContainer>
      <div>
        {hospitalData.waitTimes.map((hospital) => (
          <HospitalCard data={hospital} />
        ))}
      </div>
    </RootContainer>
  );
};

export default MainScreen;
