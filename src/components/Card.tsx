import React from "react";
import { MdMap } from "react-icons/md";
import styled from "styled-components";
import { Hospital } from "../../shared/types";
import Ring from "./Ring";
import { useLanguageContext } from "../utils/useLanguageContext";

type Props = {
  data: Hospital;
  distance: number;
};

const Card = styled.div`
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  margin-bottom: 24px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocationInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const HospitalName = styled.h2`
  font-size: 1.2em;
`;

const Distance = styled.p`
  font-size: 1em;
  margin: 0 7px;
`;

const District = styled.p`
  font-size: 0.9em;
`;

export default function HospitalCard({ data, distance }: Props) {
  const { language } = useLanguageContext();

  const getDistanceText = () => {
    if (distance < 100) return distance.toFixed(2);
    else if (distance < 1000) return distance.toFixed(0);
    return Math.floor(distance / 1000) + "k ";
  };

  return (
    <Card>
      <div>
        <HospitalName>{data.name[language]}</HospitalName>
        <LocationInfoWrapper>
          <MdMap size={20} />
          <Distance>{getDistanceText()}km</Distance>
          <District>{data.region[language]}</District>
        </LocationInfoWrapper>
      </div>
      <Ring time={data.waitTimeValue} />
    </Card>
  );
}
