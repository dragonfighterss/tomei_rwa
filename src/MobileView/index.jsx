import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/Consultation/ConsultationModal";
import Homepage from "./pages/HomPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import MenuPage from "./pages/MenuPage";

const MobileView = () => {
  const [page, setPage] = useState("homepage");
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (nextPage) => {
    setPage(nextPage);
  };

  const handleOpenMemu = () => {
    setMenuOpen((preState) => !preState);
  };

  return (
    <div className="MobileView" style={{ overflowX: "hidden" }}>
      <Header handleOpenMemu={handleOpenMemu} />
      <MenuPage />
      {/* {page === "homepage" ? <Homepage /> : <CaseStudiesPage />}
      <ConsultationModal open={open} handleClose={handleClose} /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default MobileView;
