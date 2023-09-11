import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Button, Box, Typography, Modal } from "@mui/material";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Homepage from "./page/Homepage";
import CaseStudiesPage from "./page/CaseStudiesPage";
import "./App.css";

const theme = createTheme();

const useStyles = makeStyles({
  modal: {
    color: "#FFF",
    backgroundColor: "#0A0A0A",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 476,
    height: 476,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "30px",
  },
  modalHeader: {
    marginTop: 38,
    marginLeft: 43,
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
    top: 214,
    left: 40,
  },
});
function App() {
  const classes = useStyles();
  const [page, setPage] = useState("homepage");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header handleChangePage={handleChangePage} handleOpen={handleOpen} />
        {page === "homepage" ? <Homepage /> : <CaseStudiesPage />}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
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
                  borderRadius: 20,
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  border: "1px solid #D9D9D9",
                  width: "400px",
                }}
              >
                Calend.ly
              </Button>
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
                  borderRadius: 20,
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  border: "1px solid #D9D9D9",
                  marginTop: "20px",
                  width: "400px",
                }}
              >
                info@tomei.network
              </Button>
                <Button
                  color="inherit"
                  sx={{
                    paddingTop: "27px",
                    height: "5px",
                    float: "left !important",
                    color:"white",
                    textDecoration: "underline"
                  }}
                >
                  Close
                </Button>
            </Box>
          </Box>
        </Modal>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
