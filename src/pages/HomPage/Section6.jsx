// import React from "react";
// // import { ReactComponent as Icon1 } from "../../assets/images/Layer_1.svg";
// // import { ReactComponent as Icon2 } from "../../assets/images/Group_11042.svg";
// // import { Divider, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     height: 1150,
//     backgroundColor: "#000",
//   },
// //   top: {
// //     paddingTop: 120,
// //     paddingLeft: 160,
// //   },
// //   title: {
// //     color: "#fff",
// //     fontFamily: "Rand",
// //     fontSize: 16.5,
// //     fontStyle: "normal",
// //     fontWeight: 500,
// //     lineHeight: "150%",
// //     letterSpacing: 0.33,
// //     textTransform: "capitalize",
// //   },
// //   bottom: {
// //     paddingTop: 81,
// //     paddingLeft: 160,
// //     display: "inline-flex",
// //     alignItems: "flex-start",
// //   },
// //   content: {
// //     color: "#FAFAFA",
// //     fontFamily: "Rand",
// //     fontSize: 17.5,
// //     fontStyle: "normal",
// //     fontWeight: 400,
// //     lineHeight: "150%",
// //     letterSpacing: 0.35,
// //     paddingLeft: 50,
// //     width: 285,
// //   },
// //   line: {
// //     background: "#FFF",
// //     width: 0.638,
// //     height: 80,
// //   },
// //   icon: {
// //     paddingRight: 50,
// //   },
// //   block: {
// //     width: 566,
// //     height: 80,
// //     display: "inline-flex",
// //     alignItems: "flex-start",
// //     paddingRight: 73.59,
// //   },
// });
// const Section6 = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       {/* <div className={classes.top}>
//         <div style={{ width: "585px" }}>
//           <span className={classes.title}>Strategic investors</span>
//         </div>
//       </div>
//       <div className={classes.bottom}>
//         <div className={classes.block}>
//           <Icon1 className={classes.icon} />
//           <Divider className={classes.line} />
//           <Typography className={classes.content}>
//             Susquehanna Private Equity Investments, LLLP
//           </Typography>
//           <div />
//         </div>
//         <div className={classes.block}>
//           <Icon2 className={classes.icon} />
//           <Divider className={classes.line} />
//           <Typography className={classes.content}>
//             Republic Capital, the worlds largest private marketplace with 2.5M
//             users
//           </Typography>
//           <div />
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Section6;

import React from 'react';
import HorizontalSwiper from '../../components/HorizontalSwiper';
import AppContent from '../../components/AppContent';

function Section6() {
  return (
    <div className="App">
      <HorizontalSwiper>
        <AppContent />
      </HorizontalSwiper>
    </div>
  );
}

export default Section6;