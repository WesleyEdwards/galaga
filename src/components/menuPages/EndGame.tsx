import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import {
  addScoreToStorage,
  getScoresFromStorage,
  getStatistics,
} from "../../utils/miscFunctions";
import { GameButton } from "../GameButton";
import { ScreenProps } from "../Types";
import ScreenHeader from "./ScreenHeader";

interface EndGameProps extends ScreenProps {
  win?: boolean;
}

export const EndGame: FC<EndGameProps> = (props) => {
  const { onBack, score, win = false } = props;

  if (score == null || score === undefined) return <>Error retrieving score</>;

  const scores = getScoresFromStorage();
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>();
  const { shotsFired, opponentsHit, hitRatio} = getStatistics();

  const saveScore = () => {
    if (!name) return setError("Please enter a name");
    if (name.length > 20) return setError("Name is too long");

    addScoreToStorage(name, score);
    onBack("highScores");
  };

  return (
    <Stack width="100%" justifyContent="center" gap="2rem">
      <ScreenHeader
        title={win ? "You Win!" : "You Lose"}
        backToMenu={() => onBack("menu")}
      />
      {(() => {
        if (scores.every((s) => s.score > score) && scores.length >= 10) {
          return (
            <>
              <Typography variant="body1" textAlign="center">
                Way to go, You got a score of {score}!
              </Typography>
              <GameButton
                sx={{ alignSelf: "center" }}
                text="Main Menu"
                onClick={() => onBack("menu")}
              />
            </>
          );
        }
        return (
          <>
            <Typography variant="body1" textAlign="center">
              You fired {shotsFired} shots and hit {opponentsHit} opponents for a
              hit ratio of {hitRatio}
            </Typography>
            <Typography variant="body1" textAlign="center">
              You got a high score of {score}! Enter your name below to save it
            </Typography>
            <Stack direction="row" gap="1rem" width="100%">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                variant="outlined"
                onClick={saveScore}
                sx={{ width: "8rem" }}
              >
                Save
              </Button>
            </Stack>

            {error && <Alert severity="error">{error}</Alert>}
          </>
        );
      })()}
    </Stack>
  );
};
