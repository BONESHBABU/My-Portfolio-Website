import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  GraduationCap,
  HeartHandshake,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

const skills = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Python · Advanced", "C · Basic"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    items: ["HTML · Advanced", "CSS · Advanced", "JavaScript · Advanced", "Bootstrap · Intermediate", "React.js"],
  },
  { title: "Backend", icon: BriefcaseBusiness, items: ["Django · Intermediate"] },
  { title: "Database", icon: BookOpen, items: ["Oracle SQL · Advanced"] },
  { title: "Tools", icon: Sparkles, items: ["IDLE", "VS Code", "MS Office"] },
  {
    title: "Working together",
    icon: HeartHandshake,
    items: ["Communication", "Problem solving", "Time management", "Public speaking", "Teamwork"],
  },
];

const experienceDetails = [
  "Built responsive, interactive interfaces with HTML, CSS, JavaScript, and React.js.",
  "Applied object-oriented programming and wrote clean, reusable code.",
  "Developed backend logic and APIs with Python and Django.",
  "Designed database schemas and handled SQL data interactions.",
  "Practiced Java fundamentals, including OOP, exception handling, and file handling.",
  "Built a Java Quiz Game mini-project and practiced debugging and Git version control.",
  "Learned software development lifecycle fundamentals and improved code readability and structure.",
];

const projects = [
  {
    number: "01",
    title: "Student Management System",
    category: "Database application",
    icon: BookOpen,
    description:
      "A student-record application built with Python and Oracle SQL, connecting everyday academic tasks with a structured backend database.",
    features: ["Student enrollment", "Course and attendance management", "Grade reports", "Search, update, and delete records"],
    technologies: ["Python", "Oracle SQL"],
  },
  {
    number: "02",
    title: "Secure Banking Application",
    category: "Full-stack application",
    icon: Layers3,
    description:
      "A banking application focused on structured customer-data services and a clear view of transaction activity.",
    features: ["Customer banking data", "Transaction-related operations", "Account statements", "Mini-statements and transaction tracking"],
    technologies: [],
  },
  {
    number: "03",
    title: "Low-Power Full Adder",
    category: "Academic research · MGDI logic",
    icon: Sparkles,
    description:
      "An academic research project exploring low-power full-adder design through MGDI logic and related circuit approaches.",
    features: ["Studied GDI and MGDI drawbacks", "Explored ZIPPER logic", "Contributed to a new design informed by research documents"],
    technologies: [],
  },
  {
    number: "04",
    title: "Java Quiz Game",
    category: "Internship mini-project",
    icon: Code2,
    description:
      "A simple quiz game developed during the internship to apply Java programming fundamentals.",
    features: ["Java programming fundamentals", "Practice with object-oriented concepts"],
    technologies: ["Java"],
  },
];

const education = [
  {
    qualification: "B.Tech",
    subject: "Electronics and Communication Engineering",
    school: "Sri Venkatesa Perumal College of Engineering and Technology, Puttur",
    years: "2020 — 2024",
    result: "CGPA 8.4",
  },
  {
    qualification: "Intermediate · MPC",
    subject: "Mathematics, Physics, and Chemistry",
    school: "Bharathi Junior College, Madanapalle",
    years: "2018 — 2020",
    result: "80%",
  },
  {
    qualification: "SSC",
    subject: "Secondary School Certificate",
    school: "SPVB High School, Mulakalacheruvu",
    years: "2017 — 2018",
    result: "92%",
  },
];

const certifications = [
  { name: "Oracle SQL", provider: "Cognitive Class.ai" },
  { name: "Python Fundamentals", provider: "Infosys SpringBoard" },
  { name: "Python (Basic)", provider: "HackerRank" },
  { name: "JavaScript (Intermediate)", provider: "HackerRank" },
  { name: "Privacy and Security", provider: "NPTEL" },
  { name: "Digital Design with Verilog", provider: "NPTEL" },
];

