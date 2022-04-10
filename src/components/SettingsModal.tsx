import { Dialog, IconButton } from "@mui/material";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";
import ToggleLanguage from "./ToggleLanguage";

type Props = {};

const Container = styled.div`
  padding: 2.2em;
  min-width: 250px;
`;

const SettingsModal = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <h3>Language</h3>
          <ToggleLanguage />
          <p>Built using public API Data</p>
          <IconButton aria-label="settings" size="large" onClick={handleOpen}>
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
