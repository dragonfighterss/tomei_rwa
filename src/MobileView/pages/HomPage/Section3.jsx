import React from "react";
import { ReactComponent as Icon } from "../../../assets/images/Group_11083.svg";
import { makeStyles } from "@mui/styles";
// import { Button } from "@mui/material";
import { Divider } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 1250,
    display: "inline-flex",
    alignItems: "flex-start",
    backgroundColor: "#0A0A0A",
  },
  left: {
    width: "50%",
    height: 800,
    backgroundColor: "#0A0A0A",
  },
  right: {
    width: "50%",
    height: 800,
    backgroundColor: "#0A0A0A",
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
    witdh:585
  },
  titleBg: {
    paddingTop: 80,
    paddingLeft: 31,
    witdh:585
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
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
    width: 487,
    height: 165,
    paddingTop: 140,
    paddingLeft: 73,
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
    paddingLeft: 69,
    paddingTop: 60,
  },
  line: {
    background: "#FFF",
    width: 80,
    height: 0.638,
  },
});
const Section3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <div className={classes.left}>
        
      </div> */}
      <div className={classes.titleBg}>
          <span className={classes.title}>Tomei creates liquidity</span>
          <div className={classes.content1_bg}>
            <span className={classes.content1}>Institutional Investors</span>
          </div>
          <div>
            <Icon />
            <span className={classes.content2}>Individual Investors</span>
          </div>
        </div>
        <Divider className={classes.line} />
      {/* <div className={classes.right}>
        <div className={classes.description}>
          For individual investors Tomei unlocks the power of elite investments:
          Tokenization shatters the high barriers to entry for alternative
          investment avenues such as real-estate, private equity, art, and
          commodities.
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
            marginTop: "73px",
            marginLeft: "60px",
            border: "0.75px solid #FFF",
          }}
        >
          Request A Consultation
        </Button>
      </div> */}
    </div>
  );
};

export default Section3;
