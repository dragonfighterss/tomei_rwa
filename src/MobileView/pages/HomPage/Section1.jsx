import React from "react";
import { Button, Box } from "@mui/material";
import BgImg from "../../../assets/images/Rectangle_1406_1.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 1120,
  },
  slogon: {
    color: "#fff",
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Rand",
    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 250,
    lineHeight: "56.667px",
    letterSpacing: "-1px",
    textTransform: "capitalize",
    height: 150,
  },
  btnGroup: {
    height: 400,
    flexShrink: 0,
    opacity: 0.8,
    background: "#0A0A0A",
    paddingLeft: 34,
    paddingTop: 80,
  },
  sloginBg: {
    height: 150,
    width: 315,
    marginTop: -403,
    paddingLeft: 30,
    position: "absolute",
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
    marginTop: 60,
    height: 640,
    background: "#010552",
    mixBlendMode: "exclusion",
  },
});
const Section1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "1120px",
          backgroundImage: `url(${BgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={classes.imgBg}></div>
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
              flexShrink: 0,
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
                padding: "15px 20px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "4px",
                marginRight: "20px",
                height: "50px",
                marginBottom: "20px",
                ":hover": {
                  bgcolor: "#808080",
                  color: "white",
                },
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
                padding: "15px 20px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "4px",
                marginRight: "20px",
                height: "50px",
                marginBottom: "20px",
                ":hover": {
                  bgcolor: "#808080",
                  color: "white",
                },
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
                padding: "15px 20px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "4px",
                marginRight: "20px",
                height: "50px",
                marginBottom: "20px",
                ":hover": {
                  bgcolor: "#808080",
                  color: "white",
                },
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
            >
              FAMILY OFFICE
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Section1;
