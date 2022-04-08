import React from "react";
import Card from "./components/Card";
import { useHospitalDataQuery } from "./utils/updates";

type Props = {};

const MainScreen = (props: Props) => {
  const { data: hospitalData, isLoading } = useHospitalDataQuery();

  if (isLoading || !hospitalData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div></div>
      <h2>{hospitalData.apiUpdateTime}</h2>
      <div>
        {hospitalData.waitTimes.map((hospital) => (
          <Card data={hospital} />
        ))}
      </div>
    </div>
  );
};

export default MainScreen;
