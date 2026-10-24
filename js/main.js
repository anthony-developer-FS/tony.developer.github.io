// Renders the data-driven tiles (projects, skills, experience) and wires up
// the theme toggle, skill tabs and scroll reveal.

document.documentElement.classList.add("js");

const { profile, projects, skills, experience } = PORTFOLIO;

const arrowIcon =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>';

// ===== Profile links =====
const links = {
  email: `mailto:${profile.email}`,
  github: profile.github,
  linkedin: profile.linkedin,
  resume: profile.resume,
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const href = links[el.dataset.link];
  if (href) el.href = href;
});

document.querySelector(".year").textContent = new Date().getFullYear();

// ===== Projects =====
function tagList(stack) {
  return `<ul class="tags">${stack.map((s) => `<li>${s}</li>`).join("")}</ul>`;
}

function projectLinks(p) {
  const items = [];
  if (p.demo) items.push(`<a href="${p.demo}">Live demo ↗</a>`);
  items.push(
    `<a href="${p.code || profile.github}" target="_blank" rel="noopener noreferrer">View code →</a>`
  );
  return `<div class="project-links">${items.join("")}</div>`;
}

function featuredTile(p) {
  const href = p.demo || p.code || profile.github;
  const shot = p.image
    ? `<img src="${p.image}" alt="Screenshot of ${p.title}" loading="lazy" />`
    : "";
  return `
    <article class="tile tile--project tile--featured w2 h2 reveal">
      <div class="featured-head">
        <span class="label">Featured project</span>
        <a class="round-link" href="${href}" aria-label="Open ${p.title}">${arrowIcon}</a>
      </div>
      <div class="shot">${shot}</div>
      <div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
      ${tagList(p.stack)}
    </article>`;
}

function projectTile(p) {
  return `
    <article class="tile tile--project reveal">
      ${tagList(p.stack)}
      <div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
      ${projectLinks(p)}
    </article>`;
}

const sorted = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
document
  .getElementById("work")
  .insertAdjacentHTML(
    "afterend",
    sorted.map((p) => (p.featured ? featuredTile(p) : projectTile(p))).join("")
  );

// ===== Skills tabs =====
const tabList = document.querySelector(".tabs");
const chipList = document.querySelector(".chips");
const categories = Object.keys(skills);

function showSkills(category) {
  tabList.querySelectorAll(".tab").forEach((tab) => {
    const selected = tab.dataset.category === category;
    tab.setAttribute("aria-selected", selected);
    tab.tabIndex = selected ? 0 : -1;
  });
  chipList.innerHTML = skills[category]
    .map((s, i) => `<li style="animation-delay:${i * 30}ms">${s}</li>`)
    .join("");
}

tabList.innerHTML = categories
  .map(
    (c) =>
      `<button class="tab" type="button" role="tab" data-category="${c}">${c}</button>`
  )
  .join("");

tabList.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (tab) showSkills(tab.dataset.category);
});

// Arrow keys move between tabs, as the ARIA tabs pattern expects.
tabList.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  const tabs = [...tabList.querySelectorAll(".tab")];
  const current = tabs.indexOf(document.activeElement);
  const next = (current + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
  tabs[next].focus();
  showSkills(tabs[next].dataset.category);
});

showSkills(categories[0]);

// ===== Experience =====
document.querySelector(".timeline").innerHTML = experience
  .map(
    (job) => `
      <li>
        <span class="role">${job.role} <span class="org">· ${job.org}</span></span>
        <span class="dates">${job.dates}</span>
      </li>`
  )
  .join("");

// ===== Theme toggle =====
const root = document.documentElement;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return root.dataset.theme || (prefersDark.matches ? "dark" : "light");
}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
