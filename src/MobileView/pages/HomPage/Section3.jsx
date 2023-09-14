import React from "react";
import { ReactComponent as PlusIcon } from "../../../assets/images/Group_11108.svg";
import { ReactComponent as CrossIcon } from "../../../assets/images/Group_11107.svg";
import { makeStyles } from "@mui/styles";
import { Divider, Button, Container } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 1250,
    backgroundColor: "#0A0A0A",
  },
  left: {
    width: "50%",
    height: 800,
    backgroundColor: "#0A0A0A",
  },
  right: {
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
    witdh: 585,
  },
  titleBg: {
    paddingTop: 80,
    paddingLeft: 21,
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
  },
  content1_bg: {
    width: 270,
    height: 116,
    paddingTop: 60,
    paddingBottom: 46,
  },
  description: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
    width: 293,
    paddingLeft: 7,
    paddingTop: 59,
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
    paddingLeft: 20,
    paddingTop: 60,
  },
  line: {
    background: "#FFF",
    width: 292,
    height: 1,
    marginBottom: 30,
  },
  plusIcon: {
    right: 30,
    position: "absolute",
    marginTop: -48,
  },
  crossIcon: {
    right: 20,
    position: "absolute",
    marginTop: -48,
  },
});
const Section3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.titleBg}>
          <span className={classes.title}>Tomei creates liquidity</span>
          <div className={classes.content1_bg}>
            <Divider className={classes.line} />
            <span className={classes.content1}>Institutional Investors</span>
            <PlusIcon className={classes.plusIcon} />
          </div>
          <div>
            <Divider className={classes.line} />
            <span className={classes.content2}>Individual Investors</span>
            <CrossIcon className={classes.crossIcon} />
          </div>
        </div>
        {/* */}
        <div className={classes.right}>
          <Container maxWidth="lg">
            <div className={classes.description}>
              For individual investors Tomei unlocks the power of elite
              investments: Tokenization shatters the high barriers to entry for
              alternative investment avenues such as real-estate, private
              equity, art, and commodities.
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
                marginTop: "70px",
                marginLeft: "5px",
                border: "0.75px solid #FFF",
              }}
            >
              Request A Consultation
            </Button>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Section3;
