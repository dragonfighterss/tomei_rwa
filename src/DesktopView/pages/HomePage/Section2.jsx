import React from "react";
import { Divider, Typography, Container } from "@mui/material";
import { ReactComponent as Icon1 } from "../../../assets/images/Group _11084.svg";
import { ReactComponent as Icon2 } from "../../../assets/images/Group_11085.svg";
import { ReactComponent as Icon3 } from "../../../assets/images/Group _11086.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 900,
    backgroundColor: "#000",
    display: "flex",
  },
  top: {
    paddingTop: 90,
  },
  title: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    letterSpacing: 0.38,
  },
  content: {
    color: "#fff",
    fontFamily: "Rand",
    fontSize: 17.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: 0.35,
  },
  bottom: {
    [theme.breakpoints.up("sm")]: {
      height: 760,
      width: 872,
      paddingTop: 132,
    },
    [theme.breakpoints.up("md")]: {
      height: 760,
      width: "100%",
      paddingTop: 132,
    },
    [theme.breakpoints.up("lg")]: {
      height: 760,
      width: "100%",
      paddingTop: 132,
    },
    [theme.breakpoints.up("xl")]: {
      height: 760,
      width: "100%",
      paddingTop: 132,
    },
    display: "inline-flex",
    alignItems: "flex-start",
  },
  line: {
    background: "#FFF",
    width: 80,
    height: 0.638,
  },
  icon: {
    paddingBottom: 50,
  },
  contentGroup: {
    paddingTop: 50,
    width: 300,
  },
  content1: {
    color: "#FAFAFA",
    fontSize: "22px !important",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
  },
  content2: {
    color: "#FBA850",
    fontSize: "22px !important",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
  },
  block: {
    [theme.breakpoints.up("sm")]: {
      width: 100,
      height: 279,
      marginRight: 115,
    },
    [theme.breakpoints.up("md")]: {
      width: 181,
      height: 279,
      marginRight: 115,
    },
    [theme.breakpoints.up("lg")]: {
      width: 285,
      height: 279,
      marginRight: 115,
    },
    [theme.breakpoints.up("xl")]: {
      width: 285,
      height: 279,
      marginRight: 115,
    },
  },
}));
const Section2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.top}>
          <div style={{ width: "488px" }}>
            <span className={classes.title}>
              In-Demand Assets that Maximize Revenue and Reduce Costs
            </span>
          </div>
          <div style={{ width: "554px", paddingTop: "40px" }}>
            <span className={classes.content}>
              Proprietary technology powers a platform that delivers
              unparalleled transparency and compliance, while maintaining
              complete control over access and privacy along with optimized
              transactions that drive down costs.
            </span>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.block}>
            <Icon1 className={classes.icon} />
            <Divider className={classes.line} />
            <div className={classes.contentGroup}>
              <Typography className={classes.content1}>Cutting-Edge</Typography>
              <Typography className={classes.content2}>
                ZK-Cryptography,
              </Typography>
              <Typography className={classes.content1}>
                Ultimate Privacy
              </Typography>
            </div>
            <div />
          </div>
          <div className={classes.block}>
            <Icon2 className={classes.icon} />
            <Divider className={classes.line} />
            <div className={classes.contentGroup}>
              <Typography className={classes.content1}>Advanced</Typography>
              <Typography className={classes.content2}>
                Programmability,
              </Typography>
              <Typography className={classes.content1}>
                Seamless Compliance
              </Typography>
            </div>
            <div />
          </div>
          <div className={classes.block}>
            <Icon3 className={classes.icon} />
            <Divider className={classes.line} />
            <div className={classes.contentGroup}>
              <Typography className={classes.content1}>Unparalleled</Typography>
              <Typography className={classes.content2}>Attestation,</Typography>
              <Typography className={classes.content1}>
                Unmatched Confidence
              </Typography>
            </div>
            <div />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section2;
