import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useLanguageContext } from "../utils/useLanguageContext";
import { Language } from "../utils/const";

export default function ToggleLanguage() {
  const { language, setLanguage } = useLanguageContext();

  const handleLanguage = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: Language
  ) => {
    if (newLanguage !== null) setLanguage(newLanguage);
  };

  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      onChange={handleLanguage}
      aria-label="text alignment"
    >
      <ToggleButton value={Language.Eng} aria-label="english">
        English
      </ToggleButton>
      <ToggleButton value={Language.TC} aria-label="chinese traditional">
        繁體
      </ToggleButton>
      <ToggleButton value={Language.SC} aria-label="chinese simplified">
        简体
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
