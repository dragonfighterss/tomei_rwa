import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const Homepage = (props) => {
  return (
    <div>
      <Section1 handleOpenModal={props.handleOpenModal}/>
      <Section2 />
      <Section3
        handleOpenModal={props.handleOpenModal}
        handleChangeInvesterType={props.handleChangeInvesterType}
        investerType={props.investerType}
      />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default Homepage;
