// import { useState } from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./styles/theme";
// import fairwayLogo from "./assets/logos/fairwayLogo.png";
// import parksLogo from "./assets/logos/parksLogo.png";
// import kcgHomesLogo from "./assets/logos/kcgHomesLogo.png";
// import jamesHarperProfile from "./assets/photos/jamesHarperProfile.png";
// import deeAnnProfile from "./assets/photos/deeAnnProfile.png";
// import beccaProfile from "./assets/photos/beccaProfile.png";
// import jacksonOnMain from "./assets/photos/jacksonVillageTownhomes.png";
// import qrcode from "./assets/photos/james_qrcode.png";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import PhoneNumberInput, { isValidPhoneNumber } from "react-phone-number-input";
// import PhoneInput from "./components/common/PhoneInput";
// import Iframe from "react-iframe";
// import {
//   Button,
//   Box,
//   Typography,
//   Modal,
//   TextField,
//   Checkbox,
//   InputLabel,
//   FormControlLabel,
// } from "@mui/material";
// import { MuiTelInput } from "mui-tel-input";

// const initialValues = {
//   name: "",
//   email: "",
//   phoneNumber: "",
//   isTexting: false,
// };

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Required").typeError("Required"),
//   email: Yup.string().required("Required").typeError("Required"),
//   phoneNumber: Yup.string()
//     .test("test phone", "Please enter a valid phone number", (value) =>
//       isValidPhoneNumber(value)
//     )
//     .required(),
// });

// const classes = {
//   button: {
//     backgroundColor: "#006848",
//     width: "10rem",
//     height: "5rem",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "white",
//     textDecoration: "none",
//     letterSpacing: "0.25rem",
//     fontSize: "1rem",
//     borderRadius: "5px",
//     boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
//   },
// };

// // const buttonStyles = {
// //   "& MuiBackdrop-root:hover": {
// //     backgroundColor: "green !important",
// //   },
// //   backgroundColor: "white",
// //   color: "black",
// // };

// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80vw",
//   bgcolor: "secondary.main",
//   border: "2px solid #000",
//   borderRadius: "10px",
//   boxShadow: 24,
//   p: 4,
// };

// const pageStyles = {
//   contactCard: "flex items-center gap-3 max-w-sm my-6",
//   phoneInput: {
//     ".MuiTelInput-Menu": {
//       display: "none",
//     },
//   },
// };

// const flagDisplay = {
//   display: {
//     "& .PhoneInputCountry": {
//       display: "none",
//     },
//   },
// };

// export default function App() {
//   const [open, setOpen] = useState(false);
//   const [signIn, setSignIn] = useState(false);
//   const handleClose = () => setOpen(false);
//   const handleSubmit = (values) => {
//     handleClose();
//     console.log("Submitted Values", values);
//   };

