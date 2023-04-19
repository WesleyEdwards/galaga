import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { ScreenProps } from "../Types";
import ScreenHeader from "./ScreenHeader";

type controlKey = "left" | "right" | "shoot";

const defaultScheme = {
  left: "ArrowLeft",
  right: "ArrowRight",
  shoot: "Space",
};

export const Settings: FC<ScreenProps> = ({ onBack }) => {
  const [controlScheme, setControlScheme] = useState(defaultScheme);
  const [controlToChange, setControlToChange] = useState<controlKey>("left");
  const [keyToChange, setKeyToChange] = useState<string>(
    "Click to select new key"
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    const controlScheme = localStorage.getItem("controlScheme");
    if (controlScheme) {
      const parsedControlScheme = JSON.parse(controlScheme);
      setControlScheme(parsedControlScheme);
    } else {
      localStorage.setItem("controlScheme", JSON.stringify(defaultScheme));
    }
  }, []);

  function setControl(key: controlKey, value: string) {
    const existingControlScheme = localStorage.getItem("controlScheme");
    if (existingControlScheme) {
      const parsedControlScheme = JSON.parse(existingControlScheme);
      parsedControlScheme[key] = value;
      localStorage.setItem(
        "controlScheme",
        JSON.stringify(parsedControlScheme)
      );
      setControlScheme(parsedControlScheme);
    } else {
      const newScheme = { ...defaultScheme };
      newScheme[key] = value;
      localStorage.setItem("controlScheme", JSON.stringify(newScheme));
      setControlScheme(newScheme);
    }
  }

  function remapButtonClick() {
    setError(false);
    setKeyToChange("Press new key for control");
    const keyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      if (
        e.key === "Escape" ||
        Object.values(controlScheme).includes(e.key) ||
        (Object.values(controlScheme).includes("Space") && e.key === " ")
      ) {
        setError(true);
        setKeyToChange("Invalid Key");
        return;
      }
      if (e.key === " ") {
        setKeyToChange("Space");
      } else {
        setKeyToChange(e.key);
      }
      window.removeEventListener("keydown", keyPress);
    };
    window.addEventListener("keydown", keyPress);
  }

  return (
    <>
      <ScreenHeader title="Settings" backToMenu={() => onBack("menu")} />
      <Stack justifyContent="center" alignItems="center" gap="1rem">
        <Stack direction="row" gap="2rem">
          <Stack direction="column">
            <Typography align="center">Move Left</Typography>
            <Typography align="center">Move Right</Typography>
            <Typography align="center">Shoot</Typography>
          </Stack>
          <Stack direction="column">
            <Typography>-</Typography>
            <Typography>-</Typography>
            <Typography>-</Typography>
          </Stack>
          <Stack direction="column">
            <Typography align="center">{controlScheme.left}</Typography>
            <Typography align="center">{controlScheme.right}</Typography>
            <Typography align="center">{controlScheme.shoot}</Typography>
          </Stack>
        </Stack>
        <FormControl fullWidth sx={{ maxWidth: "12rem" }}>
          <InputLabel>Control to Change</InputLabel>
          <Select
            value={controlToChange}
            label="Control to Change"
            onChange={(e) => setControlToChange(e.target.value as controlKey)}
          >
            <MenuItem value={"left"}>Move Left</MenuItem>
            <MenuItem value={"right"}>Move Right</MenuItem>
            <MenuItem value={"shoot"}>Shoot</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={() => {
            remapButtonClick();
          }}
        >
          {keyToChange}
        </Button>
        <Button
          disabled={
            keyToChange === "Click to select new key" ||
            keyToChange === "Press new key for control" ||
            keyToChange === "Escape" ||
            error
          }
          onClick={() => {
            setControl(controlToChange, keyToChange);
            setKeyToChange("Click to select new key");
          }}
        >
          Remap Selected Control
        </Button>
        <Button
          onClick={() => {
            localStorage.setItem(
              "controlScheme",
              JSON.stringify(defaultScheme)
            );
            setControlScheme(defaultScheme);
          }}
        >
          Reset Controls to Default
        </Button>
      </Stack>
    </>
  );
};

export default Settings;
