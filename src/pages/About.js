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
          sx={{ mb: 6, mt: { xs: 8, sm: 12, md: 15 }, fontWeight: "bold", px: 2 }}
        >
          About Me
        </Typography>
        <section className="about-Me">
          <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          <Grid item xs={12} sm={10} md={5} sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 0 } }}>
          <div id="about-picture" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img alt="Andre sitting down" src={Andre} id="andre" />
          </div>
          </Grid>
          <Grid item xs={12} sm={10} md={6} sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Box id="about-Text" sx={{ textAlign: { xs: 'left', md: 'left' } }}>
              <Typography color="white" component="p" sx={{ fontSize: { xs: "18px", sm: "20px", md: "23px" }, px: { xs: 2, sm: 2, md: 0 }, mb: 2, lineHeight: 1.6 }}>
                Hi, my name is Andre' Grady. I'm a React Native Mobile Engineer with a passion for 
                building cross-platform mobile applications that deliver exceptional user experiences 
                on both iOS and Android. I specialize in developing native-feeling mobile apps using 
                React Native, with expertise in performance optimization, state management, and 
                mobile UI/UX design.
              </Typography>

              <Typography color="white" component="p" sx={{ fontSize: { xs: "18px", sm: "20px", md: "23px" }, px: { xs: 2, sm: 2, md: 0 }, mb: 2, lineHeight: 1.6 }}>
                I'm driven by creating high-performance mobile applications that prioritize smooth 
                animations, responsive interactions, and offline capabilities. My approach combines 
                creative problem-solving with technical excellence, ensuring clean, maintainable code 
                and intuitive mobile interfaces. I have experience working with native modules, 
                third-party APIs, and mobile-specific features like push notifications, camera 
                integration, and geolocation services.
              </Typography>
              
              <Typography color="white" component="div" sx={{ fontSize: { xs: "18px", sm: "20px", md: "23px" }, px: { xs: 2, sm: 2, md: 0 }, mt: 3 }}>
                <Typography component="span" sx={{ textDecoration: 'underline', fontWeight: 600 }}>
                  Here are some of the technologies I work with:
                </Typography>
                <ul id="tech-list" style={{ marginTop: '10px', marginBottom: 0 }}>
                  <li>React Native</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>Expo</li>
                  <li>React Navigation</li>
                  <li>Redux / Context API</li>
                  <li>React Hooks</li>
                  <li>Axios / Fetch</li>
                  <li>Firebase</li>
                  <li>Native Modules</li>
                  <li>iOS & Android</li>
                  <li>Git & Gitlab</li>
                </ul>
              </Typography>
            </Box>
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
                fontSize: { xs: "60px", sm: "75px", md: "90px" },
                color: "white",
                justifyContent: "center",
                mt: { xs: 4, sm: 6 },
              }}
              id="arrow"
            />
          </Link>
        </IconButton>
      </div>
    </Container>
  );
}
