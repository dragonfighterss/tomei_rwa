import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 500,
    backgroundColor: "#0A0A0A",
  },
  title: {
    color: "#fff",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Rand",
    fontSize: 80,
    fontStyle: "normal",
    fontWeight: 250,
    lineHeight: "120%",
    letterSpacing: -1.6,
    textTransform: "capitalize",
    width: 230,
    paddingTop: 160,
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
