/* ===== EDIT THIS BLOCK: all placeholder content lives here ===== */
const CONFIG = {
  name: "Aditya B Koparde",
  headline: "Computer science student building skills in code and data.",
  intro: "First-year B.Tech student in Computer Science and Business Systems at Visvesvaraya Technological University. I'm looking for internships and projects where I can learn, contribute and grow.",
  about: "I'm a first-year CSBS student who enjoys combining technical skills with a business mindset. I'm learning programming and databases, practising web development, and building a foundation in design and office tools. I'm eager to work on real projects, learn from experienced people, and deliver careful, reliable work.",
  skills: ["Python", "MySQL", "C", "HTML", "CSS", "JavaScript", "Data Entry", "MS Office", "Canva Designing"],
  projectsNote: "I'm just getting started. My first projects will appear here soon.",
  projects: [],
  jobs: [
    { role: "B.Tech, Computer Science and Business Systems (CSBS)", org: "Visvesvaraya Technological University", dates: "Currently in 1st year", text: "Fresher open to internships and entry-level opportunities." },
    { role: "Higher Secondary Education (Class 12)", org: "PM SHRI Kendriya Vidyalaya No. 2 Belagavi Cantt.", dates: "2025 – 2026", text: "" },
    { role: "Secondary Education (Class 10)", org: "Dr. Rajendra Prasad Kendriya Vidyalaya, President Estate", dates: "2023 – 2024", text: "" }
  ],
  languages: [
    { name: "English", level: "Reading, Speaking, Writing" },
    { name: "Hindi", level: "Reading, Speaking, Writing" },
    { name: "Marathi", level: "Spoken & Understood" },
    { name: "Kannada", level: "Spoken & Understood" }
  ],
  email: "adityakoparde001@gmail.com",
  linkedin: "https://www.linkedin.com/in/aditya-koparde-2b89b0430",
  github: "https://github.com/AdityaKoparde",
  footer: "© 2026 Aditya B Koparde"
};
/* ===== END EDIT BLOCK ===== */

const $ = s => document.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

document.querySelectorAll("[data-f]").forEach(el => el.textContent = CONFIG[el.dataset.f]);
document.title = CONFIG.name + " – Portfolio";
$("#skills").innerHTML = CONFIG.skills.map(s => `<li>${esc(s)}</li>`).join("");
$("#projects").innerHTML = !CONFIG.projects.length ? `<article class="project"><h3>Projects coming soon</h3><p>${esc(CONFIG.projectsNote)}</p><a href="${esc(CONFIG.github)}">Follow on GitHub</a></article>` : CONFIG.projects.map(p =>
  `<article class="project"><div class="tags">${esc(p.tags)}</div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><a href="${esc(p.link)}">View project</a></article>`).join("");
$("#jobs").innerHTML = CONFIG.jobs.map(j =>
  `<div class="job"><b>${esc(j.role)}, ${esc(j.org)}</b><span>${esc(j.dates)}</span><span>${esc(j.text)}</span></div>`).join("");
$("#photo").src = "images/profile.jpg";
$("#langs").innerHTML = CONFIG.languages.map(l => `<div class="job"><b>${esc(l.name)}</b><span>${esc(l.level)}</span></div>`).join("");
$("#li").href = CONFIG.linkedin;

$("#gh").href = CONFIG.github;

$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("m")}\n\n– ${f.get("n")} (${f.get("e")})`;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio enquiry from " + f.get("n"))}&body=${encodeURIComponent(body)}`;
});

$("#theme").addEventListener("click", () => {
  const r = document.documentElement;
  const dark = getComputedStyle(r).getPropertyValue("--bg").trim() === "#12181a";
  r.dataset.theme = dark ? "light" : "dark";
});
