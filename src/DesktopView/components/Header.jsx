import React from "react";
import { makeStyles } from "@mui/styles";
import { ReactComponent as LogoName } from "../../assets/images/Group_10830.svg";
import { ReactComponent as LogoSymbol } from "../../assets/images/T-Symbol1.svg";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  header: {
    display: "flex",
    background: "#000000",
    color: "#FFF",
    height: 100,
  },
  logo: {
    width: 219.188,
    height: 28,
    paddingTop: 36,
    paddingLeft: 160,
    justifyContent: "center",
    alignItems: "center",
    gap: 24.037,
    flexShrink: 0,
  },
  button: {
    fontFamily: "Rand",
    fontSize: "16.5px",
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
    paddingRight: 20,
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <LogoSymbol className={classes.LogoSymbol} />
        <LogoName />
      </div>
      <div className={classes.btnGroup}>
        <Button
          className={classes.button}
          onClick={() => props.handleChangePage("homepage")}
          sx={{ color: "white" }}
        >
          Technology
        </Button>
        <Button
          className={classes.button}
          onClick={() => props.handleChangePage("caseStudiesPage")}
          sx={{ color: "white", paddingLeft: "30px" }}
        >
          Case Studies
        </Button>
        <Button
          className={classes.button}
          onClick={props.handleOpen}
          sx={{ color: "white", paddingLeft: "30px" }}
        >
          Consultation
        </Button>
      </div>
    </div>
  );
};

export default Header;
