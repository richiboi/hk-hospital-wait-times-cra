import React from "react";
import { Hospital } from "../../shared/types";

type Props = {
  data: Hospital;
};

export default function HospitalCard({ data }: Props) {
  return (
    <div>
      <h1>{data.name[0]}</h1>
      {/* <MapIcon fontSize="medium" /> */}
      <h2>4.9km</h2>
      <h3>New Territories</h3>
      <h4>{data.waitTimeValue}</h4>
    </div>
  );
}
