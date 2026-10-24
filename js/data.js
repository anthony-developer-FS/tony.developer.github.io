// Site content lives here so updates never require touching the layout.
// To add a project, add one object to `projects`. Set `featured: true` on
// the one you want in the big tile; give it an `image` screenshot or
// `highlights` to fill the preview area.

const PORTFOLIO = {
  profile: {
    name: "Tony Martz",
    email: "Tony.Martz.Developer@gmail.com",
    github: "https://github.com/anthony-developer-FS",
    linkedin: "https://www.linkedin.com/in/tony-developer/",
    resume: "assets/Tony-Martz-Resume.pdf",
  },

  projects: [
    {
      title: "Social Media Blog API",
      featured: true,
      stack: ["Java", "Spring Boot", "Spring Data JPA"],
      description:
        "A REST API for registration, login and message CRUD, migrated to Spring for dependency injection and JPA persistence.",
      // Shown in the featured tile when there is no screenshot.
      highlights: {
        auth: "registration + login",
        messages: "create, read, update, delete",
        framework: "Spring Boot + Spring Web",
        persistence: "Spring Data JPA",
      },
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
