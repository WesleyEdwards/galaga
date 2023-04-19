import { Card, CardContent, Container, Stack } from "@mui/material";
import React, { FC, useState } from "react";
import { GameButton } from "./GameButton";
import About from "./menuPages/About";
import Help from "./menuPages/Help";
import Settings from "./menuPages/Settings";
import { HighScores } from "./menuPages/HighScores";
import { WinScreen, LoseScreen } from "./menuPages/WinLoseScreens";
import { MenuButton, Page, ScreenProps } from "./Types";

type GalagaMenuProps = {
  startPlay: () => void;
  initialPage?: Page;
  score: number;
};

type InfoPages = Exclude<Page, "menu" | "newGame">;

const RenderMap: Record<InfoPages, FC<ScreenProps>> = {
  highScores: HighScores,
  help: Help,
  about: About,
  settings: Settings,
  lose: LoseScreen,
  win: WinScreen,
};

export const GalagaMenu: FC<GalagaMenuProps> = (props) => {
  const { startPlay, score, initialPage = "menu" } = props;

  const [selected, setSelected] = useState<Page>(initialPage);

  const menuButtons: MenuButton[] = [
    { text: "New Game", onClick: startPlay },
    { text: "High Scores", onClick: () => setSelected("highScores") },
    { text: "Help", onClick: () => setSelected("help") },
    { text: "About", onClick: () => setSelected("about") },
    { text: "Settings", onClick: () => setSelected("settings") },
  ];

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          {selected === "menu" && (
            <Stack
              height="16rem"
              justifyContent="space-evenly"
              alignItems="center"
            >
              {menuButtons.map((menuButton) => (
                <GameButton
                  key={menuButton.text}
                  onClick={menuButton.onClick}
                  text={menuButton.text}
                />
              ))}
            </Stack>
          )}

          {Object.keys(RenderMap).map((key) => {
            const RenderComponent = RenderMap[key as InfoPages];
            if (selected === key) {
              return (
                <RenderComponent key={key} onBack={setSelected} score={score} />
              );
            }
          })}
        </CardContent>
      </Card>
    </Container>
  );
};

export default GalagaMenu;
