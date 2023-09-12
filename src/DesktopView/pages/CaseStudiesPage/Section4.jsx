import React from "react";
import { ReactComponent as LogoName } from "../../../assets/images/Group_10831.svg";
import { ReactComponent as LogoSymbol } from "../../../assets/images/T-Symbol.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 640,
    backgroundColor: "#0A0A0A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 176,
    height: 100,
    display: "flex",
    flexShrink: 0,
    flexDirection: "column",
  },
  symbol: {
    paddingBottom: 32.68,
    paddingLeft: 49,
  },
});
const Section4 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <LogoSymbol className={classes.symbol} />
        <LogoName />
      </div>
    </div>
  );
};

export default Section4;
