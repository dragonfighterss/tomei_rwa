import React from "react";
import Rectangle_1406 from "../../../assets/images/Rectangle_1406.png";
import Rectangle_1407 from "../../../assets/images/Rectangle_1407.png";
import Rectangle_1408 from "../../../assets/images/Rectangle_1408.png";
import { ReactComponent as TomeiTokenSymbol } from "../../../assets/images/Tomei-TokenSymbol.svg";
import { ReactComponent as GoldToken } from "../../../assets/images/Gold_Token.svg";
import { ReactComponent as RealEstateToken } from "../../../assets/images/Real_Estate_Token.svg";
import { ReactComponent as MusicToken } from "../../../assets/images/Music_Token.svg";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#0A0A0A",
  },
  left_top: {
    height: 375,
  },
  left_top_icon: {
    paddingLeft: 14,
  },
  left_top_logoBg: {
    width: 188.021,
    height: 187.5,
    flexShrink: 0,
    background: "#3E54FF",
    mixBlendMode: "exclusion",
  },
  left_top_logo: {
    color: "#FFF",
    position: "absolute",
    marginTop: -157,
    marginLeft: 20,
    display: "inline-flex",
    alignItems: "flex-start",
  },
  left_middle: {
    height: 700,
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
    paddingTop: 70,
    paddingLeft: 31,
  },
  left_middle_content: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
    width: 311.74,
    paddingTop: 40,
    paddingLeft: 33,
  },
  right_middle_bottom: {
    height: 180,
    backgroundColor: "#0A0A0A",
  },
  left_bottom_logoBg: {
    width: 281.771,
    height: 281.771,
    flexShrink: 0,
    background: "#3E54FF",
    mixBlendMode: "exclusion",
  },
  left_bottom_logo: {
    color: "#FFF",
    position: "absolute",
    marginTop: -251,
    marginLeft: 23,
    display: "inline-flex",
    alignItems: "flex-start",
  },
  left_bottom_icon: {
    paddingLeft: 12,
  },
  right_top: {
    height: 700,
    backgroundColor: "#141414",
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
    paddingLeft: 33,
  },
  right_top_content: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
    width: 311,
    paddingTop: 40,
    paddingLeft: 33,
  },
  right_middle: {
    height: 375,
  },
  right_middle_logoBg: {
    width: 188.021,
    height: 187.5,
    flexShrink: 0,
    position: "absolute",
    right: 0,
    marginTop: 186,
    background: "#3E54FF",
    mixBlendMode: "exclusion",
  },
  right_middle_logo: {
    color: "#FFF",
    position: "absolute",
    display: "inline-flex",
    alignItems: "flex-start",
    paddingLeft: 33,
    paddingTop: 30,
  },
  right_middle_icon: {
    paddingRight: 14,
  },
  right_bottom: {
    height: 700,
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
    paddingTop: 70,
    paddingLeft: 33,
  },
  right_bottom_content: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
    width: 311,
    paddingTop: 40,
    paddingLeft: 33,
  },
});
const Section1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left_top}>
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "375px",
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
            height: "375px",
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
      <div className={classes.left_middle}>
        <div className={classes.left_middle_title}>Music and Video</div>
        <div className={classes.left_middle_content}>
          Creative works such as music and videos generate rights and royalties
          for their creators. These rights can be tokenized, allowing creators
          to raise funds by selling a portion of their future earnings while
          retaining control over their work.
        </div>
      </div>
      <div className={classes.left_bottom}>
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "375px",
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
      <div className={classes.right_bottom}>
        <div className={classes.right_bottom_title}>Real Estate</div>
        <div className={classes.right_bottom_content}>
          Real estate loans represent a claim on a physical property. These
          loans can be tokenized, allowing investors to gain exposure to the
          real estate market without theneed to manage physical properties.
          Tokenizing these real-world assets allows for greater liquidity,
          transparency, and accessibility. With Tomei, we bring the benefits of
          blockchain technology to these real-world assets, providing a new way
          for investors and asset owners to connect.
        </div>
      </div>
    </div>
  );
};

export default Section1;
