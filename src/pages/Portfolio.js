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
  Link,
  IconButton
} from "@mui/material";
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
          sx={{ mb: 20, mt: 25, fontWeight: "bold" }}
        >
          Portfolio
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
            {projectData.map(({ title, description, image, url }) => (
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
                    <CardActions>
                      <Button
                        size="medium"
                        variant="contained"
                        href={url}
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <IconButton>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "90px",
                color: "white",
                justifyContent: "center",
                mt: "200px",
              }}
              id="arrow"
            />
          </Link>
        </IconButton>
      </Container>
    </section>
  );
}
