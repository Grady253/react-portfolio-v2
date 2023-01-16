import { Box, Container, Typography } from "@mui/material";
import Andre from "../photos/Andre.png";

export default function About() {
  return (
    <Container maxWidth="md">
        <Box sx={{ width: 100, height: 200, borderRadius:'50%' }}>
          <img alt="Andre sitting down" src={Andre} id="andre" />
        </Box>
        <Typography>babajkhfhfihsfh hfdhifhsff fdufhuhf hfha h</Typography>
    </Container>
  );
}
