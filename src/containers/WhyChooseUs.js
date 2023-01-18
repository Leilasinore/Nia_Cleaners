import {
  Typography,
  Box,
  Grid,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import Image from "../components/Image";
import Trust from "../assets/images/trust.png";
import Support from "../assets/images/Support.png";
import Pricing from "../assets/images/Pricing.png";

const WhyChooseUs = () => {
  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Typography variant="h4">Why Choose Us</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid sx={{ textAlign: "center" }} py={25} item lg={4} xs={12}>
          <Card bgcolor="white" maxHeight={500} height={400}>
            <CardContent>
              <Image src={Trust} gutterBottom />
              <Typography variant="h6" color="primary.main" gutterBottom>
                Trust
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                est a ipsum dictum tincidunt a varius metus. Integer at
                convallis nisi. Pellentesque pharetra aliquam sollicitudin.
                Etiam tristique lacus lacus, et tincidunt ante aliquam vel.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ textAlign: "center" }} py={25} item lg={4} xs={12}>
          <Card bgcolor="white" maxHeight={500} height={400}>
            <CardContent>
              <Image src={Support} gutterBottom />
              <Typography variant="h6" color="primary.main" gutterBottom>
                Available 24-Hours
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                est a ipsum dictum tincidunt a varius metus. Integer at
                convallis nisi. Pellentesque pharetra aliquam sollicitudin.
                Etiam tristique lacus lacus, et tincidunt ante aliquam vel.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          sx={{ textAlign: "center" }}
          py={25}
          md={4}
          item
          lg={4}
          xs={12}
          sm={12}
        >
          <Card bgcolor="white" maxHeight={500} height={400} elevation={0}>
            <CardContent>
              <Image src={Pricing} />
              <Typography variant="h6" color="primary.main" gutterBottom>
                Cost-Friendly
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                est a ipsum dictum tincidunt a varius metus. Integer at
                convallis nisi. Pellentesque pharetra aliquam sollicitudin.
                Etiam tristique lacus lacus, et tincidunt ante aliquam vel.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default WhyChooseUs;
