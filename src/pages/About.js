import * as React from "react";
import { Typography, Container, IconButton, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll/modules";
import Andre from "../photos/Andre.png";

export default function About() {
  return (
    <Container maxWidth="xl">
      <div id="about">
        <Typography
          variant="h2"
          color="white"
          id="about-title"
          sx={{ mb: 6, mt: 45, fontWeight: "bold" }}
        >
          About Me
        </Typography>
        <section className="about-Me">
          <div id="about-picture">
            <img alt="Andre sitting down" src={Andre} id="andre" />
          </div>
          <div id="about-Text">
            <Box sx={{ width: 650, height: 500, ml: 40 }}>
              <Typography color="white" sx={{ fontSize: "25px" }}>
                <p>
                  Hi, my name is Andre' Grady. I'm a 24 year old software
                  engineer who recently graduated from the intensive University
                  Of Washington full-stack coding bootcamp. I'm actively seeking
                  an opportunity to showcase my front-end web development
                  talents.
                </p>

                <p>
                  I have a strong desire for developing the fastest, most
                  efficient, and secure application. Using my skills, I plan on
                  maintaining a creative and satisfying user interface. I look
                  forward to being an asset to the team.
                </p>
                <p>
                  Outside of coding, I love to play video games, watch football,
                  and cook.
                </p>
                <p>
                  <u>Here are a few of the technologies I've worked with:</u>
                </p>
              </Typography>
            </Box>
          </div>
        </section>
        <IconButton>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
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
