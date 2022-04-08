import { useFirestoreDocumentData } from "@react-query-firebase/firestore";
import React from "react";
import { useHospitalDataQuery } from "./utils/updates";

type Props = {};

const MainScreen = (props: Props) => {
  const { data: hospitalData, isLoading } = useHospitalDataQuery();

  if (isLoading || !hospitalData) {
    return <div>Loading...</div>;
  }

  return <div>{hospitalData.apiUpdateTime}</div>;
};

export default MainScreen;
