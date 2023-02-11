import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Container,
  Card,
  Grid,
  CardContent,
  CardHeader,
  FormControl,
  TextField,
  InputLabel,
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
import { Link } from "react-router-dom";
import fairwayColorLogo from "../../assets/logos/fairwayColorLogo.png";
import fairwayLogo from "../../assets/logos/fairwayLogo.png";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className=" bg-tertiary h-screen flex flex-col flex-col-reverse md:flex-row justify-center items-center">
        <div
          className="flex flex-col items-center
		gap-3 text-white text-center w-1/2"
        >
          <img
            className="w-80"
            src={fairwayLogo}
            alt="Fairway Independent Mortgage Corporation Logo"
          />
          <h2 className="text-4xl font-sans font-bold">KIOSK GENERATOR</h2>
          <h3 className="text-3xl">
            The #1 Loan Officer{" "}
            <span className="block">Kiosk Template Generator</span>
          </h3>
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
                  <Formik>
                    <form className="flex flex-col w-full justify-between gap-4">
                      <TextField
                        type="email"
                        label="Email Address"
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
                        <Button variant="contained" fullWidth>
                          Sign In
                        </Button>
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </div>
                    </form>
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
