import React from "react";
import { ReactComponent as Icon1 } from "../../../assets/images/Layer_1.svg";
import { ReactComponent as Icon2 } from "../../../assets/images/Group_11042.svg";
import { Divider, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 480,
    backgroundColor: "#141414",
    display: "flex",
    alignItems: "center",
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
  bottom: {
    paddingTop: 80,
    display: "inline-flex",
    alignItems: "flex-start",
  },
  content: {
    color: "#FAFAFA",
    fontFamily: "Rand",
    fontSize: 17.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: 0.35,
    paddingLeft: 50,
    width: 285,
  },
  line: {
    background: "#FFF",
    width: 0.638,
    height: 80,
  },
  icon: {
    paddingRight: 50,
  },
  block: {
    [theme.breakpoints.up("sm")]: {
      width: "24%",
      height: 80,
    },
    [theme.breakpoints.up("md")]: {
      width: "34%",
      height: 80,
    },
    [theme.breakpoints.up("lg")]: {
      width: "47%",
      height: 80,
    },
    [theme.breakpoints.up("xl")]: {
      width: "46%",
      height: 80,
    },
    display: "inline-flex",
    alignItems: "flex-start",
    paddingRight: 80.59,
  },
}));
const Section5 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div>
          <div>
            <div style={{ width: "585px" }}>
              <span className={classes.title}>Strategic investors</span>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.block}>
              <Icon1 className={classes.icon} />
              <Divider className={classes.line} />
              <Typography className={classes.content}>
                Susquehanna Private Equity Investments, LLLP
              </Typography>
              <div />
            </div>
            <div className={classes.block}>
              <Icon2 className={classes.icon} />
              <Divider className={classes.line} />
              <Typography className={classes.content}>
                Republic Capital, the worlds largest private marketplace with
                2.5M users
              </Typography>
              <div />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section5;
