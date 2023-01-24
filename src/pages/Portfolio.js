import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import projectData from "../utilies/data";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Typography
        variant="h2"
        color="white"
        id="about-title"
        sx={{ mb: 20, mt: 25, fontWeight: "bold" }}
      >
        Portfolio
      </Typography>
      <Box sx={{ flexGrow: 1, padding: 5 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          align="center"
        >
          {projectData.map(
            ({ title, description, image, respository, url }) => (
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  sx={{
                    height: 550,
                    width: 400,
                    borderRadius: 10,
                    border: "9px solid primary",
                  }}
                >
                  <CardMedia
                    id="card-image"
                    component="img"
                    image={image}
                    alt=""
                  />
                  <div className="content">
                    <CardContent>
                      <Typography
                        className="card-title"
                        variant="h3"
                        component="div"
                      >
                        {title}
                      </Typography>
                      <Typography
                        className="card-info"
                        variant="h6"
                        component="p"
                      >
                        {description}
                      </Typography>
                      <CardActions className="card-btn">
                        <Button
                          variant="contained"
                          size="large"
                          href={respository}
                          target="_blank"
                        >
                          Repo
                        </Button>
                        <Button
                          variant="contained"
                          size="large"
                          href={url}
                          target="_blank"
                        >
                          Live
                        </Button>
                      </CardActions>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </section>
  );
}
