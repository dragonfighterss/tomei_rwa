import React from "react";
import { Button, Box } from "@mui/material";
import BgImg from "../../assets/images/Bg1.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 1020,
  },
  slogon: {
    color: "#fff",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Rand",
    fontSize: 120,
    fontStyle: "normal",
    fontWeight: 250,
    lineHeight: 1.3,
    letterSpacing: -3,
    textTransform: "capitalize",
    height: 300,
  },
  btnGroup: {
    height: 189,
    flexShrink: 0,
    opacity: 0.8,
    background: "#0A0A0A",
    paddingLeft: 160,
    paddingTop: 71,
  },
  sloginBg: {
    height: 630,
    width: 1000,
    paddingTop: 132,
    paddingLeft: 268,
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
});
const FirstComponet = () => {
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
        <div className={classes.sloginBg}>
          <span className={classes.slogon}>
            The World`s Most Valuable RWA Tokens
          </span>
        </div>
        <div className={classes.btnGroup}>
          <div>
            <span className={classes.letter}>Get Started</span>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "48px",
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
                display: "flex",
                padding: "15px 20px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "4px",
                marginRight: "20px",
                height: "50px",
              }}
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
                display: "flex",
                padding: "15px 20px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "4px",
                marginRight: "20px",
                height: "50px",
              }}
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
                display: "flex",
                padding: "15px 20px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "4px",
                marginRight: "20px",
                height: "50px",
              }}
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
                display: "flex",
                padding: "15px 20px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "4px",
                marginRight: "20px",
                height: "50px",
              }}
            >
              FAMILY OFFICE
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default FirstComponet;
