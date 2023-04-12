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
