import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    background: "#000000",
    color: "white",
    height: 120,
  },
  span1: {
    fontFamily: "Rand",
    fontSize: 17.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: 0.35,
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
    marginLeft: 30,
    marginTop: 69,
  },
  rightSpan: {
    display: "flex",
    position: "absolute",
    right: 0,
    marginRight: 505,
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <span className={classes.span1}>A Jiritsu Product</span>
      <div className={classes.rightSpan}>
        <span className={classes.span2}>All Rights Reserved</span>
        <span className={classes.span2}>
          Legal copy as needed. lorem upsum dolore set amut.
        </span>
      </div>
    </div>
  );
};

export default Footer;
