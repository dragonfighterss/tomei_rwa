import React from "react";
import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Img from "../../../assets/images/image_72.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 800,
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: 500,
      flexShrink: 0,
      borderRadius: 30,
      backgroundColor: "#FFE1D7",
      display: "inline-flex",
      alignItems: "flex-start",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: 500,
      flexShrink: 0,
      borderRadius: 30,
      backgroundColor: "#FFE1D7",
      display: "inline-flex",
      alignItems: "flex-start",
    },
      [theme.breakpoints.up("lg")]: {
        width: "90%",
        height: 500,
        flexShrink: 0,
        borderRadius: 30,
        backgroundColor: "#FFE1D7",
        display: "inline-flex",
        alignItems: "flex-start",
      },
        [theme.breakpoints.up("xl")]: {
          width: "90%",
          height: 500,
          flexShrink: 0,
          borderRadius: 30,
          backgroundColor: "#FFE1D7",
          display: "inline-flex",
          alignItems: "flex-start",
        },
  
   
  },
  description: {
    [theme.breakpoints.up("sm")]: {
      color: "#000",
      fontFamily: "Rand",
      fontSize: 17.5,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: 0.35,
      width: 240,
      paddingTop: 79,
    },
    [theme.breakpoints.up("md")]: {
      color: "#000",
      fontFamily: "Rand",
      fontSize: 17.5,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: 0.35,
      width: 320,
      paddingTop: 79,
    },
    [theme.breakpoints.up("lg")]: {
      color: "#000",
      fontFamily: "Rand",
      fontSize: 17.5,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: 0.35,
      width: 400,
      paddingTop: 79,
    },
    [theme.breakpoints.up("xl")]: {
      color: "#000",
      fontFamily: "Rand",
      fontSize: 17.5,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: 0.35,
      width: 480,
      paddingTop: 79,
    },
  },
  btn: {
    color: "#000",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
    textDecorationLine: "underline",
    cusor: "pointer",
  },
  btnBg: {
    paddingTop: 68,
  },
  boxRight: {
    float: "right",
    height: 500,
    flexShrink: 0,
  },
  boxLeft: {
    float: "left",
  },
}));
const Section4 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Container maxWidth="lg">
          {/* <div> */}
          <div className={classes.boxLeft}>
            <div className={classes.description}>
              Tomei RWA provides the gold standard in RWA tokenization with
              proprietary ZK attestation system and transparent automation.
              Offering programmable, cryptographically secure tokens, we ensure
              full regulatory compliance and institutional-grade privacy. We
              unlock alternative assets for investors, expanding markets and
              boosting revenue.
            </div>
            <div className={classes.btnBg}>
              <a href="/" className={classes.btn}>
                Read Case Studies
              </a>
            </div>
          </div>
          <div className={classes.boxRight}>
            <Box
              component="div"
              sx={{
                width: { sm: "315px", md: "415px", lg: "665px" },
                height: "500px",
                backgroundImage: `url(${Img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                float: "right",
              }}
            />
          </div>
          {/* </div> */}
        </Container>
      </Box>
    </div>
  );
};

export default Section4;
