import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/dev-adi-xo",
  github: "https://github.com/dev-aditya-design",
  email: "mailto:dev.adi.xo@gmail.com",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,

  resumeAnalyzer: "https://ai-resume-analyzer-aditya.streamlit.app/",
  resumeAnalyzerRepo:
    "https://github.com/dev-aditya-design/ai-resume-analyzer",

  opportunityScout:
    "https://ai-opportunity-scout-hcgtp6eaurjcva2gpryt2l.streamlit.app/",
  opportunityScoutRepo:
    "https://github.com/dev-aditya-design/ai-opportunity-scout",

  ironcore: 
    "https://ironcore-premium-build.lovable.app/",
ironcoreRepo: 
  "https://github.com/dev-aditya-design/ironcore-premium-build",

  scopePilot: 
    "https://scopepilot-ai.vercel.app",
scopePilotRepo: 
  "https://github.com/dev-aditya-design/scopepilot-ai",

  restaurantDemo:
  "https://dev-aditya-design.github.io/restaurant-website-demo/",
restaurantDemoRepo:
  "https://github.com/dev-aditya-design/restaurant-website-demo",
};

const projects = [
  {
    id: "01",
    title: "AI Resume Analyzer",
    type: "AI Application",
    summary:
      "ATS-style resume analysis that compares a resume with a job description, highlights skill gaps and gives practical improvement guidance.",
    stack: ["Python", "Streamlit", "NLP", "Scikit-learn"],
    demo: LINKS.resumeAnalyzer,
    source: LINKS.resumeAnalyzerRepo,
    previewCode: "match_score = analyze(resume, role)",
    previewFlow: "Build → Test → Improve",
  },
  {
    id: "02",
    title: "AI Opportunity Scout",
    type: "AI Web Application",
    summary:
      "AI-powered opportunity discovery tool that helps developers find relevant hackathons, internships, and competitions based on their skills and preferences.",
    stack: ["Python", "Streamlit", "SerpAPI", "AI", "GitHub"],
    demo: LINKS.opportunityScout,
    source: LINKS.opportunityScoutRepo,
    previewCode: "opportunities = discover(skills, location)",
    previewFlow: "Search → Match → Apply",
  },
  {
  id: "03",
  title: "IronCore Fitness",
  type: "Premium Business Website",
  summary:
    "A modern, responsive fitness business website featuring training programs, trainer profiles, membership plans, testimonials, FAQ, contact experience, and conversion-focused calls to action.",
  stack: ["React", "TypeScript", "Responsive Design", "Lovable"],
  demo: LINKS.ironcore,
  source: LINKS.ironcoreRepo,
  previewCode: "Build → Engage → Convert",
  previewFlow: "Design → Develop → Deploy",
 },
  {
  id: "04",
  title: "ScopePilot AI",
  type: "AI Project Planning Agent",
  summary:
    "AI-powered full-stack application that transforms vague client briefs into structured requirements, tech stack recommendations, milestones, risks, deliverables, and client-ready proposals.",
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
  previewCode: "brief → AI analysis → project plan",
  previewFlow: "Brief → Analyze → Plan → Proposal",
},
  {
  id: "05",
  title: "The Royal Table",
  type: "Premium Restaurant Website",
  summary:
    "A premium, responsive restaurant website demo designed for client presentations, featuring menu sections, gallery, offers, reviews, table reservation, contact details, WhatsApp CTA, and a polished mobile-friendly experience.",
  stack: ["HTML", "CSS", "JavaScript"],
  demo: LINKS.restaurantDemo,
  source: LINKS.restaurantDemoRepo,
  previewCode: "Menu → Gallery → Reservation",
  previewFlow: "Discover → Explore → Reserve",
},
];

const services = [
  "AI Agents & Automation",
  "Animated Websites",
  "UI / UX Design",
  "Web Development",
  "Application Development",
  "Portfolio Design",
  "UGC / Tech Content",
];

const skillGroups = [
  {
    label: "AI & AUTOMATION",
    items: ["Generative AI", "AI Agents", "Workflow Automation", "n8n"],
  },
  {
    label: "DEVELOPMENT",
    items: ["Python", "JavaScript", "HTML", "CSS", "Git / GitHub"],
  },
  {
    label: "FOUNDATIONS",
    items: [
      "Software Engineering",
      "Problem Solving",
      "Data Structures",
      "UI / UX",
    ],
  },
];

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );

    update();

    const id = setInterval(update, 30000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className={`app ${theme}`}>
      <div className="grain" />

      <header className="nav">
        <a className="logo" href="#home">
          ADITYA<span>↗</span>
        </a>

        <nav className="navLinks">
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

      <main>
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
                AI DEVELOPER · SOFTWARE ENGINEER
              </p>

              <h1>Aditya</h1>

              <p className="headline">
                I build practical digital products with AI,
                automation and software.
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
              initial={{ opacity: 0, scale: 0.92, rotateY: -8 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.25, duration: 0.95 }}
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
                  <span>AI × SOFTWARE</span>
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
                AI + WEB
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
              From a clean portfolio to an automated workflow —
              <br />
              I focus on useful digital work.
            </h3>

            <p>
              Available for part-time freelance projects, remote
              collaborations and practical product work with clear
              scope and realistic delivery.
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
                transition={{ delay: index * 0.05 }}
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
            <p>A growing folder of real work</p>
          </div>

          <div className="folderShell">
            <div className="folderTab">
              PROJECTS{" "}
              <span>
                / {String(projects.length).padStart(2, "0")} ITEM
              </span>
            </div>

            <div className="projectGrid">
              {projects.map((project) => (
                <motion.article
                  className="projectCard"
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -7 }}
                >
                  <div className="projectMeta">
                    <span>{project.id}</span>
                    <span>{project.type}</span>
                  </div>

                  <div className="projectVisual">
                    <div className="windowBar">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="windowContent">
                      <strong>{project.title}</strong>

                      <p>{project.previewCode}</p>

                      <span>{project.previewFlow}</span>
                    </div>
                  </div>

                  <h3>{project.title}</h3>

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
              ))}

              <div className="projectCard emptyCard">
                <span>NEXT PROJECT</span>

                <h3>Future work goes here.</h3>

                <p>
                  New personal projects and client work can be added
                  to this same folder without changing the rest of
                  the portfolio.
                </p>

                <div className="plus">＋</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="sectionTitle">
            <span>03</span>
            <h2>About</h2>
            <p>Profile, knowledge and resume</p>
          </div>

          <div className="aboutGrid">
            <div className="aboutCopy">
              <p className="mini">ABOUT ME</p>

              <h3>
                I’m building toward a career where AI and software
                engineering meet practical product development.
              </h3>

              <p>
                My current focus is on learning by building: turning
                concepts into working software, exploring intelligent
                automation, improving problem-solving and creating
                cleaner digital experiences.
              </p>

              <p>
                I’m open to internships, freelance projects and
                remote collaborations where I can contribute while
                continuing to grow professionally.
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
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
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

          <h2>Let’s make something useful.</h2>

          <div>
            <a href={LINKS.email}>Email me ↗</a>

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
        <span>AI · SOFTWARE · AUTOMATION</span>
      </footer>
    </div>
  );
}

export default App;
