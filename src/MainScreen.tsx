import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HospitalCard from "./components/Card";
import { useHospitalDataQuery } from "./utils/updates";

type Props = {};

const MainScreen = (props: Props) => {
  const { data: hospitalData, isLoading } = useHospitalDataQuery();

  if (isLoading || !hospitalData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        {/* Replace with Typography */}
        <Box
          sx={{
            fontSize: 35,
            fontWeight: "bold",
          }}
        >
          HK Hospitals
        </Box>
        <Box
          sx={{
            fontSize: 17,
            color: "#6D6D6D",
          }}
        >
          Accident & Emergency Wait Times
        </Box>
        <Box
          sx={{
            fontSize: 14,
            color: "#6D6D6D",
            fontWeight: 200,
          }}
        >
          Last update: {hospitalData.apiUpdateTime}
        </Box>
        <div>
          {hospitalData.waitTimes.map((hospital) => (
            <HospitalCard data={hospital} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MainScreen;
