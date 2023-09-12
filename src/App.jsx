import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import MediaQuery from './context/mediaQuery'

const theme = createTheme();

function App() {
  const isMobile = MediaQuery();
  return (
    <ThemeProvider theme={theme}>
      {isMobile ? <MobileView /> : <DesktopView />}
    </ThemeProvider>
  );
}

export default App;
