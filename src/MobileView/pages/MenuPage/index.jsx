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
  btnGroup: {
    display: "flex",
    flexShrink: 0,
    flexDirection: "column",
    position: "absolute",
    marginTop: 100,
    marginRight: 30,
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
          sx={{
            color: "#FFF",
            fontFamily: "Rapid ST Trial",
            fontSize: "38px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "120%",
            letterSpacing: 0.38,
            textTransform: "capitalize",
            marginBottom: "40px",
            width: 315,
            height: 46,
          }}
        >
          Technology
        </Button>
        <Button
          className={classes.button}
          onClick={() => props.handleChangePage("caseStudiesPage")}
          sx={{
            color: "#FFF",
            fontFamily: "Rapid ST Trial",
            fontSize: "38px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "120%",
            letterSpacing: 0.38,
            textTransform: "capitalize",
            marginBottom: "40px",
            width: 315,
            height: 46,
          }}
        >
          Case Studies
        </Button>
        <Button
          className={classes.button}
          onClick={props.handleOpen}
          sx={{
            color: "#FFF",
            fontFamily: "Rapid ST Trial",
            fontSize: "38px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "120%",
            letterSpacing: 0.38,
            textTransform: "capitalize",
            width: 315,
            height: 46,
          }}
        >
          Consultation
        </Button>
      </div>
    </div>
  );
};

export default MenuPage;
