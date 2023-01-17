import { Typography, Container } from "@mui/material";
import Andre from "../photos/Andre.png";

export default function About() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" color="white" sx={{mb:30, mt:20}}>
        About Me
      </Typography>
      <section className="about-Me">
        <div id="about-Text">
          <Typography variant="h4" color="white">
            Hi there, my name is Andre' Grady. I'm a software engineer who recently
            graduated from the university of washington full-stack Coding
            Bootcamp. I am 24 years olds actively seeking an opportunity to
            showcase my talents and be an asset to any team willing to accept
            me.
          </Typography>
        </div>
        <div id="about-picture">
          <img alt="Andre sitting down" src={Andre} id="andre" />
        </div>
        {/* <Box id='about-Pic' sx={{ width: 100, height: 200}}> */}
        {/* </Box> */}
      </section>
    </Container>
  );
}
