import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/Consultation/ConsultationModal";
import Homepage from "./pages/HomPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import "./App.css";

const theme = createTheme();

function App() {
  const [page, setPage] = useState("homepage");
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
      <div className="App">
        <Header handleChangePage={handleChangePage} handleOpen={handleOpen} />
        {page === "homepage" ? <Homepage /> : <CaseStudiesPage />}
        <ConsultationModal open={open} handleClose={handleClose} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
