import * as React from "react";
import {
  Typography,
  Container,
  IconButton,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-scroll/modules";
import Andre from "../photos/Andre.png";

export default function About() {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "NPM",
    "jQuery",
    "MySQL",
    "MongoDB",
    "React Native",
    "CI/CD",
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          color="white"
          id="about-title"
          sx={{ mb: 6, fontWeight: "bold", textAlign: "center" }}
        >
          About Me
        </Typography>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" justifyContent="center">
              <img
                alt="Andre Grady"
                src={Andre}
                id="andre"
                style={{ borderRadius: "12px", width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box>
              <Typography
                color="white"
                component="div"
                sx={{ fontSize: "18px", lineHeight: 1.8 }}
              >
                <p>
                  Hi, I'm <strong>Andre' Grady</strong> — a passionate software
                  engineer specializing in full-stack web and mobile
                  development.
                </p>
                <p>
                  I currently work at <strong>Sinclair Digital</strong> where I
                  help build and maintain mobile applications across 74 news
                  stations nationwide. My focus is on performance, clean
                  architecture, and delivering seamless user experiences.
                </p>
                <p>
                  I take pride in crafting applications that are fast, scalable,
                  and intuitive — from clean UI components to robust backend
                  integrations.
                </p>
                <p>
                  Outside of work, I enjoy gaming, football, exploring nature,
                  and reading about emerging tech.
                </p>
              </Typography>
              <Typography color="white" sx={{ mt: 3, fontWeight: "bold" }}>
                Technologies I work with:
              </Typography>
              <List
                dense
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  color: "white",
                  mt: 1,
                  pl: 0,
                }}
              >
                {techStack.map((tech) => (
                  <ListItem key={tech} sx={{ width: "auto", minWidth: "120px" }}>
                    <ListItemIcon>
                      <CodeIcon sx={{ color: "#F2AF29" }} />
                    </ListItemIcon>
                    <ListItemText primary={tech} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" mt={4}>
          <IconButton>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <KeyboardArrowDownIcon
                sx={{ fontSize: "90px", color: "white" }}
                id="arrow"
              />
            </Link>
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
