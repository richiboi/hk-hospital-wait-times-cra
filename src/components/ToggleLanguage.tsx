import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type Languages = "eng" | "tc" | "sc";

export default function ToggleLanguage() {
  const [language, setLanguage] = React.useState<Languages>("eng");

  const handleLanguage = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: Languages
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
      <ToggleButton value="eng" aria-label="english">
        English
      </ToggleButton>
      <ToggleButton value="tc" aria-label="chinese traditional">
        繁體
      </ToggleButton>
      <ToggleButton value="sc" aria-label="chinese simplified">
        简体
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
