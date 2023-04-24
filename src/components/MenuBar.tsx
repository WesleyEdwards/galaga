import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { GameInfo, Page } from "./Types";
import { life_image } from "../utils/images";

interface MenuBarProps {
  exitGame: () => void;
  gameInfo: GameInfo;
}
export const MenuBar: FC<MenuBarProps> = (props) => {
  const { gameInfo } = props;
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <div
        style={{
          width: "12rem",
          display: "flex",
        }}
      >
        {new Array(gameInfo.lives > 0 ? gameInfo.lives - 1 : 0)
          .fill(null)
          .map((_, i) => (
            <img
              src={life_image}
              style={{
                objectFit: "contain",
                imageRendering: "pixelated",
              }}
              alt="heart"
              width="50px"
              height="50px"
              key={i}
            />
          ))}
      </div>
      <Typography>Pause: Esc</Typography>
      <Typography
        variant="h5"
        style={{
          width: "12rem",
          display: "flex",
          justifyContent: "end",
        }}
      >
        score: {gameInfo.score}
      </Typography>
    </Stack>
  );
};
