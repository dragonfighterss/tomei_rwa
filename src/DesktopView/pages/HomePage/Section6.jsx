import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Divider } from "@mui/material";
import { ReactComponent as FirstNumIcon } from "../../../assets/images/Group_11053.svg";
import { ReactComponent as SecondNumIcon } from "../../../assets/images/Group_11054.svg";
import { ReactComponent as ThirdNumIcon } from "../../../assets/images/Group_11055.svg";
import { ReactComponent as FourthNumIcon } from "../../../assets/images/Group_11056.svg";
import { ReactComponent as RightArrowIcon } from "../../../assets/images/Group_11075.svg";
import { ReactComponent as LeftArrowIcon } from "../../../assets/images/Group_11076.svg";
import styled from "styled-components";

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: relative;
  height: 100%;
  will-change: transform;
  padding-bottom: 109px;
`;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  try {
    if (ref?.current) {
      const objectWidth = ref.current.scrollWidth;
      const dynamicHeight = calcDynamicHeight(objectWidth);
      setDynamicHeight(dynamicHeight);
    }
  } catch (e) {}
};

const applyScrollListener = (ref, setTranslateX) => {
  try {
    window.addEventListener("scroll", () => {
      if (ref?.current) {
        const offsetTop = -ref.current.offsetTop;
        setTranslateX(offsetTop);
      }
    });
  } catch (e) {}
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#000",
  },
  block: {
    [theme.breakpoints.up("sm")]: {
      width: 1000,
      paddingTop: "5%",
      paddingLeft: "15.4%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("md")]: {
      width: 1500,
      paddingTop: "5%",
      paddingLeft: "14%",
    },
    [theme.breakpoints.up("lg")]: {
      width: 2000,
      paddingTop: "5%",
      paddingLeft: "9.7%",
    },
    [theme.breakpoints.up("xl")]: {
      width: 3000,
      paddingTop: "5%",
      paddingLeft: "15.4%",
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
    background: "#FFF",
    width: "93%",
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
      width: "33%",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: 30,
      width: "33%",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 30,
      width: "32%",
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: 30,
      width: "25.5%",
    },
    position: "relative",
    height: 374,
    backgroundColor: "#000",
    flexShrink: 0,
  },
  card1: {
    [theme.breakpoints.up("sm")]: {
      width: "15%",
      height: 374,
    },
    [theme.breakpoints.up("md")]: {
      width: "13%",
      height: 374,
    },
    [theme.breakpoints.up("lg")]: {
      width: "17%",
      height: 374,
    },
    [theme.breakpoints.up("xl")]: {
      width: "16%",
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
}));

const Section6 = () => {
  const classes = useStyles();
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const [currentCard, setCurrentCard] = useState(1);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);
  useEffect(() => {
    let cardWidth = window.innerWidth * 0.1;
    if (0 < -translateX && -translateX < cardWidth) {
      setCurrentCard(1);
    } else if (cardWidth < -translateX && -translateX < cardWidth * 1.8) {
      setCurrentCard(2);
    } else if (cardWidth * 1.8 < -translateX && -translateX < cardWidth * 2.5) {
      setCurrentCard(3);
    } else if (cardWidth * 2.5 < -translateX && -translateX < cardWidth * 3) {
      setCurrentCard(4);
    }
  }, [translateX]);

  return (
    <div className={classes.root}>
      <TallOuterContainer dynamicHeight={dynamicHeight}>
        <StickyInnerContainer ref={containerRef}>
          <div className={classes.block}>
            <div className={classes.title}>Technology</div>
            <div className={classes.subTitle}>The Power of Programmable ZK</div>
            <div classes={classes.content}>
              <HorizontalTranslateContainer
                translateX={translateX}
                ref={objectRef}
              >
                <div className={classes.cardContainer}>
                  <div
                    className={currentCard === 1 ? classes.card : classes.card1}
                  >
                    <FirstNumIcon
                      className={
                        currentCard === 1
                          ? classes.numberIcon
                          : classes.numberIcon1
                      }
                    />
                    <Divider
                      className={
                        currentCard === 1 ? classes.cardLine : classes.cardLine1
                      }
                    />
                    {currentCard === 1 && (
                      <div className={classes.cardTitleBg}>
                        <div className={classes.cardTitle}>
                          Asset On Boarding
                        </div>
                        <RightArrowIcon className={classes.rightArrowIcon} />
                      </div>
                    )}
                    {currentCard === 1 && (
                      <div className={classes.cardDescription}>
                        Asset Onboarding (ZK DOCS): Import ownership and
                        policies securely.
                      </div>
                    )}
                  </div>
                  <div
                    className={currentCard === 2 ? classes.card : classes.card1}
                  >
                    <SecondNumIcon
                      className={
                        currentCard === 2
                          ? classes.numberIcon
                          : classes.numberIcon1
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
                  >
                    <ThirdNumIcon
                      className={
                        currentCard === 3
                          ? classes.numberIcon
                          : classes.numberIcon1
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
                  <div
                    className={currentCard === 4 ? classes.card : classes.card1}
                  >
                    <FourthNumIcon
                      className={
                        currentCard === 4
                          ? classes.numberIcon
                          : classes.numberIcon1
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
              </HorizontalTranslateContainer>
            </div>
            <Divider className={classes.line} />
            <div className={classes.subDescription}>
              POWERED BY JIRITSU ZK Nodes
            </div>
          </div>
        </StickyInnerContainer>
      </TallOuterContainer>
    </div>
  );
};
export default Section6;
