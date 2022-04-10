import React from "react";
import styled from "styled-components";
import { Language } from "../utils/const";
import { translations } from "../utils/translations";
import { useLanguageContext } from "../utils/useLanguageContext";

const getRingColor = (time: number) => {
  if (time < 3) {
    return "#3DBD00";
  } else if (time < 5) {
    return "#D09600";
  }
  return "#BD0000";
};

const RingContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: ${(props) => props.color} 7px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.3em;
`;

const WaitTimeValue = styled.h1`
  font-size: 1.3em;
  margin-bottom: -3px;
`;

const HoursText = styled.p``;

type Props = {
  time: number;
};

const Ring = ({ time }: Props) => {
  const { language } = useLanguageContext();

  return (
    <div>
      <RingContainer color={getRingColor(time)}>
        <WaitTimeValue>{time}</WaitTimeValue>
        <HoursText>
          {language === Language.Eng
            ? "hr" + (time > 1 ? "s" : "")
            : translations.hour[language]}
        </HoursText>
      </RingContainer>
    </div>
  );
};

export default Ring;
