import { Box, Typography, Container } from "@mui/material";
import Andre from "../photos/Andre.png";

export default function About() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" color="white">
        About Me
      </Typography>
      <section className="about-Me">
        <Box sx={{ width: 600, height: "auto" }}>
          <Typography variant="h3" color="primary">
            Hi there,
          </Typography>
          <Typography variant="h5" color="white" sx={{alignItems:'left'}}>
            My name is Andre' Grady. I'm a software engineer who recently
            graduated from the university of washington full-stack Coding
            Bootcamp. I am 24 years olds actively seeking an opportunity to
            showcase my talents and be an asset to any team willing to accept
            me.
          </Typography>
          <Box sx={{ width: 100, height: 200 }}>
            <img alt="Andre sitting down" src={Andre} id="andre" />
          </Box>
        </Box>
      </section>
    </Container>
  );
}
