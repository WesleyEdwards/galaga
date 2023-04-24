import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Container } from "@mui/material";
import GalagaHeader from "./components/GalagaHeader";
import { GameEntry } from "./components/GameEntry";
import { useEffect, useRef, useState } from "react";
import { CANVAS_WIDTH } from "./game/helpers/constants";
import { MenuBar } from "./components/MenuBar";
import { enterGamePlay } from "./game/main";
import { emptyGameFunctions } from "./game/helpers/utils";
import { asyncFetchGameContent, life_image } from "./utils/images";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [attractMode, setAttractMode] = useState<boolean>();
  const [refresh, setRefresh] = useState(0);
  const [gameContent, setGameContent] = useState<HTMLImageElement | null>(null);
  const [lives, setLives] = useState(3);
  const audioPlayingRef = useRef(false);
  const playingRef = useRef(false);

  const handleKeyDown = () => {
    setRefresh((refresh) => refresh + 1);
    if (audioPlayingRef.current === true) return;
    playAudio();
    audioPlayingRef.current = true;
  };

  const handleMouseDown = () => {
    setRefresh((refresh) => refresh + 1);
  };

  const possiblyAttract = () => {
    if (playingRef.current) return;
    const content: HTMLImageElement = gameContent as HTMLImageElement;
    setTimeout(() => {
      enterGamePlay(
        {
          gameContent: content,
          decrementLife: () => setLives((prev) => prev - 1),
          ...emptyGameFunctions,
        },
        true
      );
    }, 30);
  };

  function playAudio() {
    const audio = new Audio("/assets/backgroundAudio.mp3");
    audio.loop = true;
    audio.volume = 0.1;
    audio.play().catch(() => (audioPlayingRef.current = false));
  }

  useEffect(() => {
    if (playingRef.current) return;
    if (attractMode) return;
    const cleanup = setTimeout(() => {
      if (playingRef.current) return;
      setAttractMode(true);
      possiblyAttract();
    }, 10_000);

    return () => clearTimeout(cleanup);
  }, [attractMode]);

  useEffect(() => {
    window.addEventListener("click", handleKeyDown);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousemove", handleMouseDown);
    return () => {
      window.removeEventListener("click", handleKeyDown);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousemove", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    if (attractMode === true) {
      window.location.reload();
    }
  }, [refresh]);

  useEffect(() => {
    asyncFetchGameContent().then((content) => {
      setGameContent(content);
    });
  }, []);
  useEffect(() => {
    if (lives === 0) {
      window.location.reload();
    }
  }, [lives]);

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
              <div id="empty-root"></div>
              {new Array(lives > 0 ? lives - 1 : 0).fill(null).map((_, i) => (
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
