// src/componetns/Footer.tsx

import React from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Link,
} from "@mui/material";
import BasicButton from "../components/BasicButton";
import Phoneimage from "../assets/images/PhoneImage.svg";
import Envelop from "../assets/images/Envelop.svg"
import Twitter from "..//assets/images/Twitter.png"
import  Instagram  from "../assets/images/Instagram.png";

function Footer() {
  return (
    <Box>
      <Grid
        container
        spacing={4}
        sx={{
          bgcolor: "primary.main",
          padding: 2,
          height: "100vh",
        }}
      >
        <Grid item lg={4} xs={12} gutterBottom>
          <Card sx={{ paddingBottom: 1 }}>
            <CardContent>
              <Typography variant="h5">Contact Us</Typography>
              <Typography variant="h6" color="textSecondary">
                send us a message
              </Typography>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{ color: "white" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                />
              </Box>
              <BasicButton variant="contained" sx={{ color: "white" }}>
                Submit
              </BasicButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card sx={{ bgcolor: "primary.main" }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                All our pages
              </Typography>

              <Box
                display="flex"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  underline: "none",
                  textDecoration: "none",
                }}
              >
                <Link href="/" underline="none" color="white">
                  Home
                </Link>
                <Link href="/About" underline="none" color="white">
                  About Us
                </Link>
                <Link href="/Services" underline="none" color="white">
                  Services
                </Link>
                <Link href="/ContactUs" underline="none" color="white">
                  Contact Us
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card sx={{ bgcolor: "Background.default" }}>
            <CardContent>
              {/* <Box
                component="a"
                href="/"
                sx={{ textDecoration: "none", alignItems:"center" }}
              >
                <Box component="span" sx={{ color: "primary.main" }} pr={0.5}>
                  NIA
                </Box>
                <Box component="span" sx={{ color: "secondary.main" }}>
                  CLEANERS
                </Box>
              </Box>
              <img src={Phoneimage} />
              <Typography>0791031532</Typography> columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={1}*/}
              <Box
                component="a"
                href="/"
                sx={{ textDecoration: "none", textAlign: "center" }}
              >
                <Box
                  component="span"
                  sx={{ color: "primary.main", textAlign: "center" }}
                  pr={0.5}
                >
                  NIA
                </Box>
                <Box
                  component="span"
                  sx={{ color: "secondary.main", textAlign: "center" }}
                >
                  CLEANERS
                </Box>
              </Box>
              <Grid container>
                <Grid xs={6} sx={{ paddingLeft: 5 }}>
                  <img src={Phoneimage} />
                </Grid>
                <Grid xs={6} sx={{ paddingLeft: 5 }}>
                  <Typography>0791031532</Typography>
                </Grid>
                <Grid xs={6} sx={{ paddingLeft: 5 }}>
                  <img src={Envelop} />
                </Grid>
                <Grid xs={6} sx={{ paddingLeft: 5 }}>
                  <Typography>Niacleaners01@gmail.com</Typography>
                </Grid>
                <Grid xs={6} sx={{ paddingLeft: 5 }}>
                  <img src={Twitter} />
                </Grid>
                <Grid xs={6} sx={{ paddingLeft: 5 }}>
                  <Typography>@Niacleaners01</Typography>
                </Grid>
                <Grid xs={6} sx={{ paddingLeft: 5 }}>
                  <img src={Instagram} />
                </Grid>
                <Grid xs={6} sx={{ paddingLeft: 5 }}>
                  <Typography>Nia_cleaners01</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          bgcolor: "primary.main",
          boxShadow: 20,
          alignItems: "center",
          textAlign: "center",
          padding: 2,
        }}
      >
        &copy; 2023 Nia Cleaners.All rights Reserved
      </Box>
    </Box>
  );
}

export default Footer;
