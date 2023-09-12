import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ConsultationModal from "./component/Consultation/ConsultationModal";
import Homepage from "./page/Hompage";
import CaseStudiesPage from "./page/CaseStudiesPage";
import "./App.css";

const theme = createTheme();

function App() {
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
