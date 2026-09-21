import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/dev-adi-xo",
  github: "https://github.com/dev-aditya-design",
  email: "mailto:dev.adi.xo@gmail.com",
  whatsapp: "https://wa.me/919548027373",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,

  resumeAnalyzer: "https://ai-resume-analyzer-aditya.streamlit.app/",
  resumeAnalyzerRepo:
    "https://github.com/dev-aditya-design/ai-resume-analyzer",

  opportunityScout:
    "https://ai-opportunity-scout-hcgtp6eaurjcva2gpryt2l.streamlit.app/",
  opportunityScoutRepo:
    "https://github.com/dev-aditya-design/ai-opportunity-scout",

  ironcore: "https://ironcore-fitness-gym.vercel.app",
  ironcoreRepo:
    "https://github.com/dev-aditya-design/ironcore-premium-build",

  scopePilot: "https://scopepilot-ai.vercel.app",
  scopePilotRepo:
    "https://github.com/dev-aditya-design/scopepilot-ai",

  restaurantDemo: "https://royaltable-restaurant.vercel.app",
  restaurantDemoRepo:
    "https://github.com/dev-aditya-design/restaurant-website-demo",

    aurevia: "https://aurevia-properties.vercel.app",
aureviaRepo:
 "https://github.com/dev-aditya-design/aurevia-estates",
};

const projects = [
  {
    title: "ScopePilot AI",
    type: "AI Project Planning Agent",
    summary:
      "AI-powered full-stack application that transforms vague client briefs into structured requirements, tech stack recommendations, milestones, risks, deliverables and client-ready proposals.",
    stack: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "Gemini AI",
      "REST API",
    ],
    demo: LINKS.scopePilot,
    source: LINKS.scopePilotRepo,
    image: "/assets/projects/scopepilot-ai.jpg",
    featured: true,
  },
  {
    title: "The Royal Table",
    type: "Premium Restaurant Website",
    summary:
      "A premium responsive multi-page restaurant website designed for real-world client presentation with menu exploration, gallery, offers, reservations and contact information.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: LINKS.restaurantDemo,
    source: LINKS.restaurantDemoRepo,
    image: "/assets/projects/royal-table.jpg",
    featured: true,
  },
  {
    title: "IronCore Fitness",
    type: "Premium Gym Website",
    summary:
      "A premium responsive fitness website built for gym businesses and client presentations with training programs, membership-focused sections and strong calls to action.",
    stack: ["React", "TypeScript", "TanStack Start", "CSS"],
    demo: LINKS.ironcore,
    source: LINKS.ironcoreRepo,
    image: "/assets/projects/ironcore-fitness.jpg",
    featured: true,
  },
  {
  title: "Aurevia Estates",
  type: "Premium Real Estate Website",
  summary:
    "A premium multi-page real estate website with property discovery, filtering, detailed listings, agent profiles, enquiry forms, and a responsive luxury interface.",
  stack: ["React", "Vite", "JavaScript", "CSS", "Vercel"],
  demo: LINKS.aurevia,
  source: LINKS.aureviaRepo,
  image: "/assets/projects/aurevia-estates.jpg",
  featured: true,
  },
  {
    title: "AI Opportunity Scout",
    type: "AI Web Application",
    summary:
      "AI-powered opportunity discovery tool that helps developers find relevant hackathons, internships and competitions based on their skills and preferences.",
    stack: ["Python", "Streamlit", "SerpAPI", "AI", "GitHub"],
    demo: LINKS.opportunityScout,
    source: LINKS.opportunityScoutRepo,
    image: "/assets/projects/opportunity-scout.jpg",
    featured: false,
  },
  {
    title: "AI Resume Analyzer",
    type: "AI Application",
    summary:
      "ATS-style resume analysis that compares a resume with a job description, highlights skill gaps and gives practical improvement guidance.",
    stack: ["Python", "Streamlit", "NLP", "Scikit-learn"],
    demo: LINKS.resumeAnalyzer,
    source: LINKS.resumeAnalyzerRepo,
    image: "/assets/projects/resume-analyzer.jpg",
    featured: false,
  },
];

