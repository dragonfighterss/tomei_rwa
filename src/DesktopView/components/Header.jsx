import React from "react";
import { makeStyles } from "@mui/styles";
import { ReactComponent as LogoName } from "../../assets/images/Group_10830.svg";
import { ReactComponent as LogoSymbol } from "../../assets/images/T-Symbol1.svg";
import { Button, Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    background: "#000000",
    color: "#FFF",
    height: 100,
  },
  logo: {
    width: 419.188,
    paddingTop: 36,
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
    marginTop: 37,
    float: "right",
    right: 0,
  },
  LogoSymbol: {
    width: 42,
    height: 28,
  },
  LogoName: {
    marginTop: 7,
    position: "absolute",
    width: 153,
    height: 15,
    paddingLeft: 20,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Container maxWidth="lg">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={classes.logo}>
            <LogoSymbol className={classes.LogoSymbol} />
            <LogoName className={classes.LogoName} />
          </div>
          <div className={classes.btnGroup}>
            <Button
              className={classes.button}
              onClick={() => props.handleChangePage("homepage")}
              sx={{ color: "white", paddingRight: "30px" }}
            >
              Technology
            </Button>
            <Button
              className={classes.button}
              onClick={() => props.handleChangePage("caseStudiesPage")}
              sx={{ color: "white", paddingRight: "30px" }}
            >
              Case Studies
            </Button>
            <Button
              className={classes.button}
              onClick={props.handleOpenModal}
              sx={{ color: "white" }}
            >
              Consultation
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
