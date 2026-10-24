// Site content lives here so updates never require touching the layout.
// To add a project, add one object to `projects`. Set `featured: true` on
// the one you want in the big tile.

const PORTFOLIO = {
  profile: {
    name: "Tony Martz",
    email: "jua2131999@maricopa.edu",
    github: "https://github.com/Obi-Juan-Kenobee",
    linkedin: "https://linkedin.com/in/obi-juan-kenobi",
    resume: "pages/resume.html",
  },

  projects: [
    {
      title: "Trade Tracker",
      featured: true,
      stack: ["JavaScript", "HTML", "CSS"],
      description:
        "A trade journal for logging, analyzing and visualizing trading performance, with a dashboard, calendar view, trade history, CSV import and an analytics page.",
      image: "projects/web/Trade-Tracker/assets/Landing-Page.png",
      demo: "projects/web/Trade-Tracker/index.html",
      code: "",
    },
    {
      title: "Social Media Blog API",
      stack: ["Java", "Spring Boot", "JPA"],
      description:
        "A REST API for registration, login and message CRUD, migrated to Spring for dependency injection and JPA persistence.",
      demo: "",
      code: "",
    },
    {
      title: "Simon Game",
      stack: ["JavaScript", "jQuery"],
      description:
        "The classic memory game in the browser, with growing color sequences and sound.",
      demo: "projects/web/Simon%20Game/index.html",
      code: "",
    },
    {
      title: "Drum Kit",
      stack: ["JavaScript"],
      description:
        "A playable drum kit that responds to clicks and key presses with sound.",
      demo: "projects/web/Drum%20Kit/index.html",
      code: "",
    },
    {
      title: "Recipe Page",
      stack: ["HTML", "CSS"],
      description:
        "A responsive recipe layout built close to a design spec, mobile first.",
      demo: "projects/web/recipe-page/index.html",
      code: "",
    },
  ],

  skills: {
    Languages: ["Java", "JavaScript", "SQL", "Python", "HTML", "CSS"],
    Frameworks: ["Spring Boot", "Node.js", "Express", "Javalin", "React", "Bootstrap"],
    Tools: ["Git", "GitHub", "REST APIs", "JUnit", "Mockito", "Maven", "Postman", "Agile"],
  },

  experience: [
    { role: "Java Intern", org: "Revature", dates: "2024–25" },
    { role: "Assistant Manager", org: "YC's BBQ Grill", dates: "2022–24" },
    { role: "Math Tutor", org: "Mesa Community College", dates: "2017–20" },
  ],
};
