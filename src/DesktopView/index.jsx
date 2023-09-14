import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/Consultation/ConsultationModal";
import Homepage from "./pages/HomePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";

const DesktopView = (props) => {
  return (
    <div className="DesktopView">
      <Header
        handleChangePage={props.handleChangePage}
        handleOpenModal={props.handleOpenModal}
      />
      {props.page === "homepage" ? (
        <Homepage
          handleOpenModal={props.handleOpenModal}
          handleChangeInvesterType={props.handleChangeInvesterType}
          investerType = {props.investerType}
        />
      ) : (
        <CaseStudiesPage />
      )}
      <ConsultationModal open={props.open} handleClose={props.handleClose} />
      <Footer />
    </div>
  );
};

export default DesktopView;
