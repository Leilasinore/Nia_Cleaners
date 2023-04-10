import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../components/Image";
import ServicesOneImg from "../assets/images/services1.svg";
import ServicesTwoImg from "../assets/images/services2.svg";
import ServicesThreeImg from "../assets/images/services3.svg";
import { Container, Box, Typography, Grid } from "@mui/material";
import BasicButton from "../components/BasicButton";
import AddIcon from "@mui/icons-material/Add";

const Services = () => {
  const navigate = useNavigate();

  const navigateServices = () => {
    // 👇️ navigate to /contacts
    navigate("/services");
  };
  const navigateToContactnow = () => {
    // 👇️ navigate to /contacts
    navigate("/contactus");
  };
  return (
    <Container maxWidth="xl" py={10}>
      <Box py={2}>
        <Typography variant="h4">
          <Box component="span" sx={{ color: "primary.main" }}>
            Our{" "}
          </Box>
          <Box component="span" sx={{ color: "secondary.main" }}>
            Services
          </Box>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={12}>
          <Image src={ServicesOneImg} />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Carpet Cleaning
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            nisi nec nisl ornare volutpat. Curabitur iaculis porta dui, quis
            auctor lacus hendrerit vitae.
          </Typography>
          <BasicButton
            variant="contained"
            endIcon={<AddIcon />}
            onClick={navigateServices}
          >
            Learn More{" "}
          </BasicButton>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Image src={ServicesTwoImg} />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Carpet Cleaning
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            nisi nec nisl ornare volutpat. Curabitur iaculis porta dui, quis
            auctor lacus hendrerit vitae.
          </Typography>
          <BasicButton
            variant="contained"
            endIcon={<AddIcon />}
            onClick={navigateServices}
          >
            Learn More{" "}
          </BasicButton>
        </Grid>

        <Grid item lg={4} xs={12}>
          <Image src={ServicesThreeImg} />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Carpet Cleaning
          </Typography>
          <Typography variant="body1" gutterBottom color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            nisi nec nisl ornare volutpat. Curabitur iaculis porta dui, quis
            auctor lacus hendrerit vitae.
          </Typography>
          <BasicButton
            variant="contained"
            endIcon={<AddIcon />}
            onClick={navigateServices}
          >
            Learn More{" "}
          </BasicButton>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: 3 }} gutterBottom py={7}>
        <BasicButton variant="outlined" onClick={navigateToContactnow}>
          Book Now
        </BasicButton>
      </Box>
    </Container>
  );
};
export default Services;
