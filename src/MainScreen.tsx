import React from "react";
import HospitalCard from "./components/Card";
import { useHospitalDataQuery } from "./utils/updates";
import styled from "styled-components";
import useGeolocation from "react-hook-geolocation";
import { getDistanceFromLatLonInKm } from "./utils/distances";
import SettingsModal from "./components/SettingsModal";
import { translations } from "./utils/translations";
import { useLanguageContext } from "./utils/useLanguageContext";
import { Skeleton } from "@mui/material";

type Props = {};

const RootContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 1.6em;
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
  font-size: 1.7em;
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

const CardList = styled.div`
  margin-bottom: 10px;
`;

const LoadingSkeleton = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1em",
      }}
    >
      <Skeleton sx={{ width: "80%", height: 80 }} />
      <Skeleton variant="circular" width={50} height={50} />
    </div>
  );
};

const MainScreen = (props: Props) => {
  const { language } = useLanguageContext();
  const { longitude, latitude } = useGeolocation();
  const { data: hospitalData, isLoading, isError } = useHospitalDataQuery();

  if (isError) {
    return <div>An error occured</div>;
  }

  return (
    <RootContainer>
      <HeaderContainer>
        <HeaderTextContainer>
          <Title>{translations.header.title[language]}</Title>
          <Subtitle>{translations.header.subtitle[language]}</Subtitle>
          <SubSubtitle>
            {translations.header.subsubtitle[language]}{" "}
            {hospitalData?.apiUpdateTime}
          </SubSubtitle>
        </HeaderTextContainer>
        <SettingsModal />
      </HeaderContainer>
      {isLoading && !hospitalData ? (
        <>
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </>
      ) : (
        <CardList>
          {hospitalData?.waitTimes.map((hospital) => (
            <HospitalCard
              data={hospital}
              distance={getDistanceFromLatLonInKm(
                latitude,
                longitude,
                hospital.latitude,
                hospital.longitude
              )}
              key={hospital.name[0]}
            />
          ))}
        </CardList>
      )}
    </RootContainer>
  );
};

export default MainScreen;
