import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

export function NewPassword({ setPassword, email }) {
  const auth = getAuth();

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmationPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(255)
        .required("Password is required")
        .matches(/.{8,}/, "Password must have at eight characters")
        .matches(/[0-9]+/, "Password must have at least one [0-9] numerical character")
        .matches(/[a-z]+/, "Password must have at least one [a-z] lower case alphabet")
        .matches(/[A-Z]+/, "Password must have at least one [A-Z] upper case alphabet")
        .matches(/[^a-zA-Z0-9]+/, "Password must have at least one [!$*...] special character"),
      confirmationPassword: Yup.string()
        .required("Confirmation Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: async (values) => {
      setPassword(values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Card>
        <CardHeader subheader={`Reset password for ${email}`} title="Password" />
        <Divider />
        <CardContent>
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={(e) => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            required
          />
          <TextField
            error={Boolean(
              formik.touched.confirmationPassword && formik.errors.confirmationPassword
            )}
            fullWidth
            helperText={formik.touched.confirmationPassword && formik.errors.confirmationPassword}
            label="Confirmation Password"
            margin="normal"
            name="confirmationPassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword ? "text" : "password"}
            value={formik.values.confirmationPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={(e) => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            required
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
          disabled={formik.isSubmitting}
        >
          <Button type="submit" color="primary" variant="contained">
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
}
