import { Typography, Container,IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll/modules";
import Andre from "../photos/Andre.png";

export default function About() {
  return (
    <Container maxWidth="xl">
      <div id="about">
        <Typography variant="h2" color="white" id='about-title' sx={{ mb: 20, mt: 45, fontWeight:'bold' }} >
          About Me
        </Typography>
        <section className="about-Me">
          <div id="about-Text">
            <Typography variant="h4" color="white">
              Hi, my name is Andre' Grady. I'm a software engineer who recently
              graduated from the university of washington full-stack Coding
              Bootcamp. I am 24 years old actively seeking an opportunity to
              showcase my talents and be an asset to the team.
            </Typography>
          </div>
          <div id="about-picture">
            <img alt="Andre sitting down" src={Andre} id="andre" />
          </div>

        </section>
        <IconButton>
          <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "90px",
                color: "white",
                justifyContent: "center",
              }}
              id="arrow"
            />
          </Link>
        </IconButton>
      </div>
    </Container>
  );
}
