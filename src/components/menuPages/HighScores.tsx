import { CardActions, Stack, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import {
  getScoresFromStorage,
  removeAllScores,
  ScoreRecord,
} from "../../utils/miscFunctions";
import { GameButton } from "../GameButton";
import { ScreenProps } from "../Types";
import ScreenHeader from "./ScreenHeader";

export const HighScores: FC<ScreenProps> = ({ onBack }) => {
  const [highScores, setHighScores] = useState<ScoreRecord[]>(
    getScoresFromStorage()
  );

  return (
    <Stack>
      <ScreenHeader title="High Scores" backToMenu={() => onBack("menu")} />
      {highScores.length > 0 ? (
        <Stack width="20rem" alignSelf="center">
          {highScores.map((scoreRecord, i) => (
            <Stack key={i} direction="row" justifyContent="space-between">
              <Typography variant="h6" textAlign="center">
                {scoreRecord.name}
              </Typography>
              <Typography key={i} variant="h6" textAlign="center">
                {scoreRecord.score}
              </Typography>
            </Stack>
          ))}
        </Stack>
      ) : (
        <Typography variant="body1" textAlign="center">
          No high scores yet. Start playing to be the first!
        </Typography>
      )}
      <GameButton
        sx={{ mt: 4, alignSelf: "flex-end" }}
        fullWidth
        text="Remove Scores"
        color="error"
        onClick={() => {
          removeAllScores();
          setHighScores([]);
        }}
      />
    </Stack>
  );
};

export default HighScores;
