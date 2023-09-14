import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import MediaQuery from "./context/mediaQuery";

const theme = createTheme();

function App() {
  const isMobile = MediaQuery();
  const [page, setPage] = useState("caseStudiesPage");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (nextPage) => {
    setPage(nextPage);
  };
  return (
    <ThemeProvider theme={theme}>
      {isMobile ? (
        <MobileView
          handleChangePage={handleChangePage}
          handleClose={handleClose}
          handleOpen={handleOpen}
          page={page}
          open={open}
        />
      ) : (
        <DesktopView
          handleChangePage={handleChangePage}
          handleClose={handleClose}
          handleOpen={handleOpen}
          page={page}
          open={open}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
