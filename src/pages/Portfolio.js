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
  IconButton,
} from "@mui/material";
import { Link } from "react-scroll/modules";
import projectData from "../utilies/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Portfolio() {
  return (
    <Box id="portfolio" sx={{ minHeight: "100vh", px: 4 }}>
      <Typography
        variant="h2"
        color="white"
        id="about-title"
        sx={{ pt: 12, fontWeight: "bold", textAlign: "center" }}
      >
        Portfolio
      </Typography>
      <Typography variant="h5" color='white' sx={{ mb: 10, mt: 4, textAlign: 'center' }}>
        Below are a couple of my personal projects that I've built.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projectData.map(({ title, description, image, repository, url, stack }) => (
          <Grid item xs={12} sm={6} md={4} key={title}>
            <Card sx={{ width: '100%', maxWidth: 345, margin: '0 auto' }}>
              <CardActionArea>
                <CardMedia
                  id="card-image"
                  component="img"
                  height="150"
                  src={image}
                  alt="Projects"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">{title}</Typography>
                  <Typography variant="body2" color="textSecondary">{description}</Typography>
                  {stack && (
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Tech Stack:</strong> {stack.join(', ')}
                    </Typography>
                  )}
                </CardContent>
                <CardActions id="cardBtn">
                  <Button size="medium" variant="contained" href={url} target="_blank">Demo</Button>
                  <Button size="medium" variant="contained" href={repository} target="_blank">Repo</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={6}>
        <IconButton>
          <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
            <KeyboardArrowDownIcon
              sx={{ fontSize: "90px", color: "white" }}
              id="arrow"
            />
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
}
