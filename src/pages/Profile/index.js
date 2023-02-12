import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "src/firebase.config";
import { updateDoc } from "firebase/firestore";
import { CgProfile } from "react-icons/cg";
import { Button, IconButton } from "@mui/material";

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
      {formData ? (
        <div className=" container mx-auto">
          <header className="flex justify-between py-3 border-b mb-6">
            <div className="flex items-center">
              <IconButton color="white" size="large">
                <CgProfile />
              </IconButton>
              <h4 className="text-2xl">{name}</h4>
            </div>
            <Button variant="outlined" color="white" onClick={onLogout}>
              Log Out
            </Button>
          </header>
          <main>
            <h1>Profile Details header</h1>
            <p>Profile Details Text</p>
            <p>Change Personal Details</p>
          </main>
        </div>
      ) : (
        "Not Logged In"
      )}
    </div>
  );
}

export default Profile;
