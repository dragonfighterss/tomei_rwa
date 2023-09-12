import React from "react";
import { Divider, Typography } from "@mui/material";
import { ReactComponent as Icon1 } from "../../assets/images/Group _11084.svg";
import { ReactComponent as Icon2 } from "../../assets/images/Group_11085.svg";
import { ReactComponent as Icon3 } from "../../assets/images/Group _11086.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 900,
    backgroundColor: "#000",
  },
  top: {
    paddingTop: 90,
    paddingLeft: 160,
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
    height: 760,
    width: 1000,
    paddingTop: 132,
    paddingLeft: 106,
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 50,
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
  },
  content1: {
    color: "#FAFAFA",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
  },
  content2: {
    color: "#FBA850",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
  },
  block: {
    width: 285,
    height: 279,
    marginRight: 115,
    float: "left",
  },
});
const SecondComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div style={{ width: "488px" }}>
          <span className={classes.title}>
            In-Demand Assets that Maximize Revenue and Reduce Costs
          </span>
        </div>
        <div style={{ width: "554px", paddingTop: "40px" }}>
          <span className={classes.content}>
            Proprietary technology powers a platform that delivers unparalleled
            transparency and compliance, while maintaining complete control over
            access and privacy along with optimized transactions that drive down
            costs.
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
              ZK-Cryptography
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
            <Typography className={classes.content1}>Cutting-Edge</Typography>
            <Typography className={classes.content2}>
              ZK-Cryptography
            </Typography>
            <Typography className={classes.content1}>
              Ultimate Privacy
            </Typography>
          </div>
          <div />
        </div>
        <div className={classes.block}>
          <Icon3 className={classes.icon} />
          <Divider className={classes.line} />
          <div className={classes.contentGroup}>
            <Typography className={classes.content1}>Cutting-Edge</Typography>
            <Typography className={classes.content2}>
              ZK-Cryptography
            </Typography>
            <Typography className={classes.content1}>
              Ultimate Privacy
            </Typography>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
