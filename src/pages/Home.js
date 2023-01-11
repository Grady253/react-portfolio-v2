import { Stack, Typography,Divider } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
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
      divider={<Divider orientation="vertical" color="black" flexItem />}
      >
        <GitHubIcon sx={{fontSize:'50px'}} />
        <LinkedInIcon sx={{fontSize:'50px'}} />
      </Stack>
    </section>
  );
}
