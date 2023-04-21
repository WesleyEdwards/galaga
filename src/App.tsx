import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Container } from "@mui/material";
import GalagaHeader from "./components/GalagaHeader";
import { GameEntry } from "./components/GameEntry";
import { useEffect, useRef, useState } from "react";
import { CANVAS_WIDTH } from "./game/helpers/constants";
import { MenuBar } from "./components/MenuBar";
import { fetchImage } from "./utils/miscFunctions";
import { enterGamePlay } from "./game/main";
import { emptyGameFunctions } from "./game/helpers/utils";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [attractMode, setAttractMode] = useState<boolean>();
  const playingRef = useRef(false);
  const [refresh, setRefresh] = useState(0);

  const handleKeyDown = () => {
    playAudio();
    setRefresh((refresh) => refresh + 1);
  };

  const possiblyAttract = () => {
    if (playingRef.current) return;
    fetchImage().then((image) => {
      enterGamePlay({ bgImage: image, ...emptyGameFunctions }, true);
    });
  };

  function playAudio() {
    const audio = new Audio("/assets/backgroundAudio.mp3");
    audio.loop = true;
    audio.volume = 0.1;
    audio.play();
  }

  useEffect(() => {
    if (playingRef.current) return;
    if (attractMode) return;
    const cleanup = setTimeout(() => {
      if (playingRef.current) return;
      setAttractMode(true);
      possiblyAttract();
    }, 5000);

    return () => {
      clearTimeout(cleanup);
    };
  }, [attractMode]);

  useEffect(() => {
    window.addEventListener("click", handleKeyDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("keydown", playAudio);
    };
  }, []);

  useEffect(() => {
    if (attractMode === true) {
      window.location.reload();
    }
  }, [refresh]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ pt: "4rem" }}>
        <GalagaHeader />
        {attractMode === true ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: `${CANVAS_WIDTH}px` }}>
              {attractMode && <div id="empty-root"></div>}
              <MenuBar
                exitGame={() => {
                  setAttractMode(false);
                }}
                gameInfo={{
                  lives: 2,
                  score: 0,
                }}
              />
            </div>
          </div>
        ) : (
          <GameEntry
            setPlaying={(playing: boolean) => {
              playingRef.current = playing;
            }}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
