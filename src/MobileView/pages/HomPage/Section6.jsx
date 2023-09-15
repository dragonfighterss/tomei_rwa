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
    paddingTop: 80,
  },
  subTitle: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%%",
    letterSpacing: 0.38,
    width: 315,
    paddingTop: 49,
    paddingBottom: 80,
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
    paddingBottom: 130,
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
    marginRight: 30,
    position: "relative",
    height: 374,
    backgroundColor: "#000",
    flexShrink: 0,
  },
  card1: {
    width: "15%",
    height: 374,
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
    paddingTop: 31,
  },
  cardTitleBg: {
    paddingTop: 40,
  },
  cardDescription: {
    color: "#FFF",
    fontFamily: "Rand",
    fontSize: 17.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: 0.35,
    paddingTop: 14,
    width: 290,
    whiteSpace: "pre-line",
  },
  rightArrowIcon: {
    paddingLeft: 20,
  },
  leftArrowIcon: {
    paddingTop: 8,
    position: "absolute",
    marginLeft: 30,
  },
  cardContainer: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
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
            style={{ whiteSpace: "nowrap", display: "flex", width: "375px" }}
          >
            <div
              className={currentCard === 1 ? classes.card : classes.card1}
              style={{ display: `${currentCard === 1 ? "block" : "none"}` }}
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
                  <div>
                    <LeftArrowIcon style={{ opacity: "0.2" }} />
                    <RightArrowIcon className={classes.rightArrowIcon} />
                  </div>
                  <div className={classes.cardTitle}>Asset On Boarding</div>
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
              style={{ display: `${currentCard === 2 ? "block" : "none"}` }}
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
                  <div>
                    <LeftArrowIcon />
                    <RightArrowIcon className={classes.rightArrowIcon} />
                  </div>
                  <div className={classes.cardTitle}>Automation</div>
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
              style={{ display: `${currentCard === 3 ? "block" : "none"}` }}
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
                  <div>
                    <LeftArrowIcon />
                    <RightArrowIcon className={classes.rightArrowIcon} />
                  </div>
                  <div className={classes.cardTitle}>Valuation</div>
                </div>
              )}
              {currentCard === 3 && (
                <div className={classes.cardDescription}>
                  Verify asset valuations with best-in-class oracles.
                </div>
              )}
            </div>
            <div
              className={currentCard === 4 ? classes.card : classes.card1}
              style={{ display: `${currentCard === 4 ? "block" : "none"}` }}
            >
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
                  <div>
                    <LeftArrowIcon />
                    <RightArrowIcon
                      className={classes.rightArrowIcon}
                      style={{ opacity: "0.2" }}
                    />
                  </div>
                  <div className={classes.cardTitle}>Markets</div>
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
      <Container style={{ marginTop: 130 }}>
        <div className={classes.subDescription}>
          POWERED BY JIRITSU ZK Nodes
        </div>
      </Container>
    </div>
  );
};

export default Section6;
