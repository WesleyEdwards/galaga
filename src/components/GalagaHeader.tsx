import { Typography } from "@mui/material";
import React, { FC } from "react";

export const GalagaHeader: FC = () => {
  return (
    <Typography
      id="header-title"
      variant="h1"
      textAlign="center"
      width="100%"
      paddingY="2rem"
      color="primary"
    >
      Galaga
    </Typography>
  );
};

export default GalagaHeader;
