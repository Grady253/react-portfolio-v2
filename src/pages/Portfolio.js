import { Container, Typography } from "@mui/material";

export default function Portfolio() {
  return (
    <Container maxWidth="md">
      <div id="portfolio">
        <Typography
          variant="h2"
          color="white"
          id="about-title"
          sx={{ mb: 20, mt: 25, fontWeight: "bold" }}
        >
          Portfolio
        </Typography>
      </div>
    </Container>
  );
}
