import React from "react";
import { ReactComponent as Icon1 } from "../../../assets/images/Layer_1.svg";
import { ReactComponent as Icon2 } from "../../../assets/images/Group_11042.svg";
import { Divider, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: 375,
    height: 740,
    backgroundColor: "#141414",
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
    paddingTop: 120,
  },
  content: {
    color: "#FAFAFA",
    fontFamily: "Rand",
    fontSize: 17.5,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: 0.35,
    paddingTop: 50,
    width: 285,
  },
  line: {
    background: "#FFF",
    width: 80,
    height: 1,
  },
  icon: {
    paddingBottom: 50,
  },
  block: {
    width: 315,
    height: 200,
    paddingBottom:80,
    paddingLeft: 22,
  },
});
const Section5 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {/* <div>
          <div style={{ width: "585px" }}>
            <span className={classes.title}>Strategic investors</span>
          </div>
        </div> */}
        <Container>
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
        </Container>
      </div>
    </div>
  );
};

export default Section5;
