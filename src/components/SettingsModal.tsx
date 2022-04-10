import { Dialog, IconButton } from "@mui/material";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";
import ToggleLanguage from "./ToggleLanguage";
import { translations } from "../utils/translations";
import { useLanguageContext } from "../utils/useLanguageContext";

type Props = {};

const Container = styled.div`
  padding: 1.2em 2em 0.4em 2em;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LanguagePicker = styled.div`
  margin-bottom: 1em;
  width: 100%;
`;

const LanguageText = styled.h3`
  margin-bottom: 0.5em;
`;

const DetailText = styled.p`
  text-align: center;
`;

const SettingsModal = (props: Props) => {
  const { language } = useLanguageContext();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleGithubClick = () => {
    window.open("https://github.com/richiboi");
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <LanguagePicker>
            <LanguageText>{translations.modal.language[language]}</LanguageText>
            <ToggleLanguage />
          </LanguagePicker>
          <DetailText>{translations.modal.warning[language]}</DetailText>
          <IconButton
            aria-label="settings"
            size="large"
            onClick={handleGithubClick}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Container>
      </Dialog>
      <IconButton aria-label="settings" size="large" onClick={handleOpen}>
        <SettingsIcon fontSize="inherit" />
      </IconButton>
    </>
  );
};

export default SettingsModal;
