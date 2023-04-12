import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { FC } from "react";
import { IconButton, Stack, Typography } from "@mui/material";

type ScreenHeaderProps = { title: string; backToMenu: () => void };

export const ScreenHeader: FC<ScreenHeaderProps> = ({ title, backToMenu }) => {
  return (
    <Stack direction="row" justifyContent="space-between" paddingBottom="2rem">
      <IconButton sx={{ alignSelf: "start" }} onClick={backToMenu}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" textAlign="center">
        {title}
      </Typography>
      <div style={{ width: "3rem" }}></div>
    </Stack>
  );
};

export default ScreenHeader;
