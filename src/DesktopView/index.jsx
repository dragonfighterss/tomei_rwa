import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/Consultation/ConsultationModal";
import Homepage from "./pages/HomePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";

const DesktopView = () => {
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
    <div className="DesktopView">
        <Header handleChangePage={handleChangePage} handleOpen={handleOpen} />
        {page === "homepage" ? <Homepage /> : <CaseStudiesPage />}
        <ConsultationModal open={open} handleClose={handleClose} />
        <Footer />
    </div>
  );
};

export default DesktopView;