import * as React from "react";
import { Typography, Container, IconButton, Box, Rating } from "@mui/material";
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
          <div id="about-Text">
            <Typography variant="h5" color="black" sx={{backgroundColor:'white',boxShadow: "#f2af29 4px 10px 20px 10px" }}>
              Hi, my name is Andre' Grady. I'm a software engineer who recently
              graduated from the 6-month intensive University Of Washington full-stack coding
              bootcamp. I am 24 years old actively seeking an opportunity to
              showcase my front-end web-development talents. I have a strong desire for 
              developing the fastest, efficient, and securest application. While maintaining 
              a creative and satisfying user interface. I look forward to being an asset to the team. 
            </Typography>
            <Typography
              variant="h3"
              color="white"
              id="about-title"
              sx={{ fontWeight: "bold", mt: 6 }}
            >
              Skills
            </Typography>
            <Box
                id="skill-box"
              sx={{
                "& > legend": { mt: 2 },
                backgroundColor:'white',
                width:'300px',
                ml:45
              }}
            >
              <Typography
                component="legend"
                sx={{ color: "black", fontSize: 18 }}
              >
                Html
              </Typography>
              <Rating name="Html" defaultValue={5} readOnly />
              <Typography
                component="legend"
                sx={{ color: "black", fontSize: 18 }}
              >
                CSS
              </Typography>
              <Rating name="CSS" defaultValue={5} readOnly />
              <Typography
                component="legend"
                sx={{ color: "black", fontSize: 18 }}
              >
                Javascript
              </Typography>
              <Rating name="Javascript" defaultValue={4} readOnly />
              <Typography
                component="legend"
                sx={{ color: "black", fontSize: 18 }}
              >
                React Js
              </Typography>
              <Rating name="React Js" defaultValue={3.5} precision={0.5} readOnly />
              <Typography
                component="legend"
                sx={{ color: "black", fontSize: 18 }}
              >
                Node Js
              </Typography>
              <Rating name="React Js" defaultValue={3.5} precision={0.5} readOnly />
              <Typography
                component="legend"
                sx={{ color: "black", fontSize: 18 }}
              >
                Problem-Solving
              </Typography>
              <Rating name="React Js" defaultValue={4}  readOnly />
            </Box>
          </div>
          <div id="about-picture">
            <img alt="Andre sitting down" src={Andre} id="andre" />
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
