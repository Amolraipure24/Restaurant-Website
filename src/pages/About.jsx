import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5 rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To my Resturant</Typography>
        <p>
          Welcome to Our Restaurant, your home away from home in the heart of
          South India. Our hostel offers a warm and inviting atmosphere where
          traditional South Indian hospitality meets modern comfort. With
          spacious, well-furnished rooms and a vibrant communal area, we provide
          a cozy retreat for travelers, students, and anyone looking to
          experience the rich cultural heritage of this region. Immerse yourself
          in the local culture with our delicious South Indian meals served
          daily, and enjoy easy access to nearby attractions and local hotspots.
          Whether you’re here for a short stay or an extended visit, our
          friendly staff is dedicated to ensuring you have a memorable and
          enjoyable experience. We look forward to welcoming you and making your
          stay with us truly special!
        </p>
        <br />
      </Box>
    </Layout>
  );
};

export default About;
