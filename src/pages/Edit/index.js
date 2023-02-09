import { useState, useEffect } from "react";

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
    "md:flex justify-center items-center px-6 md:px-0 gap-3 my-3 max-w-lg hover:border w-1/3",
  phoneInput: {
    ".MuiTelInput-Menu": {
      display: "none",
    },
  },
};

const initialValues = {
  // Images - Logos
  imageNavLogo1: "",
  imageNavLogo2: "",
  imageNavLogo3: "",
  // Images - Profile Photos
  imageLOProfile: "",
  imageR1Profile: "",
  imageR2Profile: "",
  // Title
  title: "Jackson Village Townhomes",
  subtitle: "Hendersonville's Brand New Townhome Community",
  // Loan Officer Info below
  loName: "James Harper",
  loTitle: "Branch Manager | NMLS 71317",
  loTeamName: "The Harper Team | FIMC",
  loCompany: "Fairway Independent Mortgage",
  loAddressLine1: "131 Saundersville Road, Suite 140",
  loAddressLine2: "Hendersonville, TN 37075",
  loMobileNumber: "615.991.1234",
  loOfficeNumber: "615.822.6220",
  loEmail: "james.harper@fairwaymc.com",
  // Realtor 1 Below
  r1Name: "Dee Ann Couche",
  r1Title: "REALTOR® | MLS 332841",
  r1TeamName: "",
  r1Company: "Parks Realty | Lakeside",
  r1AddressLine1: "530 Main Street",
  r1AddressLine2: "Hendersonville, TN 37075",
  r1MobileNumber: "615.498.0897",
  r1OfficeNumber: "615.824.5920",
  r1Email: "beccadeeann@parksathome.com",
  // Realtor 2 Below
  r2Name: "Becca Pendergrast",
  r2Title: "BROKER | MLS 285951",
  r2TeamName: "",
  r2Company: "Parks Realty | Lakeside",
  r2AddressLine1: "530 Main Street",
  r2AddressLine2: "Hendersonville, TN 37075",
  r2MobileNumber: "615.973.9291",
  r2OfficeNumber: "615.824.5920",
  r2Email: "beccadeeann@parksathome.com",
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

  useEffect(() => {
    const imagePlaceholders = {
      imageNavLogo1: fairwayLogo,
      imageNavLogo2: parksLogo,
      imageNavLogo3: kcgHomesLogo,
      imageFooterLogo1: fairwayLogo,
      imageFooterLogo2: parksLogo,
      imageFooterLogo3: parksLogo,
      // Images - Profile Photos
      imageLOProfile: jamesHarperProfile,
      imageR1Profile: deeAnnProfile,
      imageR2Profile: beccaProfile,
    };

    handleChange({ ...imagePlaceholders });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="bg-orange flex justify-end items-center gap-3 pr-3 py-1">
        Ready to Publish?
        <button className="bg-secondary p-2 rounded text-white shadow-md hover:bg-white hover:text-secondary hover:border-1 text-xs">
          Publish
        </button>
      </div>
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
          <nav className="flex bg-primary items-center justify-center gap-28 py-4 px-40">
            <div className="relative">
              <img
                width="300px"
                src={values.imageNavLogo1}
                alt="fairway independent mortgage corporation"
              />
              <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all text-white">
                Edit Logo <BsPencilSquare />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    handleChange({
                      imageNavLogo1: URL.createObjectURL(e.target.files[0]),
                    });
                  }}
                />
              </label>
            </div>
            <div className="relative">
              <img
                src={values.imageNavLogo2}
                alt="parks corporate logo"
                width="300px"
              />
              <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all text-white">
                Edit Logo <BsPencilSquare />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    handleChange({
                      imageNavLogo2: URL.createObjectURL(e.target.files[0]),
                    });
                  }}
                />
              </label>
            </div>
            <div className="relative">
              <img
                src={values.imageNavLogo3}
                alt="parks corporate logo"
                width="200px"
              />
              <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all text-white">
                Edit Logo <BsPencilSquare />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    handleChange({
                      imageNavLogo3: URL.createObjectURL(e.target.files[0]),
                    });
                  }}
                />
              </label>
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
              className="font-sans text-xl md:text-6xl font-bold hover:border border-white"
            >
              {values?.title}
            </h1>
            <h2
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleChange({ subtitle: e.target.innerHTML })}
              className="font-sans text-lg md:text-3xl md:font-bold hover:border border-white"
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
        <footer className="px-10 py-2 flex justify-center items-center bg-primary text-white text-left">
          {!isMobile ? (
            <>
              <div className={pageStyles.contactCard}>
                <div className="w-full relative">
                  <img
                    src={values.imageLOProfile}
                    alt="james harper profile"
                    width="200px"
                  />
                  <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all">
                    Edit Photo <BsPencilSquare />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        handleChange({
                          imageLOProfile: URL.createObjectURL(
                            e.target.files[0]
                          ),
                        });
                      }}
                    />
                  </label>
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
                      width="200px"
                      src={values.imageFooterLogo1}
                      alt="The Harper Team Logo"
                    />
                    <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all">
                      Edit Logo <BsPencilSquare />
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          handleChange({
                            imageFooterLogo1: URL.createObjectURL(
                              e.target.files[0]
                            ),
                          });
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className={pageStyles.contactCard}>
                <div className="w-full relative">
                  <img
                    width="200px"
                    src={values.imageR1Profile}
                    alt="dee anne profile"
                  />
                  <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all">
                    Edit Photo <BsPencilSquare />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        handleChange({
                          imageR1Profile: URL.createObjectURL(
                            e.target.files[0]
                          ),
                        });
                      }}
                    />
                  </label>
                </div>
                <div>
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleChange({ r1Name: e.target.innerHTML })}
                    className="text-base font-bold hover:border"
                  >
                    {values.r1Name}
                  </h4>
                  <h6
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleChange({ r1Title: e.target.innerHTML })
                    }
                    className="text-xs font-bold italic hover:border"
                  >
                    {"REALTOR® | MLS 332841"}
                  </h6>
                  <div className="text-xs hover:border">
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleChange({ r1Company: e.target.innerHTML })
                      }
                    >
                      {values.r1Company}
                    </p>
                    <p>
                      {"C: "}
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleChange({ r1MobileNumber: e.target.innerHTML })
                        }
                      >
                        {values.r1MobileNumber}
                      </span>
                    </p>
                    <p>
                      {"O: "}
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleChange({ r1OfficeNumber: e.target.innerHTML })
                        }
                      >
                        {values.r1OfficeNumber}
                      </span>
                    </p>
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleChange({ r1Email: e.target.innerHTML })
                      }
                    >
                      {values.r1Email}
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      width="200px"
                      src={values.imageFooterLogo2}
                      alt="parks logo"
                    />
                    <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all">
                      Edit Logo
                      <BsPencilSquare />
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          handleChange({
                            imageFooterLogo2: URL.createObjectURL(
                              e.target.files[0]
                            ),
                          });
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className={pageStyles.contactCard}>
                <div className="w-full relative">
                  <img
                    width="200px"
                    src={values.imageR2Profile}
                    alt="becca profile "
                  />
                  <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all">
                    Edit Photo <BsPencilSquare />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        handleChange({
                          imageR2Profile: URL.createObjectURL(
                            e.target.files[0]
                          ),
                        });
                      }}
                    />
                  </label>
                </div>
                <div>
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleChange({ r2Name: e.target.innerHTML })}
                    className="text-base font-bold hover:border"
                  >
                    {values.r2Name}
                  </h4>
                  <h6
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleChange({ r2Title: e.target.innerHTML })
                    }
                    className="text-xs font-bold italic hover:border"
                  >
                    {"REALTOR® | MLS 332841"}
                  </h6>
                  <div className="text-xs hover:border">
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleChange({ r2Company: e.target.innerHTML })
                      }
                    >
                      {values.r2Company}
                    </p>
                    <p>
                      {"C: "}
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleChange({ r2MobileNumber: e.target.innerHTML })
                        }
                      >
                        {values.r2MobileNumber}
                      </span>
                    </p>
                    <p>
                      {"O: "}
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleChange({ r2OfficeNumber: e.target.innerHTML })
                        }
                      >
                        {values.r2OfficeNumber}
                      </span>
                    </p>
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleChange({ r2Email: e.target.innerHTML })
                      }
                    >
                      {values.r1Email}
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      width="200px"
                      src={values.imageFooterLogo3}
                      alt="parks logo"
                    />
                    <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all">
                      Edit Logo
                      <BsPencilSquare />
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          handleChange({
                            imageFooterLogo3: URL.createObjectURL(
                              e.target.files[0]
                            ),
                          });
                        }}
                      />
                    </label>
                  </div>
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
