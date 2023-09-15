import React from "react";
import { makeStyles } from "@mui/styles";
import { Divider, Container } from "@mui/material";
import { ReactComponent as FirstNumIcon } from "../../../assets/images/Group_11053.svg";
import { ReactComponent as SecondNumIcon } from "../../../assets/images/Group_11054.svg";
import { ReactComponent as ThirdNumIcon } from "../../../assets/images/Group_11055.svg";
import { ReactComponent as FourthNumIcon } from "../../../assets/images/Group_11056.svg";
import { ReactComponent as RightArrowIcon } from "../../../assets/images/Group_11075.svg";
import { ReactComponent as LeftArrowIcon } from "../../../assets/images/Group_11076.svg";
import { useHorizontalScroll } from "../../components/useSideScroll";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#000",
    height: 1150,
  },
  block: {
    [theme.breakpoints.up("sm")]: {
      width: 1000,
      paddingTop: "5%",
    },
    [theme.breakpoints.up("md")]: {
      width: 1500,
      paddingTop: "5%",
    },
    [theme.breakpoints.up("lg")]: {
      width: 2000,
      paddingTop: "5%",
    },
    [theme.breakpoints.up("xl")]: {
      width: 3000,
      paddingTop: "5%",
    },
  },
  title: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 16.5,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: 0.33,
    textTransform: "capitalize",
    paddingTop: 160,
  },
  subTitle: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%%",
    letterSpacing: 0.38,
    width: 330,
    paddingTop: 49,
    paddingBottom: 146,
  },
  subDescription: {
    color: "#FFF",
    fontFamily: "Rapid ST Trial",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "100%",
    letterSpacing: 0.56,
    paddingTop: 21,
    textTransform: "uppercase",
    paddingBottom: 160,
  },
  line: {
    marginRight: "7px !important",
    [theme.breakpoints.up("sm")]: { marginRight: 15 },
    [theme.breakpoints.up("md")]: { marginRight: 15 },
    [theme.breakpoints.up("lg")]: { marginRight: 15 },
    [theme.breakpoints.up("xl")]: {
      marginRight: 7,
    },
    background: "#FFF",
    height: 1,
  },
  content: {
    height: 569,
    paddingBottom: 109,
    paddingTop: 146,
  },
  card: {
    [theme.breakpoints.up("sm")]: {
      marginRight: 30,
      width: "14%",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: 30,
      width: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 30,
      width: "21.5%",
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: 30,
      width: "22.5%",
    },
    position: "relative",
    height: 374,
    backgroundColor: "#000",
    flexShrink: 0,
  },
  card1: {
    [theme.breakpoints.up("sm")]: {
      width: "7.1%",
      height: 374,
    },
    [theme.breakpoints.up("md")]: {
      width: "8.9%",
      height: 374,
    },
    [theme.breakpoints.up("lg")]: {
      width: "11%",
      height: 374,
    },
    [theme.breakpoints.up("xl")]: {
      width: "14.2%",
      height: 374,
    },
    position: "relative",
    backgroundColor: "#000",
    flexShrink: 0,
  },
  cardLine: {
    background: "#FFF",
    width: "100%",
    height: 2,
  },
  cardLine1: {
    background: "#FFF",
    width: "100%",
    height: 2,
    opacity: "15%",
  },
  numberIcon: {
    paddingBottom: 30,
  },
  numberIcon1: {
    opacity: "15%",
    paddingBottom: 30,
  },
  cardTitle: {
    color: "#FFF",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    letterSpacing: 0.38,
  },
  cardTitleBg: {
    paddingTop: 40,
    display: "inline-flex",
    alignItems: "flex-start",
  },
  cardDescription: {
    color: "#FFF",
    fontFamily: "Rand",
    fontSize: 17.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: 0.35,
    paddingTop: 60,
    width: 290,
    whiteSpace: "pre-line",
  },
  rightArrowIcon: {
    paddingLeft: 269,
    paddingTop: 8,
  },
  leftArrowIcon: {
    paddingTop: 8,
    position: "absolute",
    marginLeft: -30,
  },
  cardContainer: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  extraLine: {
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      width: "0%",
      height: "2px",
      opacity: "0.2",
      background: "#FFF",
      paddingTop: -220,
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "2%",
      height: "2px",
      opacity: "0.2",
      background: "#FFF",
      paddingTop: -220,
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      width: "9%",
      height: "2px",
      opacity: "0.2",
      background: "#FFF",
    },
    [theme.breakpoints.up("xl")]: {
      position: "absolute",
      width: "14%",
      height: "2px",
      opacity: "0.2",
      background: "#FFF",
      paddingTop: -220,
    },
    top: 4726,
    left: 0,
  },
}));

