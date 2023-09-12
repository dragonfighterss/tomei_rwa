import React from "react";
import { Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HorizontalSwiper from "../../components/HorizontalSwiper";
import AppContent from "../../components/AppContent";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 1150,
    backgroundColor: "#000",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  block: {
    paddingTop: "5%",
    paddingLeft: "5%",
  },
  title: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 16.5,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: 0.33,
    textTransform: "capitalize",
  },
  subTitle: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%%",
    letterSpacing: 0.38,
    width: 330,
    paddingTop: 49,
  },
  subDescription: {
    color: "#FFF",
    fontFamily: "Rapid ST Trial",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "100%",
    letterSpacing: 0.56,
    paddingTop: 21,
    textTransform: "uppercase",
  },
  line: {
    background: "#FFF",
    width: 1120,
    height: 1,
  },
  content: {
    height: 569,
    paddingBottom: 109,
    paddingTop: 146,
  },
});
const Section6 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.block}>
        <div className={classes.title}>Technology</div>
        <div className={classes.subTitle}>The Power of Programmable ZK</div>
        <div classes={classes.content}>
          <HorizontalSwiper>
            <AppContent />
          </HorizontalSwiper>
        </div>
        <Divider className={classes.line} />
        <div className={classes.subDescription}>
          POWERED BY JIRITSU ZK Nodes
        </div>
      </div>
    </div>
  );
};

export default Section6;

// import React from 'react';
// import HorizontalSwiper from '../../components/HorizontalSwiper';
// import AppContent from '../../components/AppContent';

// function Section6() {
//   return (
//     <div>
//       <HorizontalSwiper>
//         <AppContent />
//       </HorizontalSwiper>
//     </div>
//   );
// }

// export default Section6;