// Site content lives here so updates never require touching the layout.
// To add a project, add one object to `projects`. Set `featured: true` on
// the one you want in the big tile; give it an `image` screenshot or
// `highlights` to fill the preview area. A `writeup` (overview, built,
// optional learned) adds a Details button that opens a longer description.

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
      // Longer write-up shown in the project's Details dialog.
      writeup: {
        overview:
          "The backend for a small social media app. Users register and log in, then post messages and read, update or delete them through REST endpoints.",
        built:
          "I moved the application onto the Spring Framework: Spring Web handles the endpoints, dependency injection wires the controllers to the services and repositories, and Spring Data JPA takes care of saving and querying accounts and messages.",
      },
      demo: "",
      code: "",
    },
    {
      title: "Simon Game",
      stack: ["JavaScript", "jQuery"],
      description:
        "The classic memory game: each level adds a color, and you repeat the whole sequence to keep going.",
      writeup: {
        overview:
          "A browser version of Simon. Each level flashes one more color, and the player has to repeat the entire sequence from the start. One wrong press ends the game.",
        built:
          "The game keeps two arrays, the generated pattern and the player's presses, and checks each press against the pattern at the same position. When the arrays match in length, the next level starts after a short pause. jQuery runs the flash and press animations, and each color plays its own sound. On phones and tablets the game detects a touch device and starts with a tap instead of a key press.",
      },
      demo: "projects/web/Simon%20Game/index.html",
      code: "",
    },
    {
      title: "Drum Kit",
      stack: ["JavaScript", "DOM events"],
      description:
        "Seven drum pads you can play by clicking or with the W, A, S, D, J, K and L keys.",
      writeup: {
        overview:
          "A playable drum kit with four toms, a snare, a crash and a kick drum. Each pad responds to a mouse click or to its key on the keyboard.",
        built:
          "One function maps each key to its sound with a switch statement. Click and keydown listeners both call it, then add a short pressed animation to the matching pad.",
      },
      demo: "projects/web/Drum%20Kit/index.html",
      code: "",
    },
    {
      title: "Recipe Page",
      stack: ["HTML", "CSS"],
      description:
        "A Frontend Mentor challenge: a recipe page built to match a design, mobile first, with no CSS framework.",
      writeup: {
        overview:
          "A solution to Frontend Mentor's Recipe page challenge, where the goal is to match a provided design as closely as possible.",
        built:
          "Semantic HTML and plain CSS with no framework, laid out mobile first. A media query caps the content at 900px on large screens and centers it on the page.",
        learned:
          "How to center elements reliably, especially the power of margin: 0 auto, which I want to keep practicing.",
      },
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
