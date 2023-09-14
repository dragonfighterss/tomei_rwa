import React from "react";
import Rectangle_1406 from "../../../assets/images/Rectangle_1406.png";
import Rectangle_1407 from "../../../assets/images/Rectangle_1407.png";
import Rectangle_1408 from "../../../assets/images/Rectangle_1408.png";
import { ReactComponent as TomeiTokenSymbol } from "../../../assets/images/Tomei-TokenSymbol.svg";
import { ReactComponent as GoldToken } from "../../../assets/images/Gold_Token.svg";
import { ReactComponent as RealEstateToken } from "../../../assets/images/Real_Estate_Token.svg";
import { ReactComponent as MusicToken } from "../../../assets/images/Music_Token.svg";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 2520,
    backgroundColor: "#0A0A0A",
    display: "inline-flex",
    alignItems: "flex-start",
  },
  left: {
    width: "50%",
    backgroundColor: "#0A0A0A",
  },
  right: {
    width: "50%",
    backgroundColor: "#141414",
  },
  left_top: {
    height: 720,
  },
  left_top_logoBg: {
    [theme.breakpoints.up("sm")]: {
      width: 265,
      height: 258,
      flexShrink: 0,
      background: "#3E54FF",
      mixBlendMode: "exclusion",
    },
    [theme.breakpoints.up("md")]: {
      width: 361,
      height: 360,
      flexShrink: 0,
      background: "#3E54FF",
      mixBlendMode: "exclusion",
    },
    [theme.breakpoints.up("lg")]: {
      width: 361,
      height: 360,
      flexShrink: 0,
      background: "#3E54FF",
      mixBlendMode: "exclusion",
    },
    [theme.breakpoints.up("xl")]: {
      width: 361,
      height: 360,
      flexShrink: 0,
      background: "#3E54FF",
      mixBlendMode: "exclusion",
    },
  },
  left_top_logo: {
    [theme.breakpoints.up("sm")]: {
      color: "#FFF",
      position: "absolute",
      marginTop: -234,
      marginLeft: "4.6%",
      display: "inline-flex",
      alignItems: "flex-start",
    },
    color: "#FFF",
    position: "absolute",
    marginTop: -280,
    marginLeft: "4.6%",
    display: "inline-flex",
    alignItems: "flex-start",
  },
  left_middle: {
    height: 1080,
    background: "#1F1F1F",
  },
  left_middle_title: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    letterSpacing: 0.38,
    paddingTop: 250,
  },
  left_middle_content: {
    [theme.breakpoints.up("sm")]: {
      width: 279,
      height: 204,
      paddingTop: 129,
    },
    [theme.breakpoints.up("md")]: {
      width: 431,
      height: 204,
      paddingTop: 129,
    },
    [theme.breakpoints.up("lg")]: {
      width: 476,
      height: 204,
      paddingTop: 129,
    },
    [theme.breakpoints.up("xl")]: {
      width: 476,
      height: 204,
      paddingTop: 129,
    },
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "34px",
    letterSpacing: 0.22,
  },
  right_middle_bottom: {
    height: 180,
    backgroundColor: "#0A0A0A",
  },
  left_bottom_logoBg: {
    [theme.breakpoints.up("sm")]: {
      width: 322,
      height: 340,
    },
    [theme.breakpoints.up("md")]: {
      width: 406,
      height: 403,
    },
    flexShrink: 0,
    background: "#3E54FF",
    mixBlendMode: "exclusion",
  },
  left_bottom_logo: {
    [theme.breakpoints.up("sm")]: {
      marginTop: -288,
      marginLeft: "3%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: -349,
      marginLeft: "3%",
    },
    color: "#FFF",
    position: "absolute",
    display: "inline-flex",
    alignItems: "flex-start",
  },
  left_bottom_icon: {
    paddingLeft: 12,
  },
  right_top: {
    height: 900,
  },
  right_top_title: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    letterSpacing: 0.38,
    paddingTop: 70,
    paddingLeft: 80,
  },
  right_top_content: {
    [theme.breakpoints.up("sm")]: {
      width: 263,
      height: 264,
      paddingTop: 100,
      paddingLeft: 83,
    },
    [theme.breakpoints.up("md")]: {
      width: 357,
      height: 264,
      paddingTop: 100,
      paddingLeft: 83,
    },
    [theme.breakpoints.up("lg")]: {
      width: 410,
      height: 264,
      paddingTop: 100,
      paddingLeft: 83,
    },
    [theme.breakpoints.up("xl")]: {
      width: 410,
      height: 264,
      paddingTop: 100,
      paddingLeft: 83,
    },
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "34px",
    letterSpacing: 0.22,
  },
  right_middle: {
    height: 900,
  },
  right_middle_logoBg: {
    [theme.breakpoints.up("sm")]: {
      width: 254,
      height: 320,
      marginTop: 400,
    },
    [theme.breakpoints.up("md")]: {
      width: 361,
      height: 360,
      marginTop: 360,
    },
    [theme.breakpoints.up("lg")]: {
      width: 361,
      height: 360,
      marginTop: 360,
    },
    [theme.breakpoints.up("xl")]: {
      width: 361,
      height: 360,
      marginTop: 360,
    },
    flexShrink: 0,
    position: "absolute",
    right: 0,
    background: "#3E54FF",
    mixBlendMode: "exclusion",
  },
  right_middle_logo: {
    color: "#FFF",
    position: "absolute",
    marginTop: 30,
    marginLeft: 33,
    display: "inline-flex",
    alignItems: "flex-start",
  },
  right_middle_icon: {
    paddingRight: 14,
  },
  right_bottom: {
    height: 720,
    backgroundColor: "#0A0A0A",
  },
  right_bottom_title: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    letterSpacing: 0.38,
    paddingTop: 75,
    paddingLeft: 83,
  },
  right_bottom_content: {
    [theme.breakpoints.up("sm")]: {
      width: 228,
      height: 374,
      paddingTop: 75,
      paddingLeft: 83,
    },
    [theme.breakpoints.up("md")]: {
      width: 356,
      height: 374,
      paddingTop: 75,
      paddingLeft: 83,
    },
    [theme.breakpoints.up("lg")]: {
      width: 410,
      height: 374,
      paddingTop: 75,
      paddingLeft: 83,
    },
    [theme.breakpoints.up("xl")]: {
      width: 410,
      height: 374,
      paddingTop: 75,
      paddingLeft: 83,
    },
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "34px",
    letterSpacing: 0.22,
  },
}));
const Section1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.left_top}>
          <Box
            component="div"
            sx={{
              width: "100%",
              height: "720px",
              backgroundImage: `url(${Rectangle_1406})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={classes.left_top_logoBg}></div>
            <div className={classes.left_top_logo}>
              <TomeiTokenSymbol className={classes.left_top_icon} />
              <GoldToken
                className={classes.left_top_icon}
                style={{ paddingTop: "9px" }}
              />
            </div>
          </Box>
        </div>

        <div className={classes.left_middle}>
          <Container
            maxWidth="lg"
            style={{ float: "right", maxWidth: "600px" }}
          >
            <div className={classes.left_middle_title}>Music and Video</div>
            <div className={classes.left_middle_content}>
              Creative works such as music and videos generate rights and
              royalties for their creators. These rights can be tokenized,
              allowing creators to raise funds by selling a portion of their
              future earnings while retaining control over their work.
            </div>
          </Container>
        </div>

        <div className={classes.left_bottom}>
          <Box
            component="div"
            sx={{
              width: "100%",
              height: "720px",
              backgroundImage: `url(${Rectangle_1408})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={classes.left_bottom_logoBg}></div>
            <div className={classes.left_bottom_logo}>
              <TomeiTokenSymbol className={classes.left_bottom_icon} />
              <RealEstateToken
                className={classes.left_bottom_icon}
                style={{ paddingTop: "9px" }}
              />
            </div>
          </Box>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.right_top}>
          <div className={classes.right_top_title}>Gold</div>
          <div className={classes.right_top_content}>
            Physical commodities like gold and silver have been a store of value
            for centuries. They are considered a safe haven during economic
            uncertainties. At Tomei, we allow you to invest in these commodities
            through tokenization, providing you with the benefits of ownership
            without the need for physical storage.
          </div>
        </div>
        <div className={classes.right_middle}>
          <Box
            component="div"
            sx={{
              width: "100%",
              height: "720px",
              backgroundImage: `url(${Rectangle_1407})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={classes.right_middle_logo}>
              <TomeiTokenSymbol className={classes.right_middle_icon} />
              <MusicToken
                className={classes.right_middle_icon}
                style={{ paddingTop: "9px" }}
              />
            </div>
            <div className={classes.right_middle_logoBg}></div>
          </Box>
          <div className={classes.right_middle_bottom}></div>
        </div>
        <div className={classes.right_bottom}>
          <div className={classes.right_bottom_title}>Real Estate</div>
          <div className={classes.right_bottom_content}>
            Real estate loans represent a claim on a physical property. These
            loans can be tokenized, allowing investors to gain exposure to the
            real estate market without theneed to manage physical properties.
            Tokenizing these real-world assets allows for greater liquidity,
            transparency, and accessibility. With Tomei, we bring the benefits
            of blockchain technology to these real-world assets, providing a new
            way for investors and asset owners to connect.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
