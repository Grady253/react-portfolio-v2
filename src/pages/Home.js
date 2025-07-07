import {
  Stack,
  Typography,
  Divider,
  IconButton,
  Button,
  Box
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
        alink.download = "Andre_Grady_Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' }, fontWeight: 600 }}
        color="primary.main"
      >
        <TypewriterComponent
          options={{
            strings: ["Andre' Grady", "Creative Developer", "Problem Solver", "Versatile Engineer"],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>

      <Typography sx={{ fontSize: "32px", color: "white", mt: 2 }} id="home-title">
        Software Engineer | Full-Stack & Mobile
      </Typography>

      <Typography variant="body1" sx={{ mt: 2, color: 'white', fontSize: '18px', maxWidth: 600 }}>
        I design and develop scalable, user-focused applications with a passion for performance and clean code.
      </Typography>

      <Stack
        direction="row"
        spacing={4}
        mt={6}
        divider={<Divider orientation="vertical" color="white" flexItem />}
        justifyContent="center"
      >
        <IconButton href="https://github.com/Grady253" target="_blank" rel="noreferrer" sx={{ color: "white" }}>
          <GitHubIcon sx={{ fontSize: "36px" }} />
        </IconButton>
        <Button
          id="resume"
          sx={{ border: "solid 1px", px: 4, py: 1.5 }}
          size="medium"
          variant="contained"
          onClick={onButtonClick}
        >
          Download Resume
        </Button>
        <IconButton href="https://www.linkedin.com/in/andre-grady-a70237190/" target="_blank" rel="noreferrer" sx={{ color: "#0A66C2" }}>
          <LinkedInIcon sx={{ fontSize: "36px" }} />
        </IconButton>
      </Stack>

      <Box mt={10}>
        <IconButton>
          <Link to="about" spy={true} smooth={true} offset={0} duration={600}>
            <KeyboardArrowDownIcon
              sx={{ fontSize: "80px", color: "white" }}
              id="arrow"
            />
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
}
