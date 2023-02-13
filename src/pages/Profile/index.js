import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "src/firebase.config";
import { updateDoc } from "firebase/firestore";
import { CgProfile } from "react-icons/cg";
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
            <div className="flex flex-col justify-center gap-4 border-r pr-4">
              <CgProfile fontSize="10rem" />
              <Button variant="contained">Update</Button>
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
