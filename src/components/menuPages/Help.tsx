import { Divider, List, ListItem, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { ScreenProps } from "../Types";
import ScreenHeader from "./ScreenHeader";

export const Help: FC<ScreenProps> = ({ onBack }) => {
  return (
    <Stack>
      <ScreenHeader title="Help" backToMenu={() => onBack("menu")} />
      <Typography variant="h6">Instructions</Typography>
      <Divider sx={{ my: 1 }} />
      <Typography variant="body1" padding={2}>
        Use the left and right arrow keys to move the ship. Avoid the bad guys.
      </Typography>
    </Stack>
  );
};

export default Help;
