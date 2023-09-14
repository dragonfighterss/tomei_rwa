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
    paddingTop: "30px",
    cursor: "pointer",
  },
  content2: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    letterSpacing: 0.38,
    cursor: "pointer",
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
    marginBottom: "30px !important",
  },
  plusIcon: {
    right: 30,
    position: "absolute",
    marginTop: -48,
    cursor: "pointer",
  },
  crossIcon: {
    right: 20,
    position: "absolute",
    marginTop: -48,
    cursor: "pointer",
  },
});
const Section3 = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.titleBg}>
          <span className={classes.title}>Tomei creates liquidity</span>
          <div className={classes.content1_bg}>
            <Divider className={classes.line} />
            <span
              className={
                props.investerType === "institution"
                  ? classes.content2
                  : classes.content1
              }
              onClick={() => props.handleChangeInvesterType("institution")}
            >
              Institutional Investors
            </span>
            {props.investerType === "individual" ? (
              <PlusIcon
                className={classes.plusIcon}
                onClick={() => props.handleChangeInvesterType("institution")}
              />
            ) : (
              <CrossIcon
                className={classes.crossIcon}
                onClick={() => props.handleChangeInvesterType("individual")}
              />
            )}{" "}
          </div>
          <div>
            <Divider className={classes.line} />
            <span
              className={
                props.investerType === "individual"
                  ? classes.content2
                  : classes.content1
              }
              onClick={() => props.handleChangeInvesterType("individual")}
            >
              Individual Investors
            </span>
            {props.investerType === "institution" ? (
              <PlusIcon
                className={classes.plusIcon}
                onClick={() => props.handleChangeInvesterType("individual")}
              />
            ) : (
              <CrossIcon
                className={classes.crossIcon}
                onClick={() => props.handleChangeInvesterType("institution")}
              />
            )}
          </div>
        </div>
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
              onClick={() => props.handleOpenModal(true)}
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
