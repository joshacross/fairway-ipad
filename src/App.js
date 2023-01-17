import { useState } from "react";
import "./styles/App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import fairwayLogo from "./assets/logos/fairwayLogo.png";
import parksLogo from "./assets/logos/parksLogo.png";
import kcgHomesLogo from "./assets/logos/kcgHomesLogo.png";
import jamesHarperProfile from "./assets/photos/jamesHarperProfile.png";
import deeAnnProfile from "./assets/photos/deeAnnProfile.png";
import beccaProfile from "./assets/photos/beccaProfile.png";
import jacksonOnMain from "./assets/photos/jacksonVillageTownhomes.png";
import qrcode from "./assets/photos/james_qrcode.png";
import { Formik } from "formik";
import * as Yup from "yup";
import PhoneNumberInput, { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "./components/common/PhoneInput";
import {
  Button,
  Box,
  Typography,
  Modal,
  TextField,
  Checkbox,
  InputLabel,
} from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required").typeError("Required"),
  email: Yup.string().required("Required").typeError("Required"),
  phoneNumber: Yup.string()
    .test("test phone", "Please enter a valid phone number", (value) =>
      isValidPhoneNumber(value)
    )
    .required(),
  group: Yup.string().required(""),
  homeType: Yup.string().required(""),
});

const classes = {
  button: {
    backgroundColor: "#006848",
    width: "10rem",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textDecoration: "none",
    letterSpacing: "0.25rem",
    fontSize: "1rem",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  },
};

// const buttonStyles = {
//   "& MuiBackdrop-root:hover": {
//     backgroundColor: "green !important",
//   },
//   backgroundColor: "white",
//   color: "black",
// };

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "secondary.main",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function App() {
  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const handleClose = () => setOpen(false);
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  // const handleClick = () => {
  //   setOpen(!open);
  //   console.log("submit button clicked");
  // };

  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          <nav style={classes.nav}>
            <img
              width="200rem"
              src={fairwayLogo}
              alt="fairway independent mortgage corporation"
            />
            <img width="200rem" src={parksLogo} alt="parks corporate logo" />
            <img
              width="133.3333rem"
              src={kcgHomesLogo}
              alt="parks corporate logo"
            />
          </nav>
          {/* Body */}
          <div className="bodyContainer">
            <div className="pageTitle">
              <h1>Jackson Village Townhomes</h1>
              <h2>Hendersonvilles Brand New Townhome Community</h2>
            </div>
            <div className="buttons">
              <Button
                onClick={() => {
                  setSignIn(true);
                  setOpen(!open);
                }}
                variant="contained"
                color="darkPrimary"
              >
                sign in
              </Button>
              <Button
                // eslint-disable-next-line
                onClick={() => {
                  setSignIn(false);
                  setOpen(!open);
                }}
                variant="contained"
                color="darkPrimary"
                // sx={buttonStyles}
              >
                apply
              </Button>
            </div>
          </div>
          <footer>
            <div className="contactCard">
              <img src={jamesHarperProfile} alt="james harper profile" />
              <div>
                <h4>James Harper</h4>
                <p className="title">Branch Manager | NMLS 71317</p>
                <p>Fairway Independent Mortgage Corp.</p>
                <p>cell: 615.991.1234 | office: 615.822.6220</p>

                <p style={{ marginBottom: "0.5rem" }}>
                  email: james.harper@fairwaymc.com
                </p>
                <img src={fairwayLogo} alt="james harper profile " />
              </div>
            </div>
            <div className="contactCard">
              <img src={deeAnnProfile} alt="dee anne profile " />
              <div>
                <h4>Dee Ann Couche</h4>
                <p className="title">REALTOR® | MLS 332841</p>
                <p>Parks Realty | Lakeside</p>
                <p>office: 615.824.5920 | cell: cell: 615.498.0897</p>
                <p>email: beccadeeann@parksathome.com</p>
                <img src={parksLogo} alt="parks logo" />
              </div>
            </div>
            <div className="contactCard">
              <img src={beccaProfile} alt="becca profile " />
              <div className="contactInfo">
                <h4>Becca Pendergrast</h4>
                <p className="title">BROKER | MLS 285951</p>
                <p>Parks Realty | Lakeside</p>
                <p>mobile: 615.973.9291 | office: 615.824.5920</p>
                <p>email: beccadeeann@parksathome.com</p>
                <img src={parksLogo} alt="parks logo" />
              </div>
            </div>
          </footer>
          {open ? (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                {signIn ? (
                  <>
                    <Box p={2}>
                      <img src={jacksonOnMain} alt="jackson on main logo" />
                      <Typography>Sign In</Typography>
                      <Formik
                        validateOnBlur={false}
                        validateOnChange={false}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        {({
                          values,
                          errors,
                          setFieldValue,
                          setFieldError,
                          handleSubmit,
                          isValid,
                          setValues,
                        }) => {
                          return (
                            <>
                              <form
                                onSubmit={handleSubmit}
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  gap: "10px",
                                }}
                              >
                                <TextField
                                  id="name"
                                  label="name"
                                  value={values.name}
                                />
                                <TextField />
                                <InputLabel>Phone Number</InputLabel>
                                <PhoneNumberInput
                                  name="phoneNumber"
                                  inputComponent={PhoneInput}
                                  country="US"
                                  defaultCountry="US"
                                  placeholder="+1 (555) 555-5555"
                                  value={values.phoneNumber}
                                  smartCaret={true}
                                  error={Boolean(errors.phoneNumber)}
                                  onChange={(phoneNumber) => {
                                    setFieldValue("phoneNumber", phoneNumber);
                                    setFieldError("phoneNumber", undefined);
                                  }}
                                />
                                <Typography>Check the box</Typography>
                                <Checkbox />
                                <Button
                                  disabled={!isValid}
                                  variant="contained"
                                  color="primary"
                                >
                                  Sign In
                                </Button>
                              </form>
                            </>
                          );
                        }}
                      </Formik>
                    </Box>
                  </>
                ) : (
                  <>
                    <Typography>Apply</Typography>
                    <img
                      src={qrcode}
                      alt="QR Code - James Harper - Fairway Apply Now Quick Link"
                    />
                  </>
                )}
              </Box>
            </Modal>
          ) : null}
        </main>
      </ThemeProvider>
    </>
  );
}
