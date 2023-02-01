import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import fairwayLogo from "./assets/logos/fairwayLogo.png";
import parksLogo from "./assets/logos/parksLogo.png";
import kcgHomesLogo from "./assets/logos/kcgHomesLogo.png";
import jamesHarperProfile from "./assets/photos/jamesHarperProfile.png";
import deeAnnProfile from "./assets/photos/deeAnnProfile.png";
import beccaProfile from "./assets/photos/beccaProfile.png";
import qrcode from "./assets/photos/james_qrcode.png";
import Iframe from "react-iframe";
import { Button, Box, Typography, Modal } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "secondary.main",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const pageStyles = {
  contactCard: "flex items-center gap-3 max-w-sm my-6",
  phoneInput: {
    ".MuiTelInput-Menu": {
      display: "none",
    },
  },
};

export default function App() {
  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [apply, setApply] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <main
          className={`flex flex-col justify-between m-auto text-center bg-home-page bg-no-repeat bg-top bg-cover h-screen`}
        >
          <nav className="flex bg-primary flex-wrap items-center justify-center gap-40 p-1 text-white">
            <img
              width="200rem"
              src={fairwayLogo}
              alt="fairway independent mortgage corporation"
            />
            <img width="200rem" src={parksLogo} alt="parks corporate logo" />
            <img
              width="133.33rem"
              src={kcgHomesLogo}
              alt="parks corporate logo"
            />
          </nav>
          {/* Body */}
          <div className="flex flex-col items-center justify-between gap-20">
            <div className="text-center mb-12">
              <h1 className="font-sans text-6xl font-bold">
                Jackson Village Townhomes
              </h1>
              <h2 className="font-sans text-3xl font-bold">
                Hendersonvilles Brand New Townhome Community
              </h2>
            </div>
            <div className="flex justify-center items-center gap-40">
              <Button
                size="large"
                onClick={() => {
                  setApply(false);
                  setSignIn(true);
                  setOpen(!open);
                }}
                // href="https://property.fairwaymc.com/home-loan-lead-form/apply-21905432"
                variant="contained"
                color="darkPrimary"
              >
                sign in
              </Button>
              <Button
                size="large"
                // eslint-disable-next-line
                onClick={() => {
                  setSignIn(false);
                  setApply(true);
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
          <footer className="px-6 py-0 flex justify-center gap-4 content-center items-center bg-primary text-white text-left">
            <div className={pageStyles.contactCard}>
              <img
                className="w-40"
                src={jamesHarperProfile}
                alt="james harper profile"
              />
              <div>
                <h4 className="text-base font-bold">James Harper</h4>
                <h6 className="font-bold italic text-xs">
                  Branch Manager | NMLS 71317
                </h6>
                <div className="text-xs">
                  <p>Fairway Mortgage Corp.</p>
                  <p>C: 615.991.1234</p>
                  <p>O:615.822.6220</p>
                  <p style={{ marginBottom: "0.5rem" }}>
                    james.harper@fairwaymc.com
                  </p>
                </div>
                <img
                  className="w-40"
                  src={fairwayLogo}
                  alt="james harper profile "
                />
              </div>
            </div>
            <div className={pageStyles.contactCard}>
              <img
                className="w-40"
                src={deeAnnProfile}
                alt="dee anne profile "
              />
              <div>
                <h4 className="text-base font-bold">Dee Ann Couche</h4>
                <h6 className="text-xs font-bold italic">
                  {"REALTOR® | MLS 332841"}
                </h6>
                <div className="text-xs">
                  <p>Parks Realty | Lakeside</p>
                  <p>office: 615.824.5920 | cell: cell: 615.498.0897</p>
                  <p>beccadeeann@parksathome.com</p>
                </div>
                <img className="w-40" src={parksLogo} alt="parks logo" />
              </div>
            </div>
            <div className={pageStyles.contactCard}>
              <img className="w-40" src={beccaProfile} alt="becca profile " />
              <div className="contactInfo">
                <h4 className="text-base font-bold">Becca Pendergrast</h4>
                <h6 className="text-xs font-bold italic">
                  BROKER | MLS 285951
                </h6>
                <div className="text-xs">
                  <p>Parks Realty | Lakeside</p>
                  <p>M: 615.973.9291</p>
                  <p>O: 615.824.5920</p>
                  <p>beccadeeann@parksathome.com</p>
                </div>
                <img className="w-40" src={parksLogo} alt="parks logo" />
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
                {signIn && (
                  <Iframe
                    url="https://property.fairwaymc.com/home-loan-lead-form/apply-21905432"
                    width="100%"
                    height="650vh"
                    id=""
                    className=""
                    display="block"
                    position="relative"
                  />
                )}
                {apply && (
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center justify-center w-full">
                      <Typography variant="h5">Scan QR Code</Typography>
                      <img
                        src={qrcode}
                        alt="QR Code - James Harper - Fairway Apply Now Quick Link"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center border-l-2 border-primary h-96 w-full">
                      <Button
                        size="large"
                        variant="contained"
                        href="https://apply.fairwaymc.com/#/milestones?referrerId=james.harper%40fairwaymc.com"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                )}
              </Box>
            </Modal>
          ) : null}
        </main>
      </ThemeProvider>
    </>
  );
}
