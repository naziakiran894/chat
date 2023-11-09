import Button from "../../component/molecules/Button";
import {
  Grid,
  Box,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { store } from "../../store";
import Alert from "@mui/material/Alert";
import { useEffect } from "react";

import {
  createUserWithEmail,
  loginWithGoogle,
} from "../../store/services/AuthService";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function Register() {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.user);
  const error = useSelector((state) => state?.auth?.error);

  console.log(user, error, "error");
  useEffect(() => {
    if (user?.userId) {
      navigate("/");
      console.log("navigatee from login to chat");
    }
  }, [user]);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            store.dispatch(createUserWithEmail({ ...values, navigate }));
            console.log(values, "valuessss");
          }}
        >
          {({ errors, touched, values, setFieldValue, handleChange }) => (
            <Form
              style={{
                maxWidth: "20%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{ margin: "20px", textAlign: "center" }}
              >
                Login
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                size="full"
                variant="contained"
                bgColor="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Button
                size="full"
                variant="contained"
                bgColor="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => dispatch(loginWithGoogle())}
              >
                Login with google
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    sx={{ cursor: "pointer", color: "black" }}
                    onClick={() => navigate("/")}
                    variant="body1"
                  >
                    {"Don't have an account? Sign Up"}
                    {error ? (
                      <Alert severity="error">Error detected! {error}</Alert>
                    ) : (
                      ""
                    )}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}
