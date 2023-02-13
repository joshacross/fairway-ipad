import { useState } from "react";
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

import { CgProfile } from "react-icons/cg";
import { BsPencilSquare } from "react-icons/bs";
import { Button, IconButton } from "@mui/material";
import { TextField } from "@mui/material";

function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth?.currentUser.displayName,
    email: auth?.currentUser.email,
    ...auth?.currentUser,
  });

  const onLogout = () => {
    auth.signOut();
    navigate("/sign-in");
  };

  console.log("formdata", formData);

  const { name, email } = formData;

  const storageImage = async (image) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage();
      const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;

      const storageRef = ref(storage, "images/" + fileName);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  return (
    <div className="bg-tertiary h-screen text-white p-4">
      {formData?.name ? (
        <div className="container mx-auto">
          <header className="flex justify-between items-center py-3 border-b mb-6">
            <div className="flex items-center">
              <IconButton color="white">
                <CgProfile fontSize="6rem" />
              </IconButton>
              <h2 className="text-4xl">{name}</h2>
            </div>
            <Button variant="outlined" color="white" onClick={onLogout}>
              Log Out
            </Button>
          </header>
          <main className="flex gap-4">
            <div className="relative flex flex-col justify-center gap-4 border-r pr-4">
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
            <div className="pl-4">
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
      ) : (
        "Not Logged In"
      )}
    </div>
  );
}

export default Profile;
