import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Container } from "@mui/material";
import GalagaHeader from "./components/GalagaHeader";
import { GameEntry } from "./components/GameEntry";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  function playAudio() {
    const audio = new Audio("/assets/backgroundAudio.mp3");
    audio.loop = true;
    audio.volume = 0.1;
    audio.play();
    window.removeEventListener("load", playAudio);
    window.removeEventListener("keydown", playAudio);
  }

  window.addEventListener("click", playAudio);
  window.addEventListener("keydown", playAudio);


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ pt: "4rem" }}>
        <GalagaHeader />
        <GameEntry />
      </Container>
    </ThemeProvider>
  );
}

export default App;
