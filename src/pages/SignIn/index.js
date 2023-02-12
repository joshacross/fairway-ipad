import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import * as Yup from "yup";
import { Formik } from "formik";
import {
  Container,
  Card,
  Grid,
  CardContent,
  CardHeader,
  TextField,
  Button,
  InputAdornment,
  Divider,
} from "@mui/material";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import fairwayColorLogo from "../../assets/logos/fairwayColorLogo.png";
import fairwayLogo from "../../assets/logos/fairwayLogo.png";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().min(3).required("Required"),
  password: Yup.string().min(6).required("Required"),
});

function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      console.log("run");
      const { email, password } = values;
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential);

      if (userCredential.user) {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      toast.error("Incorrect login credentials. Please try again");
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-tertiary">
      <div className="flex justify-between items-center h-screen">
        <div className="flex flex-col items-center gap-3 text-white text-center w-1/2">
          <img
            className="w-40 md:w-80"
            src={fairwayLogo}
            alt="Fairway Independent Mortgage Corporation Logo"
          />
          <div>
            <h2 className="text-xl: md:text-4xl font-sans font-bold">
              KIOSK GENERATOR
            </h2>
            <h3 className="text-lg md:text-3xl">
              The #1 Loan Officer{" "}
              <span className="block">Kiosk Template Generator</span>
            </h3>
          </div>
        </div>
        <Container maxWidth="sm">
          <Card variant="elevation">
            <CardHeader
              title="Welcome Back!"
              subheader="Please sign in below"
              action={<CgProfile className="text-primary" fontSize={40} />}
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item container>
                  <Formik
                    validateOnBlur={false}
                    validateOnChange={false}
                    initialValues={{
                      email: "",
                      password: "",
                    }}
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
                      return (
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col w-full justify-between gap-4"
                        >
                          <TextField
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
                          <TextField
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

                          <div className="flex flex-col items-center gap-4 justify-end">
                            <Button
                              disabled={!isValid}
                              type="submit"
                              variant="contained"
                              fullWidth
                            >
                              Sign In
                            </Button>

                            <Link to="/forgot-password">Forgot Password?</Link>
                          </div>
                        </form>
                      );
                    }}
                  </Formik>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item container xs={12} justifyContent="center">
                  <Link to="/sign-up">
                    <Button variant="contained">Create A New Account</Button>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </div>
      <footer className="flex flex-col items-center p-4 bg-white w-screen block text-center">
        <Link to="/">
          <img
            className="w-40"
            src={fairwayColorLogo}
            alt="Fairway Independent Mortgage Corporation Logo"
          />
        </Link>
        <p>
          {
            "© 2023 The Harper Team | Fairway Independent Mortgage Corporation. All Rights Reserved"
          }
        </p>
      </footer>
    </div>
  );
}

export default SignIn;
