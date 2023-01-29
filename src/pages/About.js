import * as React from "react";
import { Typography, Container, IconButton, Box, Grid } from "@mui/material";
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
          <Grid container spacing={3} justifyContent="space-evenly">
          <Grid item xs={12} sm={8} md={4}>
          <div id="about-picture">
            <img alt="Andre sitting down" src={Andre} id="andre" />
          </div>
          </Grid>
          <Grid item xs={12} sm={8} md={4} >
          <div id="about-Text">
            <Box >
              <Typography color="white" component='p' sx={{ fontSize: "23px" }}>
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
                  Outside of coding, I enjoy playing video games, watching football, enjoying nature,
                  reading books and cooking.
                </p>
                <p>
                  <u>Here are a few of the technologies I've worked with:</u>
                  <ul id="tech-list">
                    <li>Html</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>Node Js</li>
                    <li>NPM</li>
                    <li>JQuery</li>
                    <li>MySQL</li>
                    <li>MongoDb</li>
                  </ul>
                </p>
              </Typography>
            </Box>
          </div>
          </Grid>
          </Grid>
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
