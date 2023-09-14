import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 480,
    marginTop: -4,
    backgroundColor: "#0A0A0A",
  },
  top: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: 375,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 160,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: 160,
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: 160,
    },
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
    display: "inline-flex",
    alignItems: "flex-start",
  },
}));
const Section3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
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
              borderRadius: 20,
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "20px",
              paddingBottom: "20px",
              border: "1px solid #FFF",
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
              borderRadius: 20,
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "20px",
              paddingBottom: "20px",
              border: "1px solid #FFF",
              marginLeft: "20px",
            }}
          >
            For Individuals
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Section3;
