import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "src/firebase.config";
import { updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { Formik } from "formik";
import { CgProfile } from "react-icons/cg";
import { BsPencilSquare } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";

const validationSchema = Yup.object().shape({
  loFirstName: Yup.string().required("Required"),
  loLastName: Yup.string().required("Required"),
  loEmail: Yup.string().required("Required"),
  loPassword: Yup.string().required("Required"),
  loConfirmPassword: Yup.string().required("Required"),
  loNMLS: Yup.string().required("Required"),
  loAddressLine1: Yup.string().required("Required"),
  loAddressLine2: Yup.string().required("Required"),
  loMobileNumber: Yup.string().required("Required"),
  loOfficeNumber: Yup.string().required("Required"),
});

const initialValues = {
  loFirstName: "",
  loLastName: "",
  loEmail: "",
  loPassword: "",
  loConfirmPassword: "",
  loProfileImg: "",
  loAddressLine1: "",
  loAddressLine2: "",
  loMobileNumber: "",
  loOfficeNumber: "",
};

const handleSubmit = (values) => {
  console.log(values);
};

const getFormData = async () => {
  try {
    const { currentUser } = await getAuth();
    return currentUser;
  } catch (error) {
    console.log(error);
  }
};

function Profile() {
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  // const auth = getAuth();
  // const [formData, setFormData] = useState({
  //   name: auth?.currentUser.displayName,
  //   email: auth?.currentUser.email,
  //   ...auth?.currentUser,
  // });

  const onLogout = () => {
    console.log("signOut");
    // auth.signOut();
    // navigate("/sign-in");
  };

  // const { name, email } = formData;

  // const storageImage = async (image) => {
  //   return new Promise((resolve, reject) => {
  //     const storage = getStorage();
  //     const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;

  //     const storageRef = ref(storage, "images/" + fileName);

  //     const uploadTask = uploadBytesResumable(storageRef, image);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //         }
  //       },
  //       (error) => {
  //         reject(error);
  //       },
  //       () => {
  //         // Handle successful uploads on complete
  //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           resolve(downloadURL);
  //         });
  //       }
  //     );
  //   });
  // };

  useEffect(() => {
    (async () => {
      const data = await getFormData();
      const { email, displayName, uid: auth } = data;
      const newFormData = {
        loEmail: email,
        loFirstName: displayName,
        userRef: auth,
        loLastName: "",
        loPassword: "",
        loConfirmPassword: "",
        loProfileImg: "",
        loAddressLine1: "",
        loAddressLine2: "",
        loMobileNumber: "",
        loOfficeNumber: "",
      };
      console.log("newFormData", newFormData);
      let currentFormData = { ...newFormData, ...formData };
      setFormData(currentFormData);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("formData", formData);

  return (
    <div className="bg-tertiary h-screen text-secondary p-4">
      <div className="container mx-auto bg-white rounded shadow-lg p-4">
        <header className="flex justify-between items-center py-3 border-b mb-6">
          <div className="flex items-center">
            <IconButton color="white">
              <CgProfile fontSize="6rem" />
            </IconButton>
            <h2 className="text-4xl">Joshua Cross</h2>
          </div>
          <Button variant="outlined" color="primary" onClick={onLogout}>
            Log Out
          </Button>
        </header>
        <main className="">
          <div className="pl-4 w-full">
            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              initialValues={formData}
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
              }) => {
                console.log("values", values);
                console.log("errors", errors);
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="flex justify-end mb-4">
                      <Button
                        disabled={!isValid}
                        type="submit"
                        variant="contained"
                      >
                        Save
                      </Button>
                    </div>
                    <div className="flex w-full gap-4">
                      <div
                        id="profilePhoto"
                        className="relative flex flex-col justify-center gap-4 border-r pr-4"
                      >
                        <CgProfile className="relative" fontSize="10rem" />
                        <label className="flex justify-center items-center gap-2 absolute bottom-1 bg-secondary bg-opacity-70 w-full h-full p-2 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all text-white">
                          Update <BsPencilSquare />
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            // onChange={(e) => {
                            //   handleChange({
                            //     imageNavLogo2: URL.createObjectURL(e.target.files[0]),
                            //   });
                            // }}
                          />
                        </label>
                        <Button type="file" variant="contained">
                          Update
                        </Button>
                      </div>
                      <div id="form" className="flex flex-col w-full gap-4">
                        <div className="flex space-between gap-4">
                          <TextField
                            fullWidth
                            type="text"
                            label="First Name"
                            value={values.loFirstName}
                            error={errors.loFirstName}
                            onChange={(e) => {
                              setFieldValue("loFirstName", e.target.value);
                              setFieldError("loFirstName", undefined);
                            }}
                            name="loFirstName"
                          />
                          <TextField
                            fullWidth
                            type="text"
                            label="Last Name"
                            value={values.loLastName}
                            error={errors.loLastName}
                            onChange={(e) => {
                              setFieldValue("loLastName", e.target.value);
                              setFieldError("loLastName", undefined);
                            }}
                            name="loLastName"
                          />
                        </div>
                        <div className="flex gap-4">
                          <TextField
                            fullWidth
                            type="email"
                            label="Email Address"
                            value={values.email}
                            error={errors.email}
                            onChange={(e) => {
                              setFieldValue("email", e.target.value);
                              setFieldError("email", undefined);
                            }}
                            name="email"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <AiOutlineMail />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div className="flex gap-4">
                          <TextField
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            name="password"
                            value={values.password}
                            error={Boolean(errors.password)}
                            onChange={(e) => {
                              setFieldValue("password", e.target.value);
                              setFieldError("password", undefined);
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment
                                  className="hover:cursor-pointer"
                                  position="start"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <AiOutlineEye />
                                  ) : (
                                    <AiOutlineEyeInvisible />
                                  )}
                                </InputAdornment>
                              ),
                            }}
                          />
                          <TextField
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            label="Confirm Password"
                            name="password"
                            value={values.password}
                            error={Boolean(errors.password)}
                            onChange={(e) => {
                              setFieldValue("password", e.target.value);
                              setFieldError("password", undefined);
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment
                                  className="hover:cursor-pointer"
                                  position="start"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <AiOutlineEye />
                                  ) : (
                                    <AiOutlineEyeInvisible />
                                  )}
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
            <h4>Name</h4>
            <TextField variant="standard" value="Joshua Cross" />
            <p>Marketing Manager</p>
            <p>The Harper Team | FIMC</p>
            <p>Fairway Independent Mortgage Corporation</p>
            <p>131 Saundersville Road, Suite 140</p>
            <p>Hendersonville, TN 37075</p>
            <p>
              C: <span>{"615.485.2881"}</span>
            </p>
            <p>
              O: <span>{"615.822.6220"}</span>
            </p>
            <p>
              E: <span>joshua.cross@fairwaymc.com</span>
            </p>

            <div className="flex">
              <p>Profile Details Text</p>
              <p>Update</p>
            </div>
          </div>
        </main>
      </div>
      ) : ( "Not Logged In" )}
    </div>
  );
}

export default Profile;
