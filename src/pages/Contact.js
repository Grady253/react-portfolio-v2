import { Container, Typography } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <Container maxWidth="lg">
          <Typography variant="h1" color='primary' classname='contact-header'>
              Let's Chat!
          </Typography>
      </Container>
    </section>
  );
}
