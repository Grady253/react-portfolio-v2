import {
  Stack,
  Typography,
  Divider,
  IconButton,
  Container,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-scroll/modules";
import TypewriterComponent from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DescriptionIcon from "@mui/icons-material/Description";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState } from "react";

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleResumeClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleResumeClose = () => {
    setAnchorEl(null);
  };

  const handleResumeDownload = () => {
    const resumeUrl = `${process.env.PUBLIC_URL || ""}/Resume.pdf`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Andre_Grady_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleResumeClose();
  };
  return (
    <Container maxWidth="md">
      <section className="home">
        <Typography sx={{  typography:{ xs:'h3', sm:'h2', md:'h1'} }} color={"primary.main"} component="div">
          <TypewriterComponent
            options={{
              strings: ["Andre' Grady", "Mobile Developer", "Creative", "Determined"],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        <Typography sx={{ fontSize: { xs: "28px", sm: "40px", md: "50px" }, color: "white", px: 2 }} id="home-title" component="div">
          React Native Mobile Engineer
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 4 }}
          mt={6}
          alignItems="center"
          divider={<Divider orientation="vertical" color="white" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />}
          sx={{ justifyContent: "center", px: 2 }}
        >
          <IconButton sx={{ color: "black" }}>
            <a
              href="https://github.com/Grady253"
              target="_blank"
              rel="noreferrer"
              sx={{ color: "white" }}
            >
              <GitHubIcon sx={{ fontSize: "40px" }} />
            </a>
          </IconButton>
          <Button
            id="resume"
            sx={{ border: "solid 1px" }}
            size="medium"
            variant="contained"
            onClick={handleResumeClick}
            startIcon={<DescriptionIcon />}
            aria-controls={open ? "resume-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Resume
          </Button>
          <Menu
            id="resume-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleResumeClose}
            MenuListProps={{
              "aria-labelledby": "resume-button",
            }}
          >
            <MenuItem 
              component="a"
              href={`${process.env.PUBLIC_URL || ""}/Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClose}
            >
              <OpenInNewIcon sx={{ mr: 1 }} />
              View Resume
            </MenuItem>
            <MenuItem onClick={handleResumeDownload}>
              <FileDownloadIcon sx={{ mr: 1 }} />
              Download PDF
            </MenuItem>
          </Menu>
          <IconButton sx={{ color: "black" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/andre-d-grady/"
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
                fontSize: { xs: "60px", sm: "75px", md: "90px" },
                color: "white",
                justifyContent: "center",
                mt: { xs: 4, sm: 6, md: 8 },
              }}
              id="arrow"
            />
          </Link>
        </IconButton>
      </section>
    </Container>
  );
}
