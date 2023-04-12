import { Divider, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { ScreenProps } from "../Types";
import ScreenHeader from "./ScreenHeader";

export const About: FC<ScreenProps> = ({ onBack }) => {
  return (
    <Stack>
      <ScreenHeader title="About" backToMenu={() => onBack("menu")} />
      <Typography variant="body1" textAlign="center" marginBottom={2}>
        Created by: Jared, Landon, and Wesley
      </Typography>
      <Divider sx={{ m: 2 }} />
      <Typography variant="body1" textAlign="center">
        Music by: Kevin MacLeod
      </Typography>
    </Stack>
  );
};

export default About;