const Section6 = () => {
  const { elRef, currentCard } = useHorizontalScroll();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.title}>Technology</div>
        <div className={classes.subTitle}>The Power of Programmable ZK</div>
        <div ref={elRef}>
          <div
            style={{ whiteSpace: "nowrap", display: "flex", width: "3000px" }}
          >
            <div
              className={currentCard === 1 ? classes.card : classes.card1}
              style={{ display: `${currentCard > 1 ? "none" : "block"}` }}
            >
              <FirstNumIcon
                className={
                  currentCard === 1 ? classes.numberIcon : classes.numberIcon1
                }
              />
              <Divider
                className={
                  currentCard === 1 ? classes.cardLine : classes.cardLine1
                }
              />
              {currentCard === 1 && (
                <div className={classes.cardTitleBg}>
                  <div className={classes.cardTitle}>Asset On Boarding</div>
                  <RightArrowIcon className={classes.rightArrowIcon} />
                </div>
              )}
              {currentCard === 1 && (
                <div className={classes.cardDescription}>
                  Asset Onboarding (ZK DOCS): Import ownership and policies
                  securely.
                </div>
              )}
            </div>
            <div
              className={currentCard === 2 ? classes.card : classes.card1}
              style={{ display: `${currentCard > 2 ? "none" : "block"}` }}
            >
              <SecondNumIcon
                className={
                  currentCard === 2 ? classes.numberIcon : classes.numberIcon1
                }
              />
              <Divider
                className={
                  currentCard === 2 ? classes.cardLine : classes.cardLine1
                }
              />
              {currentCard === 2 && (
                <div className={classes.cardTitleBg}>
                  <LeftArrowIcon className={classes.leftArrowIcon} />
                  <div className={classes.cardTitle}>Automation</div>
                  <RightArrowIcon className={classes.rightArrowIcon} />
                </div>
              )}
              {currentCard === 2 && (
                <div className={classes.cardDescription}>
                  Mint tokens in compliance with KYC requirements.
                </div>
              )}
            </div>
            <div
              className={currentCard === 3 ? classes.card : classes.card1}
              style={{ display: `${currentCard > 3 ? "none" : "block"}` }}
            >
              <ThirdNumIcon
                className={
                  currentCard === 3 ? classes.numberIcon : classes.numberIcon1
                }
              />
              <Divider
                className={
                  currentCard === 3 ? classes.cardLine : classes.cardLine1
                }
              />
              {currentCard === 3 && (
                <div className={classes.cardTitleBg}>
                  <LeftArrowIcon className={classes.leftArrowIcon} />
                  <div className={classes.cardTitle}>Valuation</div>
                  <RightArrowIcon className={classes.rightArrowIcon} />
                </div>
              )}
              {currentCard === 3 && (
                <div className={classes.cardDescription}>
                  Verify asset valuations with best-in-class oracles.
                </div>
              )}
            </div>
            <div className={currentCard === 4 ? classes.card : classes.card1}>
              <FourthNumIcon
                className={
                  currentCard === 4 ? classes.numberIcon : classes.numberIcon1
                }
              />
              <Divider
                className={
                  currentCard === 4 ? classes.cardLine : classes.cardLine1
                }
              />
              {currentCard === 4 && (
                <div className={classes.cardTitleBg}>
                  <LeftArrowIcon className={classes.leftArrowIcon} />
                  <div className={classes.cardTitle}>Markets</div>
                  <RightArrowIcon className={classes.rightArrowIcon} />
                </div>
              )}
              {currentCard === 4 && (
                <div className={classes.cardDescription}>
                  Support for initial and secondary offerings.
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Divider
        className={classes.extraLine}
        style={{
          display: `${currentCard > 1 ? "block" : "none"}`,
        }}
      />
      <Container style={{ marginTop: 109 }}>
        <Divider className={classes.line} />
        <div className={classes.subDescription}>
          POWERED BY JIRITSU ZK Nodes
        </div>
      </Container>
    </div>
  );
};

export default Section6;
