import React, { FC } from "react";
import { ScreenProps } from "../Types";
import { EndGame } from "./EndGame";

export const WinScreen: FC<ScreenProps> = (props) => (
  <EndGame {...props} win={true} />
);

export const LoseScreen: FC<ScreenProps> = (props) => {
  return <EndGame {...props} win={false} />;
};
