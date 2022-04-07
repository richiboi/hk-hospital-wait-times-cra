import React from "react";
import { WaitTime } from "../types";

type Props = {
  waitTime: WaitTime;
};

export default function Card({ waitTime }: Props) {
  const hours = waitTime.time[1];

  return (
    <div>
      <h1>{waitTime.name}</h1>
      <h3>
        {waitTime.time[0]} {waitTime.time[1]} {hours > 1 ? "hours" : "hour"}{" "}
      </h3>
    </div>
  );
}
