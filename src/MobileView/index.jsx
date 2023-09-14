import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/Consultation/ConsultationModal";
import Homepage from "./pages/HomPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import MenuPage from "./pages/MenuPage";

const MobileView = (props) => {
  return (
    <div className="MobileView" style={{ overflowX: "hidden" }}>
      <Header handleOpenMemu={props.handleOpenMemu} />
      {props.menuOpen && (
        <MenuPage
          handleChangePage={props.handleChangePage}
          handleOpenModal={props.handleOpenModal}
        />
      )}
      {props.page === "homepage" ? <Homepage /> : <CaseStudiesPage />}
      <ConsultationModal open={props.open} handleClose={props.handleClose} />
      {!props.menuOpen && <Footer />}
    </div>
  );
};

export default MobileView;
