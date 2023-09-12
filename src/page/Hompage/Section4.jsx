import React from "react";
import { Box } from "@mui/material";
import Img from "../../assets/images/image_72.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 800,
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 500,
    flexShrink: 0,
    borderRadius: 30,
    backgroundColor: "#FFE1D7",
    display: "inline-flex",
    alignItems: "flex-start",
  },
  description: {
    color: "#000",
    fontFamily: "Rand",
    fontSize: 17.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: 0.35,
    width: 480,
    paddingTop: 79,
    paddingLeft: 100,
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
    paddingLeft: 100,
    paddingTop: 68,
  },
  boxRight: {
    width: 665,
    height: 500,
    flexShrink: 0,
  },
});
const Section4 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.box}>
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
                width: "665px",
                height: "500px",
                backgroundImage: `url(${Img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
