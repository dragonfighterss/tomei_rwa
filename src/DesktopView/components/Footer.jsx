import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    background: "#000000",
    color: "white",
    height: 120,
    justifyContent: "center",
    textAlign: "center",
  },
  span1: {
    position: "absolute",
    fontFamily: "Rand",
    fontSize: 17.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: 0.35,
    left: 0,
    marginTop: 54,
    marginLeft: 60,
  },
  span2: {
    fontFamily: "Rand",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: 0.22,
    marginTop: 69,
  },
  rightSpan: {
    display: "flex",
    textAlign: "center",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <span className={classes.span1}>A Jiritsu Product</span>
      <div className={classes.rightSpan} sx={{ textAlign: "center", m: 1 }}>
        <span className={classes.span2}>
          All Rights Reserved. Tomei RWA 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;
