import React from "react";
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import theme from "../Themes/Default";

export default function Mission() {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h3" gutterBottom>
          Our{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            Mission
          </Box>{" "}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item lg={4} xs={12} >
          <Box>
            <Card
              sx={{ bgcolor: "white" }}
              maxHeight={500}
              height={400}
              elevation={0}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <Box component="span" sx={{ color: "primary.main" }}>
                    Our {""}
                  </Box>
                  <Box component="span" sx={{ color: "secondary.main" }}>
                    Mission
                  </Box>
                </Typography>
                <Typography gutterBottom color="textSecondary">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum quis quam orci. Proin molestie est at lacus
                  egestas, et dignissim purus commodo."{" "}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item lg={4} xs={12} py={2} my={1}>
          <Card
            sx={{ bgcolor: "white" }}
            maxHeight={500}
            height={400}
            elevation={0}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <Box component="span" sx={{ color: "primary.main" }}>
                  Environmental {""}
                  <Box sx={{ color: "secondary.main" }} component="span">
                    Policy
                  </Box>
                </Box>
              </Typography>
              <Typography gutterBottom color="textSecondary">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum quis quam orci. Proin molestie est at lacus egestas,
                et dignissim purus commodo."{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12} py={2} my={1}>
          <Card
            sx={{ bgcolor: "white" }}
            maxHeight={500}
            height={400}
            elevation={0}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <Box component="span" sx={{ color: "primary.main" }}>
                  Social {""}
                </Box>
                <Box component="span" sx={{ color: "secondary.main" }}>
                  Corpoarte Responsibility
                </Box>
              </Typography>
              <Typography gutterBottom color="textSecondary">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum quis quam orci. Proin molestie est at lacus egestas,
                et dignissim purus commodo."{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
