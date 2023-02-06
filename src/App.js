import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import fairwayLogo from "./assets/logos/fairwayLogo.png";
import parksLogo from "./assets/logos/parksLogo.png";
import kcgHomesLogo from "./assets/logos/kcgHomesLogo.png";
import jamesHarperProfile from "./assets/photos/jamesHarperProfile.png";
import deeAnnProfile from "./assets/photos/deeAnnProfile.png";
import beccaProfile from "./assets/photos/beccaProfile.png";
import blendModal from "./assets/photos/blendModalButton.png";
import Iframe from "react-iframe";
import { Button, Box, Modal, AppBar, Toolbar, IconButton } from "@mui/material";
import useDevice from "./utils/hooks/useDevice";

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
  contactCard:
    "md:flex justify-center items-center px-6 md:px-0 gap-3 my-3 max-w-lg",
  phoneInput: {
    ".MuiTelInput-Menu": {
      display: "none",
    },
  },
};

export default function App() {
  const { isMobile } = useDevice();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [apply, setApply] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className="flex flex-col justify-between m-auto text-center bg-home-page bg-no-repeat bg-top bg-cover h-screen">
          {isMobile ? (
            <AppBar position="static" className="mb-6">
              <Toolbar className="flex justify-between">
                <IconButton edge="start" color="secondary">
                  =
                </IconButton>
                <img
                  width="50%"
                  src={fairwayLogo}
                  alt="fairway independent mortgage corporation"
                />
              </Toolbar>
            </AppBar>
          ) : (
            <nav className="flex bg-primary items-center justify-center gap-28 py-1 px-40">
              <div>
                <img
                  src={fairwayLogo}
                  alt="fairway independent mortgage corporation"
                />
              </div>
              <div>
                <img src={parksLogo} alt="parks corporate logo" />
              </div>
              <div>
                <img src={kcgHomesLogo} alt="parks corporate logo" />
              </div>
            </nav>
          )}
          {/* Body */}
          <div className="flex flex-col items-center justify-between gap-20">
            <div className="text-center mb-12 px-10">
              <h1 className="font-sans text-xl md:text-6xl font-bold">
                Jackson Village Townhomes
              </h1>
              <h2 className="font-sans text-lg md:text-3xl md:font-bold">
                Hendersonvilles Brand New Townhome Community
              </h2>
            </div>
            <div className="flex justify-center items-center gap-10 md:gap-40">
              <Button
                size={isMobile ? "" : "large"}
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
                size={isMobile ? "" : "large"}
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
          <footer className="px-10 py-3 flex justify-center items-center bg-primary text-white text-left">
            {!isMobile ? (
              <>
                <div className={pageStyles.contactCard}>
                  <div className="w-full">
                    <img src={jamesHarperProfile} alt="james harper profile" />
                  </div>
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
                      width="90%"
                      src={fairwayLogo}
                      alt="james harper profile "
                    />
                  </div>
                </div>
                <div className={pageStyles.contactCard}>
                  <div className="w-full">
                    <img src={deeAnnProfile} alt="dee anne profile " />
                  </div>
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
                    <img width="75%" src={parksLogo} alt="parks logo" />
                  </div>
                </div>
                <div className={pageStyles.contactCard}>
                  <div className="w-full">
                    <img src={beccaProfile} alt="becca profile " />
                  </div>
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
                    <img width="75%" src={parksLogo} alt="parks logo" />
                  </div>
                </div>
              </>
            ) : (
              <p className="text-xs">
                {
                  "© 2023 The Harper Team - Fairway Independent Mortgage Corporation. All Rights Reserved."
                }
              </p>
            )}
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
                  <div className="h-[90vh]">
                    <Iframe
                      url="https://property.fairwaymc.com/home-loan-lead-form/apply-21905432"
                      width="100%"
                      height="100%"
                      display="block"
                      position="relative"
                    />
                  </div>
                )}
                {apply && (
                  <div>
                    <a href="https://apply.fairwaymc.com/#/milestones?referrerId=james.harper%40fairwaymc.com">
                      <img src={blendModal} className="w-full" />
                    </a>
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
