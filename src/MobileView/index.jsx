import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/Consultation/ConsultationModal";
import Homepage from "./pages/HomPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import MenuPage from "./pages/MenuPage";

const MobileView = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMemu = () => {
    setMenuOpen((preState) => !preState);
  };

  return (
    <div className="MobileView" style={{ overflowX: "hidden" }}>
      <Header handleOpenMemu={handleOpenMemu} />
      {menuOpen ? (
        <MenuPage
          handleChangePage={props.handleChangePage}
          handleOpen={props.handleOpen}
        />
      ) : props.page === "homepage" ? (
        <Homepage />
      ) : (
        <CaseStudiesPage />
      )}
      <ConsultationModal open={props.open} handleClose={props.handleClose} />
      {!menuOpen && <Footer />}
    </div>
  );
};

export default MobileView;
