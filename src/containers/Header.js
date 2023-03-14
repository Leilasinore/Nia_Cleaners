import React from "react";
// import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Tab,
  Tabs,
  Container,
  Link,
} from "@mui/material";
import BasicButton from "../components/BasicButton";
const Header = () => {
  return (
    <Box>
      <AppBar
        sx={{ backgroundColor: "background.default" }}
        position="fixed"
        elevation={0}
      >
        <Container maxWidth={"xl"}>
          <Toolbar>
            <Box component="a" href="/" sx={{ textDecoration: "none" }}>
              <Box component="span" sx={{ color: "primary.main" }} pr={0.5}>
                NIA
              </Box>
              <Box component="span" sx={{ color: "secondary.main" }}>
                CLEANERS
              </Box>
            </Box>
            <Box flexGrow={1}>
              <Box
                display="flex"
                sx={{
                  marginX: 8,
                  display: "flex",
                  color: "primary.main",
                  justifyContent: "space-around",
                  underline: "none",
                }}
              >
                <Link href="/" sx={{ paddingX: 4, textDecoration: "none" }}>
                  Home
                </Link>
                <Link href="/About" underline="none" sx={{ paddingX: 4 }}>
                  About
                </Link>
                <Link href="/Services" underline="none" sx={{ paddingX: 4 }}>
                  Services
                </Link>

                <Link href="/ContactUs" underline="none" sx={{ paddingX: 4 }}>
                  Contact Us
                </Link>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <BasicButton variant="contained" sx={{ color: "white" }}>
                Book Now!
              </BasicButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
export default Header;
