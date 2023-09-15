import React from "react";
import { Box, Container } from "@mui/material";
import Img from "../../../assets/images/image_72_1.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 1070,
    backgroundColor: "#000",
  },
  box: {
    flexShrink: 0,
    backgroundColor: "#FFE1D7",
  },
  description: {
    color: "#000",
    fontFamily: "Rand",
    fontSize: 17.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: 0.35,
    width: 300,
    paddingTop: 80,
    paddingLeft: 37,
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
    paddingLeft: 37,
    paddingTop: 60,
    paddingBottom: 81,
  },
  boxRight: {
    width: 375,
    height: 530,
    flexShrink: 0,
    backgroundColor: "#FFE1D7",
  },
  boxLeft: {
    height: 540,
  },
});
const Section4 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <div
          className={classes.boxLeft}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
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
        </div>
        <div className={classes.boxRight}>
          <Container maxWidth="lg">
            <Box
              component="div"
              sx={{
                width: "294px",
                height: "500px",
                backgroundImage: `url(${Img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#093540",
                marginLeft: "21px",
                borderRadius: "20px",
              }}
            />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Section4;
