import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Face2TwoTone } from "@mui/icons-material";
import { Notify } from "notiflix/build/notiflix-notify-aio";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function validatePassword(password) {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  if (password.length < 8) {
    Notify.failure("Contraseña debe ser de mínimo 8 caracteres");
    return false;
  }
  if (!pattern.test(password)) {
    Notify.failure(`Contraseña no correspode con los requisitos:`);
    Notify.failure(`- Contraseña de minimo 8 caracteres`);
    Notify.failure(`- Contraseña debe contener al menos un número: 0-9`);
    Notify.failure(
      `- Contraseña debe contener al menos una letra minúscula:a-z`
    );
    Notify.failure(
      `- Contraseña debe contener al menos una letra mayúscula:A-Z`
    );
    Notify.failure(
      `- Contraseña debe contener al menos un caracter especial: @!><?`
    );
    return false;
  }
  return true;
}
function validateEmail(email) {
  const pattern = /^\S+@\S+\.\S+$/;
  if (!pattern.test(email)) {
    Notify.failure(
      "Correo electrónico no corresponde con los requisitos. Ejemplo: mymail@mail.com"
    );
    return;
  }
  return true;
}
function confirmPassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    Notify.failure("Error: Contraseñas no coinciden");
    return;
  }
  return true;
}

function checkEmptyFields(data) {
  if (!data.get("first-name").trim().length > 0) {
    Notify.failure("Error: Llena campo First Name");
    return;
  }
  if (!data.get("last-name").trim().length > 0) {
    Notify.failure("Error: Llena campo Last Name");
    return;
  }
  if (!data.get("email").trim().length > 0) {
    Notify.failure("Error: Llena campo Email");
    return;
  }
  if (!data.get("password").trim().length > 0) {
    Notify.failure("Error: Llena campo Password");
    return;
  }
  if (!data.get("confirm-password").trim().length > 0) {
    Notify.failure("Error: Llena campo Confirm Password");
    return;
  }
  if (!data.get("birthday").trim().length > 0) {
    Notify.failure("Error: Llena campo Birthday");
    return;
  }
  return true;
}

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      checkEmptyFields(data) &&
      validateEmail(data.get("email")) &&
      validatePassword(data.get("password")) &&
      confirmPassword(data.get("password"), data.get("confirm-password"))
    ) {
      console.log("Se puede registrar usuario");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Face2TwoTone />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="first-name"
              label="First name"
              name="first-name"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last-name"
              label="Last Name"
              name="last-name"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="confirm-password"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="birthday"
                label="Birthday"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              />
            </LocalizationProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="./signin" variant="body2">
                  Back to Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
