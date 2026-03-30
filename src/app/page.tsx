import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import ProjectsGallery from "@/components/ProjectsGallery";

export default function Home() {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="section hero-section container animate-fade-in delay-1">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Data & AI <br/> Developer
            </h1>
            <p className="hero-subtitle">
              Transforming raw, complex systems into intelligent, actionable applications through modern Web, Mobile, Data, and AI development.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="#about" className="btn btn-secondary">About Me</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
             <Image src="/profile.jpeg" alt="Profile Photo" width={300} height={300} className="profile-img" priority />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section container animate-fade-in delay-2">
        <h2 id="about" className="section-title">About Me</h2>
        <div className="card about-card">
          <p>
            I am a Developer dedicated to extracting true value from technology. With a strong foundation in modern programming and architecture, I specialize in building robust applications that uncover insights and drive strategic decision-making. My approach bridges the gap between rigorous mathematical models and practical business applications.
          </p>
          <p style={{ marginTop: '1rem' }}>
            My core expertise revolves around Data Analytics, Artificial Intelligence, and building highly optimized Web & Mobile workflows. I am deeply familiar with the full spectrum of tools needed to transform an idea into a cohesive narrative, whether that's through powerful Generative AI, interactive dashboards, or fully-fledged progressive web apps.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section container animate-fade-in delay-3">
        <h2 id="skills" className="section-title">Technical Toolset</h2>
        <div className="projects-slider hide-scrollbar" style={{ paddingBottom: '1rem' }}>
          {Array.from(new Set(skillsData.map(s => s.category))).map((cat, i) => (
            <div key={i} className="card project-card abstract-card skill-category-card">
              <h3 className="skill-category-title">
                {cat}
              </h3>
              <div className="skill-tags skill-tags-container hide-scrollbar">
                {skillsData.filter(skill => skill.category === cat).map((skill, idx) => (
                  skill.hasDetails ? (
                    <Link href={`/skills/${skill.slug}`} key={idx} className="skill-item" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                      <img src={skill.src} alt={`${skill.name} logo`} width={20} height={20} />
                      {skill.name}
                    </Link>
                  ) : (
                    <span key={idx} className="skill-item">
                      <img src={skill.src} alt={`${skill.name} logo`} width={20} height={20} />
                      {skill.name}
                    </span>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section container animate-fade-in delay-3">
        <h2 id="projects" className="section-title">Selected Work</h2>
        <ProjectsGallery projects={projectsData} />
      </section>

      {/* Contact Section */}
      <section className="section container animate-fade-in delay-3">
        <h2 id="contact" className="section-title">Contact</h2>
        <div className="card text-center" style={{ padding: "4rem 2rem", border: "none", borderTop: "1px solid var(--card-border)", borderRadius: "0" }}>
          <h3 className="text-gradient" style={{ fontSize: "2.8rem", marginBottom: "1.5rem", letterSpacing: "-0.03em", textAlign: "center" }}>Let's Work Together</h3>
          <p style={{ color: "var(--muted)", maxWidth: "650px", margin: "0 auto 3rem", fontSize: "1.15rem", lineHeight: "1.8" }}>
            I'm actively looking for new opportunities in <strong style={{ color: 'var(--foreground)' }}>Data & AI</strong>, and <strong style={{ color: 'var(--foreground)' }}>Web/Mobile Development</strong>. If you're looking for someone to help interpret your complex data, build robust intelligent models, or optimize workflows, I'd love to connect!
          </p>
          <div className="contact-links hide-scrollbar">
            <a href="mailto:yusuf.analytics@gmail.com" className="btn btn-primary">
              Email Me
            </a>
            <a href="https://linkedin.com/in/yusuf-analytics" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
            <a href="https://medium.com/@yusuf.analytics" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Medium
            </a>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Modern Developer Portfolio. Built cleanly.</p>
      </footer>
    </main>
  );
}
