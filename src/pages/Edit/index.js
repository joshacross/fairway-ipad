import { useState } from "react";

import fairwayLogo from "../../assets/logos/fairwayLogo.png";
import parksLogo from "../../assets/logos/parksLogo.png";
import kcgHomesLogo from "../../assets/logos/kcgHomesLogo.png";
import jamesHarperProfile from "../../assets/photos/jamesHarperProfile.png";
import deeAnnProfile from "../../assets/photos/deeAnnProfile.png";
import beccaProfile from "../../assets/photos/beccaProfile.png";
import blendModal from "../../assets/photos/blendModalButton.png";
import Iframe from "react-iframe";
import { Button, Box, Modal, AppBar, Toolbar, IconButton } from "@mui/material";
import { BsPencilSquare } from "react-icons/bs";
import useDevice from "../../utils/hooks/useDevice";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  maxWidth: "1000px",
  bgcolor: "secondary.main",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const pageStyles = {
  contactCard:
    "md:flex justify-center items-center px-6 md:px-0 gap-3 my-3 max-w-lg hover:border",
  phoneInput: {
    ".MuiTelInput-Menu": {
      display: "none",
    },
  },
};

const initialValues = {
  title: "Jackson Village Townhomes",
  subtitle: "Hendersonville's Brand New Townhome Community",
  loName: "James Harper",
  loTitle: "Branch Manager | NMLS 71317",
  loTeamName: "The Harper Team | FIMC",
  loCompany: "Fairway Independent Mortgage",
  loAddressLine1: "131 Saundersville Road, Suite 140",
  loAddressLine2: "Hendersonville, TN 37075",
  loMobileNumber: "615.991.1234",
  loOfficeNumber: "615.822.6220",
  loEmail: "james.harper@fairwaymc.com",
  r1Name: "James Harper",
  r1Title: "Branch Manager | NMLS 71317",
  r1TeamName: "The Harper Team | FIMC",
  r1Company: "Fairway Independent Mortgage",
  r1AddressLine1: "131 Saundersville Road, Suite 140",
  r1AddressLine2: "Hendersonville, TN 37075",
  r1MobileNumber: "615.991.1234",
  r1OfficeNumber: "615.822.6220",
  r1Email: "james.harper@fairwaymc.com",
  r2Name: "James Harper",
  r2Title: "Branch Manager | NMLS 71317",
  r2TeamName: "The Harper Team | FIMC",
  r2Company: "Fairway Independent Mortgage",
  r2AddressLine1: "131 Saundersville Road, Suite 140",
  r2AddressLine2: "Hendersonville, TN 37075",
  r2MobileNumber: "615.991.1234",
  r2OfficeNumber: "615.822.6220",
  r2Email: "james.harper@fairwaymc.com",
};

const Edit = () => {
  const { isMobile } = useDevice();
  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [apply, setApply] = useState(false);
  const handleClose = () => setOpen(false);
  const [values, setValues] = useState(initialValues);

  const handleChange = (obj) => {
    const newValues = { ...values, ...obj };
    setValues(newValues);
  };

  console.log("values", values);

  return (
    <>
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
            <h1
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleChange({ title: e.target.innerHTML })}
              className="font-sans text-xl md:text-6xl font-bold"
            >
              {values?.title}
            </h1>
            <h2
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleChange({ subtitle: e.target.innerHTML })}
              className="font-sans text-lg md:text-3xl md:font-bold"
            >
              {values?.subtitle}
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
                <div className="w-full relative">
                  <img src={jamesHarperProfile} alt="james harper profile" />
                  <div className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 transition-all">
                    Edit Photo
                    <BsPencilSquare />
                  </div>
                </div>
                <div>
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleChange({ loName: e.target.innerHTML })}
                    className="text-base font-bold hover:border"
                  >
                    {values.loName}
                  </h4>
                  <h6
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleChange({ loTitle: e.target.innerHTML })
                    }
                    className="font-bold italic text-xs hover:border"
                  >
                    {values.loTitle}
                  </h6>
                  <div className="text-xs hover:border">
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleChange({ loCompany: e.target.innerHTML })
                      }
                    >
                      {values.loCompany}
                    </p>
                    <p>
                      C:{" "}
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleChange({ loMobileNumber: e.target.innerHTML })
                        }
                      >
                        {values.loMobileNumber}
                      </span>
                    </p>
                    <p>
                      O:{" "}
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleChange({ loOfficeNumber: e.target.innerHTML })
                        }
                      >
                        {values.loOfficeNumber}
                      </span>
                    </p>
                    <p
                      className="mb-2"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleChange({ loEmail: e.target.innerHTML })
                      }
                    >
                      {values.loEmail}
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      width="90%"
                      src={fairwayLogo}
                      alt="The Harper Team Logo"
                    />
                    <div className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full p-2 opacity-0 hover:opacity-100 transition-all">
                      Edit Logo
                      <BsPencilSquare />
                    </div>
                  </div>
                </div>
              </div>
              <div className={pageStyles.contactCard}>
                <div className="w-full relative">
                  <img src={deeAnnProfile} alt="dee anne profile " />
                  <div className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 transition-all">
                    Edit Photo
                    <BsPencilSquare />
                  </div>
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
                <div className="mx-auto">
                  <a href="https://apply.fairwaymc.com/#/milestones?referrerId=james.harper%40fairwaymc.com">
                    <img
                      src={blendModal}
                      className="w-full"
                      alt="Fairway - Application - Apply Now"
                    />
                  </a>
                </div>
              )}
            </Box>
          </Modal>
        ) : null}
      </main>
    </>
  );
};

export default Edit;
