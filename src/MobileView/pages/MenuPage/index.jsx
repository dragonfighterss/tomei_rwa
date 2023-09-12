import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
    root: {
    display: "flex",
    background: "#000",
    color: "#FFF",
    height: 1060,
  },
  logo: {
    width: 156.563,
    height: 20,
    paddingTop: 20,
    paddingLeft: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  button: {
    fontFamily: "Rand",
    fontSize: 38,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "120%",
    letterSpacing: 0.38,
    textTransform: "capitalize",
  },
  btnGroup: {
    display: "flex",
    position: "absolute",
    right: 0,
    marginTop: 37,
    marginRight: 160,
  },
});

const MenuPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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

export default MenuPage;
