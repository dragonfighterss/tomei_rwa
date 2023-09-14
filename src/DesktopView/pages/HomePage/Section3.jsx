import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/Group_11083.svg";
import { makeStyles } from "@mui/styles";
import { Button, Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 800,
    display: "inline-flex",
    alignItems: "flex-start",
    flexGrow: 1,
  },
  left: {
    width: "50%",
    height: 800,
    backgroundColor: "#0A0A0A",
  },
  right: {
    width: "50%",
    height: 800,
    backgroundColor: "#141414",
    boxSizing: "content-box",
  },
  title: {
    color: "#FFF",
    fontFamily: "Rand",
    fontSize: 16.5,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: 0.33,
    textTransform: "capitalize",
  },
  titleBg: {
    width: "100%",
    paddingTop: 140,
    float: "right", 
  },
  content1: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    letterSpacing: 0.38,
    opacity: 0.3,
  },
  content2: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    letterSpacing: 0.38,
    paddingLeft: 19,
  },
  content1_bg: {
    paddingTop: 175,
    paddingBottom: 28,
  },
  description: {
    [theme.breakpoints.up("sm")]: {
      color: "#fff",
      fontFamily: "Rand",
      fontSize: 22,
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "150%",
      letterSpacing: 0.44,
      width: 242,
      height: 165,
      paddingTop: 140,
      paddingLeft: 73,
    },
    [theme.breakpoints.up("md")]: {
      color: "#fff",
      fontFamily: "Rand",
      fontSize: 22,
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "150%",
      letterSpacing: 0.44,
      width: 381,
      height: 165,
      paddingTop: 140,
      paddingLeft: 73,
    },
    [theme.breakpoints.up("lg")]: {
      color: "#fff",
      fontFamily: "Rand",
      fontSize: 22,
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "150%",
      letterSpacing: 0.44,
      width: 421,
      height: 165,
      paddingTop: 140,
      paddingLeft: 73,
    },
    [theme.breakpoints.up("xl")]: {
      color: "#fff",
      fontFamily: "Rand",
      fontSize: 22,
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "150%",
      letterSpacing: 0.44,
      width: 421,
      height: 165,
      paddingTop: 140,
      paddingLeft: 73,
    },
  },
  list: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 16.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "220%",
    letterSpacing: 0.165,
  },
  listGroup: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 69,
      paddingTop: 195,
      marginBottom: 53,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 69,
      paddingTop: 70,
      marginBottom: 73,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 69,
      paddingTop: 60,
      marginBottom: 73,
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: 69,
      paddingTop: 60,
      marginBottom: 73,
    },
  },
}));
const Section3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div
          className={classes.titleBg}
          style={{ maxWidth: "600px"}}
        >
          <Container maxWidth="lg">
            <span className={classes.title}>Tomei creates liquidity</span>
            <div className={classes.content1_bg}>
              <span className={classes.content1}>Institutional Investors</span>
            </div>
            <div>
              <Icon />
              <span className={classes.content2}>Individual Investors</span>
            </div>
          </Container>
        </div>
      </div>
      <div className={classes.right}>
        <div style={{ maxWidth: "600px" }}>
          <div className={classes.description}>
            For individual investors Tomei unlocks the power of elite
            investments: Tokenization shatters the high barriers to entry for
            alternative investment avenues such as real-estate, private equity,
            art, and commodities.
          </div>
          <div className={classes.listGroup}>
            <li className={classes.list}>Diversification</li>
            <li className={classes.list}>Inflation Protection</li>
            <li className={classes.list}>High Return Potential</li>
            <li className={classes.list}>Accessibility and Liquidity</li>
            <li className={classes.list}>Stable Value</li>
          </div>
          <Button
            sx={{
              display: "block",
              color: "white",
              textAlign: "center",
              fontFamily: "Rand",
              fontSize: 16.5,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "150%",
              letterSpacing: 0.33,
              textTransform: "capitalize",
              borderRadius: 30,
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginLeft: "60px",
              border: "0.75px solid #FFF",
            }}
          >
            Request A Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