const achievements = [
  {
    icon: Trophy,
    title: "Mandal-level Cricket Tournament",
    detail: "Represented the college team and achieved runner-up position.",
    number: "01",
  },
  {
    icon: Award,
    title: "PCB Designing",
    detail: "Runner-up in a PCB Designing competition conducted at college.",
    number: "02",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kotti Bonesh Babu | Python Full Stack Developer" },
      {
        name: "description",
        content:
          "The portfolio of Kotti Bonesh Babu, a Python Full Stack Developer with experience in Python, Django, React.js, and SQL.",
      },
      { property: "og:title", content: "Kotti Bonesh Babu | Python Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Projects, skills, and experience from Kotti Bonesh Babu, a Python Full Stack Developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Python Full Stack Developer", "Python Developer", "Web Application Developer"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        const current = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.25, 0.5] },
    );

    for (const item of navigation) {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setTitleIndex((index) => (index + 1) % titles.length), 3600);
    return () => window.clearInterval(timer);
  }, [titles.length]);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:kottibonesh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="Kotti Bonesh Babu, home">
            Kotti Bonesh <span>Babu</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "nav-link is-active" : "nav-link"}
                aria-current={activeSection === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-contact" href="#contact"><Mail aria-hidden="true" /> <span>Get in touch</span></a>
          <Button
            className="mobile-menu-trigger"
            variant="outline"
            size="icon"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "mobile-nav-link is-active" : "mobile-nav-link"}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}<ArrowRight aria-hidden="true" />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main-content">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="eyebrow"><span className="status-dot" /> Python · Django · React.js · SQL</div>
            <p className="hero-greeting">Hello, I’m</p>
            <h1 id="hero-title">Kotti Bonesh <span className="gradient-text">Babu</span></h1>
            <p className="hero-role" aria-live="polite">{titles[titleIndex]}</p>
            <p className="hero-description">
              Passionate about building responsive web applications and developing efficient backend solutions using Python, Django, React.js, and SQL.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg" className="button-primary">
                <a href="#projects">Explore my projects <ArrowRight aria-hidden="true" /></a>
              </Button>
              <Button type="button" variant="outline" size="lg" disabled title="The resume PDF was not included with the provided files">
                <ArrowDownToLine aria-hidden="true" /> Resume PDF unavailable
              </Button>
              <a className="text-action" href="#contact">Contact me</a>
            </div>
            <div className="social-links" aria-label="Social links">
              <a href="https://linkedin.com/in/boneshbabu" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <span className="social-mark">in</span><span>LinkedIn</span><ArrowRight aria-hidden="true" />
              </a>
              <a href="mailto:kottibonesh@gmail.com" aria-label="Email Kotti Bonesh Babu">
                <Mail aria-hidden="true" /><span>Email</span><ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Developer profile illustration" role="img">
            <div className="visual-grid" />
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="profile-monogram"><span>KB</span><span className="monogram-dot" /></div>
            <div className="code-caption caption-top"><span className="code-dot" /> BUILDING WITH PURPOSE</div>
            <div className="code-caption caption-bottom"><Code2 aria-hidden="true" /> PYTHON · FULL STACK</div>
            <div className="visual-index">01 <span>—</span> 10</div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></a>
        </section>

        <section className="section-wrap about-section" id="about" aria-labelledby="about-title">
          <SectionHeading number="01" eyebrow="A little about me" title="A builder at heart" id="about-title" />
          <div className="about-layout">
            <div className="about-copy">
              <p className="lead-copy">I’m a Python Full Stack Developer with a foundation in Electronics and Communication Engineering and a hands-on year of internship experience.</p>
              <p>From Python and Django backend logic to thoughtful interfaces with HTML, CSS, JavaScript, and React.js, I enjoy bringing application ideas together. I have also worked with Oracle SQL to support data-driven solutions.</p>
              <p>I’m interested in building scalable, responsive, and user-friendly applications—and I bring a steady, collaborative approach to solving problems with a team.</p>
            </div>
            <div className="qualities-list" aria-label="Professional strengths">
              {["Problem solving", "Clear communication", "Teamwork", "Time management"].map((quality, index) => (
                <div className="quality-row" key={quality}><span className="quality-number">0{index + 1}</span><span>{quality}</span><Check aria-hidden="true" /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills" aria-labelledby="skills-title">
          <SectionHeading number="02" eyebrow="Tools of the trade" title="Skills & capabilities" id="skills-title" />
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, index) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-top"><span className="small-index">0{index + 1}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <ul className="skill-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience" aria-labelledby="experience-title">
          <SectionHeading number="03" eyebrow="Where I’ve grown" title="Professional experience" id="experience-title" />
          <article className="experience-panel">
            <div className="experience-rail"><span className="rail-marker"><BriefcaseBusiness aria-hidden="true" /></span><span className="rail-line" /></div>
            <div className="experience-main">
              <div className="experience-heading">
                <div><p className="eyebrow eyebrow-muted">PY SPIDERS</p><h3>Python Full Stack Intern</h3></div>
                <span className="date-tag">Feb 2024 — Jan 2025</span>
              </div>
              <p className="experience-intro">Hands-on experience across frontend interfaces, Python and Django backend development, SQL data work, and core software development practices.</p>
              <ul className="experience-list">
                {experienceDetails.map((detail) => <li key={detail}><span className="bullet-mark" />{detail}</li>)}
              </ul>
            </div>
          </article>
        </section>

        <section className="section-wrap projects-section" id="projects" aria-labelledby="projects-title">
          <SectionHeading number="04" eyebrow="Selected work" title="Projects with purpose" id="projects-title" />
          <div className="projects-grid">
            {projects.map(({ number, title, category, icon: Icon, description, features, technologies }) => (
              <article className="project-card" key={title}>
                <div className="project-card-head"><span className="project-number">{number}</span><span className="project-icon"><Icon aria-hidden="true" /></span></div>
                <p className="project-category">{category}</p>
                <h3>{title}</h3>
                <p className="project-description">{description}</p>
                <ul className="project-features">{features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul>
                <div className="project-tags">
                  {technologies.length > 0 ? technologies.map((technology) => <span key={technology}>{technology}</span>) : <span>Project details</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap education-section" id="education" aria-labelledby="education-title">
          <SectionHeading number="05" eyebrow="The foundation" title="Education" id="education-title" />
          <div className="education-list">
            {education.map((item, index) => (
              <article className="education-row" key={item.qualification}>
                <div className="education-marker"><GraduationCap aria-hidden="true" /><span>0{index + 1}</span></div>
                <div className="education-info"><h3>{item.qualification}</h3><p>{item.subject}</p><span>{item.school}</span></div>
                <div className="education-result"><span>{item.years}</span><strong>{item.result}</strong></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap certifications-section" id="certifications" aria-labelledby="certifications-title">
          <SectionHeading number="06" eyebrow="Learning in practice" title="Certifications" />
          <div className="certifications-grid">
            {certifications.map((certification, index) => (
              <article className="certification-row" key={`${certification.name}-${certification.provider}`}>
                <span className="certification-number">0{index + 1}</span><span className="certification-icon"><Award aria-hidden="true" /></span>
                <div><h3>{certification.name}</h3><p>{certification.provider}</p></div><ArrowRight className="certification-arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap achievements-section" id="achievements" aria-labelledby="achievements-title">
          <SectionHeading number="07" eyebrow="Moments worth remembering" title="Achievements" />
          <div className="achievements-grid">
            {achievements.map(({ icon: Icon, title, detail, number }) => (
              <article className="achievement-card" key={title}>
                <span className="achievement-number">{number}</span><span className="achievement-icon"><Icon aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact" aria-labelledby="contact-title">
          <SectionHeading number="08" eyebrow="Let’s start a conversation" title="Get in touch" id="contact-title" />
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="lead-copy">Have a role or project in mind? I’d be glad to hear from you.</p>
              <a className="contact-detail" href="mailto:kottibonesh@gmail.com"><span className="contact-detail-icon"><Mail aria-hidden="true" /></span><span><small>Email</small><strong>kottibonesh@gmail.com</strong></span><ArrowRight aria-hidden="true" /></a>
              <a className="contact-detail" href="tel:+917675059656"><span className="contact-detail-icon"><Phone aria-hidden="true" /></span><span><small>Phone</small><strong>+91 76750 59656</strong></span><ArrowRight aria-hidden="true" /></a>
              <a className="contact-detail" href="https://linkedin.com/in/boneshbabu" target="_blank" rel="noreferrer"><span className="contact-detail-icon social-mark">in</span><span><small>LinkedIn</small><strong>Connect with me</strong></span><ArrowRight aria-hidden="true" /></a>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <label className="form-field"><span>Your name</span><input name="name" autoComplete="name" placeholder="Name" required maxLength={100} /></label>
                <label className="form-field"><span>Email address</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
              </div>
              <label className="form-field"><span>Subject</span><input name="subject" placeholder="What would you like to discuss?" required maxLength={160} /></label>
              <label className="form-field"><span>Message</span><textarea name="message" rows={5} placeholder="Write a message…" required maxLength={5000} /></label>
              <Button type="submit" size="lg" className="button-primary"><Send aria-hidden="true" /> Continue in your email app</Button>
              <p className="form-note">Your email app will open with your message ready to send.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="wordmark" href="#home">Kotti Bonesh <span>Babu</span></a>
          <p>Python Full Stack Developer</p>
          <div className="footer-links"><a href="https://linkedin.com/in/boneshbabu" target="_blank" rel="noreferrer">LinkedIn <ArrowRight aria-hidden="true" /></a><a href="mailto:kottibonesh@gmail.com">Email <ArrowRight aria-hidden="true" /></a></div>
          <span className="copyright">© {new Date().getFullYear()} Kotti Bonesh Babu</span>
        </div>
        <Button className="back-to-top" variant="outline" size="icon" asChild><a href="#home" aria-label="Back to top"><ArrowUp aria-hidden="true" /></a></Button>
      </footer>
    </div>
  );
}

function SectionHeading({ number, eyebrow, title, id }: { number: string; eyebrow: string; title: string; id?: string }) {
  return (
    <div className="section-heading">
      <div className="section-heading-index"><span>{number}</span><span className="heading-rule" /></div>
      <div><p className="eyebrow section-eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2></div>
    </div>
  );
}