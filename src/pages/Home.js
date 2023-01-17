import {
  Stack,
  Typography,
  Divider,
  IconButton,
  // Link,
  Container,
  Button,
} from "@mui/material";
import { Link } from "react-scroll/modules";
import TypewriterComponent from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Home() {
  const onButtonClick = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const pdfURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = pdfURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <Container maxWidth="md">
      <section className="home">
        <Typography sx={{ fontSize: "130px" }} color={"primary.main"}>
          <TypewriterComponent
            options={{
              strings: ["Andre' Grady"],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        <Typography sx={{ fontSize: "50px", color: "white" }}>
          Software Engineer
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          mt={6}
          divider={<Divider orientation="vertical" color="white" flexItem />}
          style={{ justifyContent: "center" }}
        >
          <IconButton sx={{ color: "black" }}>
            <a href="https://github.com/Grady253" sx={{ color: "white" }}>
              <GitHubIcon sx={{ fontSize: "40px" }} />
            </a>
          </IconButton>
          <Button
            id="resume"
            sx={{ border: "solid 1px" }}
            size="medium"
            variant="contained"
            onClick={onButtonClick}
          >
            Resume
          </Button>
          <IconButton sx={{ color: "black" }}>
            <a
              href="https://www.linkedin.com/in/andre-grady-a70237190/"
              sx={{ color: "#0A66C2" }}
            >
              <LinkedInIcon sx={{ fontSize: "40px" }} />
            </a>
          </IconButton>
        </Stack>
        <IconButton>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
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
      </section>
    </Container>
  );
}
