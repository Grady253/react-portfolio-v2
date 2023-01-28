import { Container, Typography,Button } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <Container maxWidth="lg">
        <Typography variant="h1" color="primary" id="contactHeader">
        
          Let's Chat!
        </Typography>
        <Typography variant="h6" color='white' id='contactText'>
          Now that you know a little bit about me, I'd love to get to know you. 
        </Typography>
        <Button 
          id='contactBtn'
          variant='outlined'
          href='mailto:grady.andre2@gmail.com'
          >
            Reach Out
          </Button>
      </Container>
    </section>
  );
}
