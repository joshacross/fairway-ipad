import { useState } from "react";
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

const handleSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(6)
    .max(32)
    .required("Password must be at least 6 characters"),
});

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col justify-between h-screen bg-tertiary">
      <div className="flex justify-between items-center h-screen">
        <div className="flex flex-col items-center gap-3 text-white text-center w-1/2">
          <img
            className="w-40 md:w-80"
            src={fairwayLogo}
            alt="Fairway Independent Mortgage Corporation Logo"
          />
          <h2 className="text-xl: md:text-4xl font-sans font-bold">
            KIOSK GENERATOR
          </h2>
          <h3 className="text-lg md:text-3xl">
            The #1 Loan Officer{" "}
            <span className="block">Kiosk Template Generator</span>
          </h3>
        </div>
        <Container maxWidth="sm">
          <Card variant="elevation">
            <CardHeader
              title="Welcome!"
              subheader="Please sign up using the form below"
              action={<CgProfile className="text-primary" fontSize={40} />}
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item container>
                  <Formik
                    validateOnBlur={false}
                    validateOnChange={false}
                    initialValues={{
                      firstName: "",
                      lastName: "",
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
                          <div className="flex justify-between gap-4">
                            <TextField
                              fullWidth
                              type="text"
                              label="First Name"
                              value={values.firstName}
                              error={errors.firstName}
                              onChange={(e) => {
                                setFieldValue("firstName", e.target.value);
                                setFieldError("firstName", undefined);
                              }}
                              name="firstName"
                            />
                            <TextField
                              fullWidth
                              type="text"
                              label="Last Name"
                              value={values.lastName}
                              error={errors.lastName}
                              onChange={(e) => {
                                setFieldValue("lastName", e.target.value);
                                setFieldError("lastName", undefined);
                              }}
                              name="lastName"
                            />
                          </div>
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
                            error={errors.password}
                            helperText={errors.password}
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
                            <Link to="/sign-in">Have an account? Sign In</Link>
                          </div>
                        </form>
                      );
                    }}
                  </Formik>
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
