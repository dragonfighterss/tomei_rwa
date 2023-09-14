import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import MediaQuery from "./context/mediaQuery";

const theme = createTheme();

function App() {
  const isMobile = MediaQuery();
  const [page, setPage] = useState("homepage");
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [investerType, setInvesterType] = useState("individual");

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenMemu = () => {
    setMenuOpen((preState) => !preState);
  };

  const handleChangePage = (nextPage) => {
    setMenuOpen(false);
    setPage(nextPage);
  };

  const handleChangeInvesterType = (type) => {
    setInvesterType(type);
  };

  return (
    <ThemeProvider theme={theme}>
      {isMobile ? (
        <MobileView
          handleChangePage={handleChangePage}
          handleClose={handleClose}
          handleOpenModal={handleOpenModal}
          handleOpenMemu={handleOpenMemu}
          handleChangeInvesterType={handleChangeInvesterType}
          investerType={investerType}
          menuOpen={menuOpen}
          page={page}
          open={open}
        />
      ) : (
        <DesktopView
          handleChangePage={handleChangePage}
          handleClose={handleClose}
          handleOpenModal={handleOpenModal}
          handleChangeInvesterType={handleChangeInvesterType}
          investerType={investerType}
          page={page}
          open={open}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
