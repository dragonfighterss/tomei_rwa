import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 375,
    backgroundColor: "#0A0A0A",
  },
  title: {
    color: "#fff",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Rand",
    fontSize: 50,
    fontStyle: "normal",
    fontWeight: 250,
    lineHeight: "56.667px",
    letterSpacing: -1.6,
    textTransform: "capitalize",
    width: 230,
    paddingTop: 110,
    paddingLeft:15
  },
});
const Section1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.title}>Case Studies</div>
      </Container>
    </div>
  );
};

export default Section1;
