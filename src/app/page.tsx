import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";

import { skillsData } from "@/data/skills";

export default function Home() {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="section hero-section container animate-fade-in delay-1">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Data Scientist & <br/> Analytcs Engineer
            </h1>
            <p className="hero-subtitle">
              Transforming raw, complex data into clean, actionable business strategies through precise analysis, modeling, and visualization.
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
      <section id="about" className="section container animate-fade-in delay-2">
        <h2 className="section-title">About Me</h2>
        <div className="card about-card">
          <p>
            I am a Data Scientist dedicated to extracting true value from data. With a strong foundation in statistics and programming, I specialize in analyzing large datasets to uncover trends that drive strategic decision-making. My approach bridges the gap between rigorous mathematical insights and practical business applications.
          </p>
          <p style={{ marginTop: '1rem' }}>
            My core expertise revolves around Data Preparation, Exploratory Data Analysis, and building highly optimized Machine Learning workflows. I am deeply familiar with the tools and techniques needed to transform disjointed information into cohesive narratives, whether that's through robust predictive models, interactive dashboards, or comprehensive financial reports.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section container animate-fade-in delay-3">
        <h2 className="section-title">Technical Toolset</h2>
        <div className="card">
          <div className="skill-tags">
            {skillsData.map((skill, idx) => (
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container animate-fade-in delay-3">
        <h2 className="section-title">Selected Work</h2>
        
        <div className="projects-slider"> 
          {projectsData.map((proj, idx) => (
            <Link href={`/projects/${proj.slug}`} key={idx} className="card project-card abstract-card projects-slider-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', padding: '0', overflow: 'hidden', minHeight: '440px' }}>
              <div style={{ height: '240px', width: '100%', borderBottom: '1px solid var(--card-border)', flexShrink: 0, overflow: 'hidden' }}>
                <img src={proj.image} alt={proj.title} className="abstract-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease' }} />
              </div>
              <div style={{ padding: '1.8rem', flex: '1', display: 'flex', flexDirection: 'column' }}>
                <span className="badge" style={{ alignSelf: 'flex-start', marginBottom: '1.2rem', fontSize: '0.75rem' }}>{proj.badge}</span>
                <h3 style={{ fontSize: "1.25rem", lineHeight: "1.4", margin: "0 0 1rem 0", color: "var(--foreground)" }}>
                  {proj.title}
                </h3>
                
                <div className="abstract-card-link" style={{ marginTop: 'auto', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', display: 'flex', alignItems: 'center', paddingBottom: '0.2rem' }}>
                  Read Case Study <span style={{ fontSize: '1.2rem' }}>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container animate-fade-in delay-3">
        <h2 className="section-title">Contact</h2>
        <div className="card text-center" style={{ padding: "4rem 2rem", border: "none", borderTop: "1px solid var(--card-border)", borderRadius: "0" }}>
          <h3 className="text-gradient" style={{ fontSize: "2.8rem", marginBottom: "1.5rem", letterSpacing: "-0.03em", textAlign: "center" }}>Let's Work Together</h3>
          <p style={{ color: "var(--muted)", maxWidth: "650px", margin: "0 auto 3rem", fontSize: "1.15rem", lineHeight: "1.8" }}>
            I'm actively looking for new opportunities in <strong style={{ color: 'var(--foreground)' }}>Data Science</strong> and <strong style={{ color: 'var(--foreground)' }}>Analytics</strong>. If you're looking for someone to help interpret your complex data, build robust models, or optimize workflows, I'd love to connect!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:yusuf.analytics@gmail.com" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
              Email Me
            </a>
            <a href="https://linkedin.com/in/yusuf-analytics" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
              LinkedIn
            </a>
            <a href="https://medium.com/@yusuf.analytics" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
              Medium
            </a>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Data Science Portfolio. Built cleanly.</p>
      </footer>
    </main>
  );
}
