import Planner from "../photos/DailyPlanner.png";
import Music from "../photos/Music-Match.png";
import Generator from "../photos/PasswordGenerator.png";
import Quiz from "../photos/JavascriptQuiz.png";


const data = [
  {
    id: 1,
    title: "Daily Planner",
    description:
      "Plan your daily task with a color coordination of time to keep you on track.",
    image: Planner,
    repository: "https://github.com/Grady253/daily_planner",
    url: "https://grady253.github.io/daily_planner/",
  },
  {
    id: 2,
    title: "Password Generator",
    description:
      "Generate a random password after you answer a series of questions.",
    image: Generator,
    repository: "https://github.com/Grady253/generate-password",
    url: "https://grady253.github.io/generate-password/",
  },
  {
    id: 3,
    title: "Music Match",
    description:
      "A way to connect musicians and producers to transform talents to the next step.",
    image: Music,
    repository: "https://github.com/KarlOL82/music-match",
    url: "https://groove-connection.herokuapp.com/",
  },
  {
    id:4,
    title:"Javascript Quiz Game",
    description:"A short quiz to test your javascript knowledge. Enjoy!",
    image:Quiz,
    repsitory:"https://github.com/Grady253/timed_quiz",
    url:"https://grady253.github.io/timed_quiz/"
  }
];

export default data;
