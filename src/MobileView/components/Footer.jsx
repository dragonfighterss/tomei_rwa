import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";

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
    marginLeft: 22,
    marginTop: 30,
  },
  span2: {
    fontFamily: "Rand",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: 0.22,
    marginLeft: 22,
    marginTop: 23,
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.span1}>A Jiritsu Product</div>
        <div className={classes.span2}>
          All Rights Reserved. Tomei RWA 2023
        </div>
      </Container>
    </div>
  );
};

export default Footer;
