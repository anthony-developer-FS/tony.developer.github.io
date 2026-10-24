# Tony Martz | Personal Portfolio Website

A responsive personal portfolio website built to showcase technical projects, professional experience, and skills. Designed with a mobile-first approach using vanilla HTML, CSS, and JavaScript.

## Live Site

[anthony-developer-fs.github.io/tony.developer.github.io](https://anthony-developer-fs.github.io/tony.developer.github.io/), hosted on GitHub Pages from the `main` branch.

## Features

- **Bento grid layout** — Single-page portfolio with intro, projects, skills, experience, education and contact tiles
- **Data-driven content** — Projects, skills and experience live in `js/data.js`; add a project by adding one entry
- **Light and dark themes** — Follows the system setting, with a toggle that remembers your choice
- **Responsive** — Four, two or one column depending on screen width
- **Accessible** — Keyboard-friendly skill tabs, skip link, visible focus and reduced-motion support
- **Live project demos** — Hosted under `projects/web/`

## Tech Stack

- **Languages** — HTML5, CSS3, JavaScript (ES6+)
- **Fonts** — Google Fonts (Space Grotesk, Space Mono)
- **Hosting** — GitHub Pages

## Project Structure

```
├── index.html          # Home page (bento grid)
├── css/
│   ├── main.css        # Site styles and theme tokens
│   └── back-link.css   # "Back to portfolio" link on project demos
├── js/
│   ├── data.js         # Profile links, projects, skills, experience
│   └── main.js         # Renders tiles, theme toggle, tabs, scroll reveal
├── assets/             # Photo and resume PDF
├── stylesheets/        # Legacy styles still used by the project demos
└── projects/web/       # Project demos
```

## Updating the Site

Almost everything you'll change lives in `js/data.js`. Edit it, commit to `main`, and GitHub Pages redeploys in a minute or two.

### Add a project

Add an object to the `projects` array:

```js
{
  title: "My New Project",
  stack: ["Java", "Spring Boot"],          // shown as tags
  description: "One or two sentences for the tile.",
  writeup: {                               // optional: adds a Details button
    overview: "What it is and who it's for.",
    built: "How it works and the main technical choices.",
    learned: "Optional: what you learned building it.",
  },
  demo: "projects/web/my-new-project/index.html", // or a full URL, or "" for none
  code: "https://github.com/anthony-developer-FS/my-new-project", // "" links to your profile
},
```

- **Featured tile:** set `featured: true` on one project (and remove it from the old one). Give it an `image` (a screenshot path, ideally 16:10) or a `highlights` object for the code-style panel.
- **Hosted demos:** put the demo in `projects/web/<name>/` and use relative paths inside it (`styles.css`, not `/styles.css`), since the site is served from a sub-path. Add `<link rel="stylesheet" href="../../../css/back-link.css">` and `<a class="back-link" href="../../../index.html">← Back to portfolio</a>` to give it the back button.
- **Grid balance:** the home grid looks best with three or four small project tiles next to the featured one. With more, the extra tiles flow into new rows automatically.

### Update other content

- **Skills:** the `skills` object in `js/data.js`. Each key is a tab.
- **Experience:** the `experience` array in `js/data.js`.
- **Links and resume:** `profile` in `js/data.js`. To update the resume, replace `assets/Tony-Martz-Resume.pdf` with a file of the same name.
- **Intro, status, education and location tiles:** edit the text directly in `index.html`.
- **Colors and fonts:** the tokens at the top of `css/main.css` (`--accent`, `--bg`, and so on), with dark-mode values just below them.

### Moving to a custom domain

Update the URLs that point at the GitHub Pages address: the `canonical`, `og:url`, `og:image` and structured-data `url` in `index.html`, and the `/tony.developer.github.io/` paths in `404.html`.

## Recent Updates

See [CHANGELOG.MD](CHANGELOG.MD) for a detailed history of changes.

## Author

**Tony Martz** — Software Engineer

## 📬 Contact

Feel free to reach out to me:
- Email: Tony.Martz.Developer@gmail.com
- LinkedIn: [linkedin.com/in/tony-developer](https://www.linkedin.com/in/tony-developer/)
- GitHub: [github.com/anthony-developer-FS](https://github.com/anthony-developer-FS)
