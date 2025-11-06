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
          sx={{mt: { xs: 10, sm: 15, md: 20 }, fontWeight: "bold", px: 2 }}
        >
          Portfolio
        </Typography>
        <Typography variant="h5" color='white' sx={{mb: { xs: 6, sm: 8, md: 10 }, mt: { xs: 2, sm: 3, md: 4 }, px: 2 }}>
          Below are some of my mobile and web projects that showcase my React Native development skills.
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={4} sx={{ px: { xs: 2, sm: 0 } }}>
            {projectData.map(({ id, title, description, image, repository, url }) => (
              <Grid item xs={12} sm={6} md={4} key={id} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ width: '100%', maxWidth: 345 }} >
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
                      {url && (
                        <Button
                          size="medium"
                          variant="contained"
                          href={url}
                          target="_blank"
                        >
                          View App
                        </Button>
                      )}
                      {repository && (
                        <Button
                          size="medium"
                          variant="contained"
                          href={repository}
                          target="_blank"
                        >
                          Code
                        </Button>
                      )}
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
                fontSize: { xs: "60px", sm: "75px", md: "90px" },
                color: "white",
                justifyContent: "center",
                mt: { xs: 4, sm: 6 },
              }}
              id="arrow"
            />
          </Link>
        </IconButton>
      </Container>
    </section>
  );
}
