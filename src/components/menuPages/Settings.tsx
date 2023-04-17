import {
  Button,
  Dialog,
  Divider,
  FormControl,
  InputLabel,
  ListItem,
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
  left: "Left Arrow",
  right: "Right Arrow",
  shoot: "Space",
};

export const Settings: FC<ScreenProps> = ({ onBack }) => {
  const [controlScheme, setControlScheme] = useState(defaultScheme);
  const [controlToChange, setControlToChange] = useState<controlKey>(
    "left"
  );
  const [keyToChange, setKeyToChange] = useState<string>("Change Key");

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
    const controlScheme = localStorage.getItem("controlScheme");
    if (controlScheme) {
      const parsedControlScheme = JSON.parse(controlScheme);
      parsedControlScheme[key] = value;
      localStorage.setItem(
        "controlScheme",
        JSON.stringify(parsedControlScheme)
      );
    } else {
      defaultScheme[key] = value;
      localStorage.setItem("controlScheme", JSON.stringify(defaultScheme));
    }
  }

  return (
    <Stack>
      <ScreenHeader title="Settings" backToMenu={() => onBack("menu")} />
      <Typography variant="body1" textAlign="center">
        Move Left - {controlScheme.left}
      </Typography>
      <Typography variant="body1" textAlign="center">
        Move Right - {controlScheme.right}
      </Typography>
      <Typography variant="body1" textAlign="center">
        Shoot - {controlScheme.shoot}
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Control</InputLabel>
        <Select
          value={controlToChange}
          label="Control"
          onChange={(e) => setControlToChange(e.target.value as controlKey)}
        >
          <MenuItem value={"left"}>Left</MenuItem>
          <MenuItem value={"right"}>Right</MenuItem>
          <MenuItem value={"shoot"}>Shoot</MenuItem>
        </Select>
      </FormControl>
        <Button
            onClick={() => {
                setKeyToChange("Press a key");
                const keyPress = (e: KeyboardEvent) => {
                    setKeyToChange(e.key);
                    window.removeEventListener("keydown", keyPress);
                };
                window.addEventListener("keydown", keyPress);
            }}
        >
            {keyToChange}
        </Button>
        <Button onClick={() => {
            setControl(controlToChange, keyToChange)
            setKeyToChange("Change Key");
        }}> 
            Remap Selected Control
        </Button>
    </Stack>
  );
};

export default Settings;
