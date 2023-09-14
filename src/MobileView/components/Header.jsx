import React from "react";
import { makeStyles } from "@mui/styles";
import { ReactComponent as LogoName } from "../../assets/images/Group_10830.svg";
import { ReactComponent as LogoSymbol } from "../../assets/images/T-Symbol1.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/Group_11098.svg";

const useStyles = makeStyles({
  header: {
    width: "100%",
    background: "#000000",
    color: "#FFF",
    height: 60,
    zIndex: 9999,
  },
  logo: {
    width: 156.563,
    height: 20,
    paddingTop: 20,
    paddingLeft: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  button: {
    fontFamily: "Rand",
    fontSize: "16.5",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: 0.33,
    textTransform: "capitalize",
  },
  btnGroup: {
    display: "flex",
    position: "absolute",
    right: 0,
    marginTop: 37,
    marginRight: 160,
  },
  LogoSymbol: {
    paddingRight: 15,
    width: 29.705,
  },
  LogoName: {
    width: 109.688,
    height: 10.589,
  },
  MenuIcon: {
    position: "absolute",
    right: 30,
    top: 18,
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <LogoSymbol className={classes.LogoSymbol} />
        <LogoName className={classes.LogoName} />
      </div>
      <MenuIcon className={classes.MenuIcon} onClick={props.handleOpenMemu} />
    </div>
  );
};

export default Header;
