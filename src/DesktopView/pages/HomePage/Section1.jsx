import React from "react";
import { Button, Box, Container } from "@mui/material";
import BgImg from "../../../assets/images/Bg1.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 1020,
  },
  slogon: {
    [theme.breakpoints.up("sm")]: {
      color: "#fff",
      leadingTrim: "both",
      textEdge: "cap",
      fontFamily: "Rand",
      fontSize: 80,
      fontStyle: "normal",
      fontWeight: 250,
      lineHeight: "160px",
      letterSpacing: 3,
      textTransform: "capitalize",
      height: 300,
    },
    [theme.breakpoints.up("md")]: {
      color: "#fff",
      leadingTrim: "both",
      textEdge: "cap",
      fontFamily: "Rand",
      fontSize: 120,
      fontStyle: "normal",
      fontWeight: 250,
      lineHeight: "160px",
      letterSpacing: 3,
      textTransform: "capitalize",
      height: 300,
    },
    [theme.breakpoints.up("lg")]: {
      color: "#fff",
      leadingTrim: "both",
      textEdge: "cap",
      fontFamily: "Rand",
      fontSize: 149,
      fontStyle: "normal",
      fontWeight: 250,
      lineHeight: "160px",
      letterSpacing: 3,
      textTransform: "capitalize",
      height: 300,
    },
    [theme.breakpoints.up("xl")]: {
      color: "#fff",
      leadingTrim: "both",
      textEdge: "cap",
      fontFamily: "Rand",
      fontSize: 160,
      fontStyle: "normal",
      fontWeight: 250,
      lineHeight: "160px",
      letterSpacing: 3,
      textTransform: "capitalize",
      height: 300,
      marginLeft: 12,
    },
  },
  btnGroup: {
    width: "100%",
    height: 260,
    flexShrink: 0,
    opacity: 0.8,
    background: "#0A0A0A",
    paddingTop: 71,
  },
  slogonBg: {
    [theme.breakpoints.up("sm")]: {
      height: 630,
      marginTop: -639,
      position: "absolute",
      marginLeft: -15,
      width: 600,
    },
    [theme.breakpoints.up("md")]: {
      height: 630,
      marginTop: -639,
      position: "absolute",
      marginLeft: -15,
      width: 900,
    },
    [theme.breakpoints.up("lg")]: {
      height: 630,
      marginTop: -639,
      position: "absolute",
      marginLeft: -15,
      width: 1200,
    },
    [theme.breakpoints.up("xl")]: {
      height: 630,
      marginTop: -639,
      position: "absolute",
      width: 1300,
    },
  },
  letter: {
    color: "#FFF",
    fontFamily: "Rand",
    fontSize: 16.5,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: 0.33,
    textTransform: "capitalize",
    position: "relative",
    opacity: 1,
    paddingTop: 71,
  },
  btn: {
    color: "#FFF",
    fontFamily: "Rapid ST Trial",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "100%",
    letterSpacing: 0.56,
    textTransform: "uppercase",
    position: "absolute",
  },
  imgBg: {
    height: 689,
    background: "#010552",
    mixBlendMode: "exclusion",
  },
}));
const Section1 = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "1020px",
          backgroundImage: `url(${BgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={classes.imgBg}></div>
        <Container maxWidth="lg">
          <div className={classes.slogonBg}>
            <span className={classes.slogon}>
              The World`s Most Valuable RWA Tokens
            </span>
          </div>
        </Container>

        <div className={classes.btnGroup}>
          <Container maxWidth="lg">
            <div>
              <span className={classes.letter}>Get Started</span>
            </div>
            <div
              style={{
                display: "flex",
                paddingTop: "46px",
                paddingBottom: "72px",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#FFF",
                  color: "#000",
                  fontFamily: "Rapid ST Trial",
                  fontSize: "17px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: 0.56,
                  textTransform: "uppercase",
                  padding: "15px 20px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "4px",
                  marginRight: "20px",
                  height: "50px",
                  ":hover": {
                    bgcolor: "#808080",
                    color: "white",
                  },
                }}
                onClick={() => props.handleOpenModal(true)}
              >
                Banks and INSURANCE
              </Button>
              <Button
                sx={{
                  backgroundColor: "#FFF",
                  color: "#000",
                  fontFamily: "Rapid ST Trial",
                  fontSize: "17px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: 0.56,
                  textTransform: "uppercase",
                  padding: "15px 20px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "4px",
                  marginRight: "20px",
                  height: "50px",
                  ":hover": {
                    bgcolor: "#808080",
                    color: "white",
                  },
                }}
                onClick={() => props.handleOpenModal(true)}
              >
                PRIVATE EQUITY
              </Button>
              <Button
                sx={{
                  backgroundColor: "#FFF",
                  color: "#000",
                  fontFamily: "Rapid ST Trial",
                  fontSize: "17px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: 0.56,
                  textTransform: "uppercase",
                  padding: "15px 20px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "4px",
                  marginRight: "20px",
                  height: "50px",
                  ":hover": {
                    bgcolor: "#808080",
                    color: "white",
                  },
                }}
                onClick={() => props.handleOpenModal(true)}
              >
                ASSET MANAGERS
              </Button>
              <Button
                sx={{
                  backgroundColor: "#FFF",
                  color: "#000",
                  fontFamily: "Rapid ST Trial",
                  fontSize: "17px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: 0.56,
                  textTransform: "uppercase",
                  padding: "15px 20px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "4px",
                  marginRight: "20px",
                  height: "50px",
                  ":hover": {
                    bgcolor: "#808080",
                    color: "white",
                  },
                }}
                onClick={() => props.handleOpenModal(true)}
              >
                FAMILY OFFICE
              </Button>
            </div>
          </Container>
        </div>
      </Box>
    </div>
  );
};

export default Section1;
