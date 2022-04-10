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
      <h1>HK Hospitals</h1>
      <h4>Accident & Emergency Wait Times</h4>
      <h5> Last update: {hospitalData.apiUpdateTime}</h5>
      <div>
        {hospitalData.waitTimes.map((hospital) => (
          <HospitalCard data={hospital} />
        ))}
      </div>
    </div>
  );
};

export default MainScreen;
