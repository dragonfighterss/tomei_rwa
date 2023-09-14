import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 480,
    backgroundColor: "#0A0A0A",
  },
  top: {
    paddingTop: 110,
    paddingLeft: 34,
  },
  content: {
    color: "#fff",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "140%",
  },
  bottom: {
    paddingTop: 60,
    paddingLeft: 33,
  },
});
const Section3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <span className={classes.content}>
          Learn More About Investing with RWA
        </span>
      </div>
      <div className={classes.bottom}>
        <Button
          sx={{
            display: "flex",
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Rand",
            fontSize: 22,
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "150%",
            letterSpacing: 0.44,
            borderRadius: 5,
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingTop: "20px",
            paddingBottom: "20px",
            border: "1px solid #FFF",
            width: 315,
          }}
        >
          For Institutions
        </Button>
        <Button
          sx={{
            display: "flex",
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Rand",
            fontSize: 22,
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "150%",
            letterSpacing: 0.44,
            borderRadius: 5,
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingTop: "20px",
            paddingBottom: "20px",
            border: "1px solid #FFF",
            marginTop: "20px",
            width: 315,
          }}
        >
          For Individuals
        </Button>
      </div>
    </div>
  );
};

export default Section3;