const services = [
  "Web Development",
  "Application Development",
  "AI Agents & Automation",
  "Animated Websites",
  "UI / UX Design",
  "Portfolio Design",
  "API Integration",
];

const skillGroups = [
  {
    label: "DEVELOPMENT",
    items: [
      "Python",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "FastAPI",
      "Git / GitHub",
    ],
  },
  {
    label: "AI & AUTOMATION",
    items: [
      "Generative AI",
      "Gemini AI",
      "AI Agents",
      "Workflow Automation",
      "n8n",
    ],
  },
  {
    label: "FOUNDATIONS",
    items: [
      "Software Engineering",
      "Problem Solving",
      "Data Structures",
      "REST APIs",
      "UI / UX",
    ],
  },
];

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [time, setTime] = useState("");
  const [allProjectsPage, setAllProjectsPage] = useState(false);

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };

    update();
    const id = setInterval(update, 30000);

    return () => clearInterval(id);
  }, []);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  const openAllProjects = () => {
    setAllProjectsPage(true);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const backToHome = () => {
    setAllProjectsPage(false);

    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const renderProjectCard = (
    project: (typeof projects)[number],
    index: number
  ) => (
    <motion.article
      className="projectCard"
      key={project.title}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -7 }}
    >
      <div className="projectMeta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.type}</span>
      </div>

      <a
        className="projectImageLink"
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title}`}
      >
        <div className="projectImageWrap">
          <img
            src={project.image}
            alt={`${project.title} preview`}
          />

          <div className="projectImageOverlay">
            <span>View Live Project ↗</span>
          </div>
        </div>
      </a>

      <a
        className="projectTitleLink"
        href={project.demo}
        target="_blank"
        rel="noreferrer"
      >
        <h3>{project.title}</h3>
      </a>

      <p>{project.summary}</p>

      <div className="stackRow">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="projectLinks">
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          Live ↗
        </a>

        <a
          href={project.source}
          target="_blank"
          rel="noreferrer"
        >
          Source ↗
        </a>
      </div>
    </motion.article>
  );

  if (allProjectsPage) {
    return (
      <div className={`app ${theme}`}>
        <div className="grain" />

        <header className="nav allProjectsNav">
          <div />

          <button
            className="allProjectsBackBtn"
            onClick={backToHome}
          >
            ← Back to Home
          </button>

          <button
            className="themeBtn"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          >
            {theme === "light" ? "BLACK" : "WHITE"}
          </button>
        </header>

        <main className="pageWithFixedNav">
          <section className="section allProjectsPage">
            <div className="sectionTitle">
              <span>02</span>
              <h2>All Projects</h2>
              <p>Complete collection of my work</p>
            </div>

            <div className="folderShell">
              <div className="folderTab">
                ALL PROJECTS{" "}
                <span>
                  / {String(projects.length).padStart(2, "0")}+
                </span>
              </div>

              <div className="projectGrid">
                {projects.map((project, index) =>
                  renderProjectCard(project, index)
                )}
              </div>
            </div>
          </section>
        </main>

        <footer>
          <span>© 2026 ADITYA</span>
          <span>SOFTWARE · WEB · FREELANCE</span>
        </footer>
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <div className="grain" />

      <header className="nav">
        <a className="logo" href="#home">
          ADITYA<span>↗</span>
        </a>

        <nav className="navLinks">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="themeBtn"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "BLACK" : "WHITE"}
        </button>
      </header>

      <main className="pageWithFixedNav">
        <section className="hero" id="home">
          <motion.div
            className="heroTop"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p>PERSONAL PORTFOLIO · 2026</p>
            <p>{time} · INDIA</p>
          </motion.div>

          <div className="heroStage">
            <motion.div
              className="heroCopy"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.85 }}
            >
              <p className="kicker">
                SOFTWARE ENGINEER · WEB DEVELOPER
              </p>

              <h1>Aditya</h1>

              <p className="headline">
                I build practical software, responsive websites and
                digital products with modern development tools.
              </p>

              <div className="socialRow">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a href={LINKS.email}>Email ↗</a>
              </div>
            </motion.div>

            <motion.div
              className="portraitScene"
              initial={{
                opacity: 0,
                scale: 0.92,
                rotateY: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.95,
              }}
            >
              <div className="orbit o1" />
              <div className="orbit o2" />

              <div className="portraitCard">
                <div className="portraitLabel">
                  AVAILABLE FOR WORK
                </div>

                <img
                  src={`${import.meta.env.BASE_URL}assets/aditya-profile.png`}
                  alt="Aditya"
                />

                <div className="portraitFoot">
                  <span>FREELANCER</span>
                  <span>REMOTE</span>
                </div>
              </div>

              <motion.div
                className="floatBadge b1"
                animate={{
                  y: [0, -10, 0],
                  rotate: [-1, 2, -1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                BUILDING
              </motion.div>

              <motion.div
                className="floatBadge b2"
                animate={{
                  y: [0, 8, 0],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                WEB + SOFTWARE
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="scrollCue"
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
          >
            Scroll to explore ↓
          </motion.div>
        </section>

        <section className="section work" id="work">
          <div className="sectionTitle">
            <span>01</span>
            <h2>Work</h2>
            <p>What I can help clients build</p>
          </div>

          <div className="workIntro">
            <h3>
              From modern websites to practical software —
              <br />
              I focus on useful digital work.
            </h3>

            <p>
              Available for freelance projects, internships and remote
              collaborations with clear scope, practical execution and
              reliable delivery.
            </p>
          </div>

          <div className="serviceCloud">
            {services.map((item, index) => (
              <motion.div
                key={item}
                className="servicePill"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -4,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="sectionTitle">
            <span>02</span>
            <h2>Projects</h2>
            <p>A growing collection of real work</p>
          </div>

          <div className="folderShell">
            <div className="folderTab">
              PROJECTS{" "}
              <span>
                / {String(projects.length).padStart(2, "0")}+
              </span>
            </div>

            <div className="projectGrid">
              {featuredProjects.map((project) => {
                const index = projects.findIndex(
                  (item) => item.title === project.title
                );

                return renderProjectCard(project, index);
              })}
            </div>

            <div className="projectsAction">
              <button
                className="viewAllBtn"
                onClick={openAllProjects}
              >
                View All Projects →
              </button>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="sectionTitle">
            <span>03</span>
            <h2>About</h2>
            <p>Profile, skills and resume</p>
          </div>

          <div className="aboutGrid">
            <div className="aboutCopy">
              <p className="mini">ABOUT ME</p>

              <h3>
                I’m building toward a career in software engineering
                and modern web development.
              </h3>

              <p>
                My focus is on learning by building real software,
                responsive websites and practical digital products.
                I work with modern development tools, APIs, AI-assisted
                workflows and deployment platforms while continuously
                improving my problem-solving and engineering skills.
              </p>

              <p>
                I’m open to internships, freelance projects and remote
                collaborations where I can contribute to useful products
                and continue growing professionally.
              </p>

              <a
                className="resumeBtn"
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer"
              >
                View Resume ↗
              </a>
            </div>

            <div className="skillsPanel">
              {skillGroups.map((group, index) => (
                <motion.div
                  className="skillGroup"
                  key={group.label}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                  }}
                >
                  <span>{group.label}</span>

                  <div>
                    {group.items.map((skill) => (
                      <p key={skill}>{skill}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact">
          <p>HAVE A PROJECT OR OPPORTUNITY?</p>

          <h2>
            Let’s build something
            <br />
            useful.
          </h2>

          <p className="contactText">
            Available for freelance work, internships and remote
            collaboration.
          </p>

          <div className="contactLinks">
            <a href={LINKS.email}>
              Email me ↗
            </a>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 ADITYA</span>
        <span>SOFTWARE · WEB · FREELANCE</span>
      </footer>
    </div>
  );
}

export default App;