import { Stack, Typography, Divider, IconButton, Link, Container } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  return (
    <Container maxWidth='md'>

    <section className="home">
      <Typography variant="h1" color={"primary.main"}>
        <TypewriterComponent
          options={{
              strings: ["Andre' Grady"],
              autoStart: true,
              loop: true,
            }}
            />
      </Typography>
      <Typography variant="h3">Front-end Web-Developer</Typography>
      <Stack
        direction="row"
        spacing={8}
        alignItems='center'
        mt={6}
        divider={<Divider orientation="vertical" color="black" flexItem />}
        >
        <IconButton sx={{ color: "black" }}>
          <Link 
            href="https://github.com/Grady253" 
            color="inherit"
            >
            <GitHubIcon sx={{ fontSize: "50px" }} />
          </Link>
        </IconButton>
        <IconButton sx={{ color: "black" }}>
          <Link
            href="https://www.linkedin.com/in/andre-grady-a70237190/"
            color="inherit"
            >
            <LinkedInIcon sx={{ fontSize: "50px" }} />
          </Link>
        </IconButton>
      </Stack>
    </section>
              </Container>
  );
}
