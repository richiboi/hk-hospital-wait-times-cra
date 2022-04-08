import React from "react";
import { Hospital } from "../../shared/types";

type Props = {
  data: Hospital;
};

export default function Card({ data }: Props) {
  return (
    <div>
      <h1>{data.name[0]}</h1>
      <h3>{data.waitTimeText}</h3>
      <p>{data.address[0]}</p>
    </div>
  );
}
