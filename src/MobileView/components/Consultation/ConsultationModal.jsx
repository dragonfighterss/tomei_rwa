import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Box, Typography } from "@mui/material";

const useStyles = makeStyles({
  modal: {
    color: "#FFF",
    backgroundColor: "#0A0A0A",
    position: "absolute",
    top: "60px",
    left: "0%",
    width: "100%",
    height: 820,
    border: "2px solid #000",
    p: 4,
    zIndex: 0,
  },
  modalHeader: {
    marginTop: 119,
    marginLeft: 73,
  },
  marginHeaderSpan: {
    fontFamily: "Rand",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "150%",
    letterSpacing: 0.44,
  },
  modalBtn: {
    padding: "20px 50px",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btnGroup: {
    justifyContent: "center",
    position: "absolute",
    marginTop: "110px !important",
    left: 31,
  },
});
const ConsultationModal = (props) => {
  const classes = useStyles();
  return (
    <div
      // open={props.open}
      // onClose={props.handleClose}
      // aria-labelledby="transition-modal-title"
      // aria-describedby="transition-modal-description"
      sx={{ position: "absolute" }}
    >
      <Box className={classes.modal}>
        <div className={classes.modalHeader} id="modal-modal-title">
          <Typography className={classes.marginHeaderSpan}>
            Schedule A
          </Typography>
          <Typography className={classes.marginHeaderTypography}>
            Consultation
          </Typography>
        </div>
        <Box
          id="modal-modal-description"
          sx={{ mt: 2 }}
          className={classes.btnGroup}
          textAlign="center"
        >
          <a
            target="_blank"
            href="https://www.react.com"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <Button
              className={classes.modalBtn}
              sx={{
                display: "block",
                color: "white",
                textAlign: "center",
                fontFamily: "Rand",
                fontSize: 22,
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "150%",
                letterSpacing: 0.44,
                borderRadius: 5,
                padding: "20px 50px 20px 50px",
                border: "1px solid #D9D9D9",
                width: "314px",
              }}
            >
              Calend.ly
            </Button>
          </a>
          <Button
            sx={{
              display: "block",
              color: "white",
              textAlign: "center",
              fontFamily: "Rand",
              fontSize: 22,
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "150%",
              letterSpacing: 0.44,
              borderRadius: 5,
              padding: "20px 25px 20px 25px",
              border: "1px solid #D9D9D9",
              marginTop: "20px",
              width: "314px",
              marginBottom: "60px",
            }}
            onClick={() => (window.location = "mailto:info@tomei.network")}
          >
            info@tomei.network
          </Button>
          <Button
            color="inherit"
            sx={{
              paddingTop: "27px",
              height: "5px",
              float: "left !important",
              color: "white",
              textDecoration: "underline",
            }}
            onClick={props.handleClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ConsultationModal;
