import { useState } from "react";
import "./styles/App.css";
import fairwayLogo from "./assets/logos/fairwayLogo.png";
import parksLogo from "./assets/logos/parksLogo.png";
import kcgHomesLogo from "./assets/logos/kcgHomesLogo.png";
import jamesHarperProfile from "./assets/photos/jamesHarperProfile.png";
import deeAnnProfile from "./assets/photos/deeAnnProfile.png";
import beccaProfile from "./assets/photos/beccaProfile.png";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { Button, Typography, TextField } from "@mui/material";
import { Button } from "@mui/material";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Required").typeError("Required"),
//   email: Yup.string().required("Required").typeError("Required"),
//   phoneNumber: Yup.string()
//     .test("test phone", "Please enter a valid phone number", (value) =>
//       isValidPhoneNumber(value)
//     )
//     .required(),
//   group: Yup.string().required(""),
//   homeType: Yup.string().required(""),
// });

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

export default function App() {
  const [open, setOpen] = useState(false);
  // const handleClick = () => {
  //   setOpen(!open);
  //   console.log("submit button clicked");
  // };

  return (
    <>
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
                setOpen(!open);
              }}
              variant="contained"
              color="primary"
            >
              sign in
            </Button>
            {/* <button onClick={handleClick}>SIGN IN</button>
            <button onClick={handleClick}>APPLY</button> */}
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
          <div className="modalContainer center fade-in-image">
            {/* <Iframe
              url="https://form.typeform.com/to/pFqs4Cw1"
              width="50%"
              height="1000px"
              display="initial"
              position="relative"
            /> */}
          </div>
        ) : null}
      </main>
    </>
  );
}
