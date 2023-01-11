import { Typography } from "@mui/material";
import TypewriterComponent from "typewriter-effect";

export default function Home(){
    return (
        <section>
          <Typography variant="h1" color={"primary.main"}>
             <TypewriterComponent 
             options={{
                strings: ["Andre' Grady"],
                autoStart: true,
                loop: true,
             }}
             />
             </Typography>
             <Typography variant="h3">
             Front-end Web-Developer
             </Typography>
        </section>
    )
}