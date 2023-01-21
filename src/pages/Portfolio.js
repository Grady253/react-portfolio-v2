import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import projectData from "../utilies/data";

export default function Portfolio() {
  return (
    <Container maxWidth="xl">
      <div id="portfolio">
        <Typography
          variant="h2"
          color="white"
          id="about-title"
          sx={{ mb: 20, mt: 25, fontWeight: "bold" }}
        >
          Portfolio
        </Typography>
          {projectData.map(({title, description, image, respository, url})=>(
        <div className="cards">
            <Card sx={{maxWidth:600, height:400, borderRadius:10,border:"9px solid white", position:'relative'}}>
              <CardMedia
                id='card-image'
                component='img'
                image={image}
                alt=''
              />
              <CardContent className="card-body">
                <Typography className="card-title" variant="h3" component='div'>{title}</Typography>
                <Typography className="card-info"  variant='h6' component='p'>{description}</Typography>
                <CardActions className="card-btn">
                  <Button  variant="contained" size='large' href={respository} target='_blank'>Repo</Button>
                  <Button variant="contained" size='large' href={url} target='_blank'>Live</Button>
                </CardActions>
              </CardContent>
            </Card>
        </div>
          ))}
      </div>
    </Container>
  );
}
