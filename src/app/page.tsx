import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";

const dsSkills = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "Matplotlib", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
  { name: "Seaborn", src: "/seaborn-logo.svg" },
  { name: "Scikit-learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "SciPy", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Tableau", src: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
  { name: "Power BI", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Excel", src: "/excel-logo.png" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
];

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
            {dsSkills.map((skill, idx) => (
              <span key={idx} className="skill-item">
                <img 
                  src={skill.src} 
                  alt={`${skill.name} logo`} 
                  width={20} 
                  height={20} 
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container animate-fade-in delay-3">
        <h2 className="section-title">Selected Work</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 300px))', gap: '2rem' }}> 
          {projectsData.map((proj, idx) => (
            <Link href={`/projects/${proj.slug}`} key={idx} className="card project-card abstract-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', padding: '0', overflow: 'hidden', aspectRatio: '1/1' }}>
              <div style={{ height: '50%', width: '100%', borderBottom: '1px solid var(--card-border)' }}>
                <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%)', transition: 'filter 0.3s' }} />
              </div>
              <div style={{ padding: '1.25rem', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="badge" style={{ display: "inline-block", marginBottom: "0.5rem" }}>{proj.badge}</span>
                  <div className="project-header" style={{ marginBottom: "0" }}>
                    <h3 style={{ fontSize: "1.1rem", lineHeight: "1.4", overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {proj.title}
                    </h3>
                  </div>
                </div>
                
                <div style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem' }}>
                  Read Case Study &rarr;
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
          <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Let's work together</h3>
          <p style={{ color: "var(--muted)", maxWidth: "600px", margin: "0 auto 2rem", fontSize: "1.05rem" }}>
            I'm actively looking for new opportunities in Data Science and Analytics. If you're looking for someone to help interpret your data, build models, or optimize workflows, reach out!
          </p>
          <a href="mailto:hello@example.com" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>Get In Touch</a>
        </div>
      </section>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} Data Science Portfolio. Built cleanly.</p>
      </footer>
    </main>
  );
}
