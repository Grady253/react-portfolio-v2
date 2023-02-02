import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  CardActionArea,
  Container,
  IconButton,
} from "@mui/material";
import { Link } from "react-scroll/modules";
import projectData from "../utilies/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          color="white"
          id="about-title"
          sx={{mt: 25, fontWeight: "bold" }}
        >
          Portfolio
        </Typography>
        <Typography variant="h5" color='white' sx={{mb: 10, mt:4}}>
          Below are a couple of my personal project that I've built.
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={4}>
            {projectData.map(({ title, description, image, repository, url }) => (
              <Grid item xs={10} sm={6} md={4}>
                <Card sx={{ width: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      id="card-image"
                      component="img"
                      height="150"
                      src={image}
                      alt="Projects"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {description}
                      </Typography>
                    </CardContent>
                    <CardActions id="cardBtn">
                      <Button
                        size="medium"
                        variant="contained"
                        href={url}
                        target="_blank"
                      >
                        Demo
                      </Button>
                      <Button
                        size="medium"
                        variant="contained"
                        href={repository}
                        target="_blank"
                      >
                        Repo
                      </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <IconButton>
          <Link
            to='contact'
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
      </Container>
    </section>
  );
}
