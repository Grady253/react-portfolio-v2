import {
  Stack,
  Typography,
  Divider,
  IconButton,
  Link,
  Container,
  Button,
} from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  const onButtonClick = () =>{
    fetch('Resume.pdf').then(response => {
      response.blob().then(blob =>{
        const pdfURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = pdfURL;
        alink.download = "Resume.pdf";
        alink.click();
      })
    })
  }
  return (
    <Container maxWidth="md">
      <section className="home">
        <Typography sx={{fontSize:"130px"}} color={"primary.main"}>
          <TypewriterComponent
            options={{
              strings: ["Andre' Grady"],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        <Typography sx={{fontSize:"50px"}}>Software Engineer</Typography>
        <div className="icon-place">
          <Stack
            direction="row"
            spacing={4}
            mt={6}
            divider={<Divider orientation="vertical" color="black" flexItem />}
          >
            <IconButton sx={{ color: "black" }}>
              <Link href="https://github.com/Grady253" sx={{color:"#171515"}}>
                <GitHubIcon sx={{ fontSize: "40px" }} />
              </Link>
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <Link
                href="https://www.linkedin.com/in/andre-grady-a70237190/"
                sx={{color:"#0A66C2"}}
              >
                <LinkedInIcon sx={{ fontSize: "40px" }} />
              </Link>
            </IconButton>
            <Button variant="contained" onClick={onButtonClick}>
              Resume
            </Button>
          </Stack>
        </div>
      </section>
    </Container>
  );
}