//   // const handleClick = () => {
//   //   setOpen(!open);
//   //   console.log("submit button clicked");
//   // };

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <main
//           className={`flex flex-col justify-between m-auto text-center bg-home-page bg-no-repeat bg-top bg-cover h-screen`}
//         >
//           <nav className="flex bg-primary flex-wrap items-center justify-center gap-40 p-1 text-white">
//             <img
//               width="200rem"
//               src={fairwayLogo}
//               alt="fairway independent mortgage corporation"
//             />
//             <img width="200rem" src={parksLogo} alt="parks corporate logo" />
//             <img
//               width="133.33rem"
//               src={kcgHomesLogo}
//               alt="parks corporate logo"
//             />
//           </nav>
//           {/* Body */}
//           <div className="flex flex-col items-center justify-between gap-20">
//             <div className="text-center mb-12">
//               <h1 className="font-sans text-6xl font-bold">
//                 Jackson Village Townhomes
//               </h1>
//               <h2 className="font-sans text-3xl font-bold">
//                 Hendersonvilles Brand New Townhome Community
//               </h2>
//             </div>
//             <div className="flex justify-center items-center gap-40">
//               <Button
//                 size="large"
//                 onClick={() => {
//                   setSignIn(true);
//                   setOpen(!open);
//                 }}
//                 // href="https://property.fairwaymc.com/home-loan-lead-form/apply-21905432"
//                 variant="contained"
//                 color="darkPrimary"
//               >
//                 sign in
//               </Button>
//               <Button
//                 size="large"
//                 // eslint-disable-next-line
//                 onClick={() => {
//                   setSignIn(false);
//                   setOpen(!open);
//                 }}
//                 variant="contained"
//                 color="darkPrimary"
//                 // sx={buttonStyles}
//               >
//                 apply
//               </Button>
//             </div>
//           </div>
//           <footer className="px-6 py-0 flex justify-center gap-4 content-center items-center bg-primary text-white text-left">
//             <div className={pageStyles.contactCard}>
//               <img
//                 className="w-40"
//                 src={jamesHarperProfile}
//                 alt="james harper profile"
//               />
//               <div>
//                 <h4 className="text-base font-bold">James Harper</h4>
//                 <h6 className="font-bold italic text-xs">
//                   Branch Manager | NMLS 71317
//                 </h6>
//                 <div className="text-xs">
//                   <p>Fairway Mortgage Corp.</p>
//                   <p>C: 615.991.1234</p>
//                   <p>O:615.822.6220</p>
//                   <p style={{ marginBottom: "0.5rem" }}>
//                     james.harper@fairwaymc.com
//                   </p>
//                 </div>
//                 <img
//                   className="w-40"
//                   src={fairwayLogo}
//                   alt="james harper profile "
//                 />
//               </div>
//             </div>
//             <div className={pageStyles.contactCard}>
//               <img
//                 className="w-40"
//                 src={deeAnnProfile}
//                 alt="dee anne profile "
//               />
//               <div>
//                 <h4 className="text-base font-bold">Dee Ann Couche</h4>
//                 <h6 className="text-xs font-bold italic">
//                   {"REALTOR® | MLS 332841"}
//                 </h6>
//                 <div className="text-xs">
//                   <p>Parks Realty | Lakeside</p>
//                   <p>office: 615.824.5920 | cell: cell: 615.498.0897</p>
//                   <p>beccadeeann@parksathome.com</p>
//                 </div>
//                 <img className="w-40" src={parksLogo} alt="parks logo" />
//               </div>
//             </div>
//             <div className={pageStyles.contactCard}>
//               <img className="w-40" src={beccaProfile} alt="becca profile " />
//               <div className="contactInfo">
//                 <h4 className="text-base font-bold">Becca Pendergrast</h4>
//                 <h6 className="text-xs font-bold italic">
//                   BROKER | MLS 285951
//                 </h6>
//                 <div className="text-xs">
//                   <p>Parks Realty | Lakeside</p>
//                   <p>M: 615.973.9291</p>
//                   <p>O: 615.824.5920</p>
//                   <p>beccadeeann@parksathome.com</p>
//                 </div>
//                 <img className="w-40" src={parksLogo} alt="parks logo" />
//               </div>
//             </div>
//           </footer>
//           {open ? (
//             <Modal
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="modal-modal-title"
//               aria-describedby="modal-modal-description"
//             >
//               <Box sx={modalStyle}>
//                 {/* {signIn ? (
//                   <>
//                     <Box p={2}>
//                       <div className="flex flex-col items-center mb-10">
//                         <img
//                           className="w-60"
//                           src={jacksonOnMain}
//                           alt="jackson on main logo"
//                         />
//                       </div>
//                       <Formik
//                         validateOnBlur={false}
//                         validateOnChange={false}
//                         initialValues={initialValues}
//                         validationSchema={validationSchema}
//                         onSubmit={handleSubmit}
//                       >
//                         {({
//                           values,
//                           errors,
//                           setFieldValue,
//                           setFieldError,
//                           handleSubmit,
//                           isValid,
//                         }) => {
//                           return (
//                             <>
//                               <form
//                                 onSubmit={handleSubmit}
//                                 style={{
//                                   display: "flex",
//                                   flexDirection: "column",
//                                   justifyContent: "center",
//                                   gap: "10px",
//                                 }}
//                               >
//                                 <div className="flex justify-between gap-3">
//                                   <div className="w-full">
//                                     <InputLabel>Name</InputLabel>
//                                     <TextField
//                                       id="name"
//                                       fullWidth
//                                       placeholder="Jane Smith"
//                                       variant="standard"
//                                       value={values.name}
//                                       onChange={(e) => {
//                                         setFieldValue("name", e.target.value);
//                                         setFieldError("name", undefined);
//                                       }}
//                                     />
//                                   </div>
//                                   <div className="w-full">
//                                     <InputLabel>Email</InputLabel>
//                                     <TextField
//                                       id="email"
//                                       fullWidth
//                                       variant="standard"
//                                       placeholder="janesmith@gmail.com"
//                                       value={values.email}
//                                       error={Boolean(errors.email)}
//                                       onChange={(e) => {
//                                         setFieldValue("email", e.target.value);
//                                         setFieldError("email", undefined);
//                                       }}
//                                     />
//                                   </div>
//                                 </div>
//                                 <div>
//                                   <InputLabel>Phone Number</InputLabel>
//                                   <MuiTelInput
//                                     variant="standard"
//                                     fullWidth
//                                     error={Boolean(errors.phoneNumber)}
//                                     defaultCountry="US"
//                                     className={pageStyles.phoneInput}
//                                     value={values.phoneNumber}
//                                     onChange={(value) => {
//                                       setFieldValue("phoneNumber", value);
//                                       setFieldError("phoneNumber", undefined);
//                                     }}
//                                   />
//                                 </div>
//                                 <FormControlLabel
//                                   label="Ok to Text?"
//                                   control={
//                                     <Checkbox
//                                       onChange={(isTexting) => {
//                                         setFieldValue(
//                                           "isTexting",
//                                           Boolean(isTexting.target.value)
//                                         );
//                                       }}
//                                     />
//                                   }
//                                 />
//                                 <div className="flex justify-end">
//                                   <Button
//                                     disabled={!isValid}
//                                     type="submit"
//                                     variant="contained"
//                                     color="primary"
//                                     size="small"
//                                   >
//                                     Sign In
//                                   </Button>
//                                 </div>
//                               </form>
//                             </>
//                           );
//                         }}
//                       </Formik>
//                     </Box>
//                   </> */}
//                 {signIn ? (
//                   <Iframe
//                     url="https://property.fairwaymc.com/home-loan-lead-form/apply-21905432"
//                     width="100%"
//                     height="650vh"
//                     id=""
//                     className=""
//                     display="block"
//                     position="relative"
//                   />
//                 ) : (
//                   <>
//                     <Typography>Apply</Typography>
//                     <img
//                       src={qrcode}
//                       alt="QR Code - James Harper - Fairway Apply Now Quick Link"
//                     />
//                   </>
//                 )}
//               </Box>
//             </Modal>
//           ) : null}
//         </main>
//       </ThemeProvider>
//     </>
//   );
// }
