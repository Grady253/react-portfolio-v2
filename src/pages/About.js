import { Typography, Container } from "@mui/material";
import Andre from "../photos/Andre.png";

export default function About() {
  return (
    <Container maxWidth="xl">
      <div id="about">
        <Typography variant="h2" color="white" sx={{ mb: 20, mt: 30 }}>
          About Me
        </Typography>
        <section className="about-Me">
          <div id="about-Text">
            <Typography variant="h4" color="white">
              Hi, my name is Andre' Grady. I'm a software engineer who recently
              graduated from the university of washington full-stack Coding
              Bootcamp. I am 24 years old actively seeking an opportunity to
              showcase my talents and be an asset to any team willing to accept
              me.
            </Typography>
          </div>
          <div id="about-picture">
            <img alt="Andre sitting down" src={Andre} id="andre" />
          </div>

        </section>
      </div>
    </Container>
  );
}
