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
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#000",
  },
  block: {
    paddingTop: "5%",
    paddingLeft: "5%",
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
  },
  line: {
    background: "#FFF",
    width: 1120,
    height: 1,
  },
  content: {
    height: 569,
    paddingBottom: 109,
    paddingTop: 146,
  },
  card: {
    height: 300,
    width: 500,
  },
  cardLine: {
    background: "#FFF",
    width: 610,
    height: 0.638,
  },
  numberIcon: {
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
});

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;
  height: 374px;
  width: 610px;
  background-color: #000;
  margin-right: 75px;
  flex-shrink: 0;
`;

const Section6 = () => {
  const classes = useStyles();
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

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
                <CardsContainer>
                  <SampleCard>
                    <FirstNumIcon className={classes.numberIcon} />
                    <Divider className={classes.cardLine} />
                    <div className={classes.cardTitleBg}>
                      <div className={classes.cardTitle}>Asset On Boarding</div>
                      <RightArrowIcon className={classes.rightArrowIcon} />
                    </div>
                    <div className={classes.cardDescription}>
                      Asset Onboarding (ZK DOCS): Import ownership and policies
                      securely.
                    </div>
                  </SampleCard>
                  <SampleCard>
                    <SecondNumIcon className={classes.numberIcon} />
                    <Divider className={classes.cardLine} />
                    <div className={classes.cardTitleBg}>
                      <LeftArrowIcon className={classes.leftArrowIcon} />
                      <div className={classes.cardTitle}>Automation</div>
                      <RightArrowIcon className={classes.rightArrowIcon} />
                    </div>

                    <div className={classes.cardDescription}>
                      Mint tokens in compliance with KYC requirements.
                    </div>
                  </SampleCard>
                  <SampleCard>
                    <ThirdNumIcon className={classes.numberIcon} />
                    <Divider className={classes.cardLine} />
                    <div className={classes.cardTitleBg}>
                      <LeftArrowIcon className={classes.leftArrowIcon} />
                      <div className={classes.cardTitle}>Automation</div>
                      <RightArrowIcon className={classes.rightArrowIcon} />
                    </div>

                    <div className={classes.cardDescription}>
                      Mint tokens in compliance with KYC requirements.
                    </div>
                  </SampleCard>
                  <SampleCard>
                    <FourthNumIcon className={classes.numberIcon} />
                    <Divider className={classes.cardLine} />
                    <div className={classes.cardTitleBg}>
                      <LeftArrowIcon className={classes.leftArrowIcon} />
                      <div className={classes.cardTitle}>Automation</div>
                      <RightArrowIcon className={classes.rightArrowIcon} />
                    </div>

                    <div className={classes.cardDescription}>
                      Mint tokens in compliance with KYC requirements.
                    </div>
                  </SampleCard>
                </CardsContainer>
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
