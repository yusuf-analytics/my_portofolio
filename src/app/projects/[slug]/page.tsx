import { projectsData } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageSlider from "@/components/ImageSlider";

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find(p => p.slug === resolvedParams.slug) as any;

  if (!project) notFound();

  return (
    <main className="main-content container animate-fade-in delay-1" style={{ paddingTop: '120px', paddingBottom: '5rem', maxWidth: '1600px', width: '95%' }}>
      <div className="project-layout">
        <aside className="project-sidebar">
          <Link href="/#projects" className="btn btn-secondary" style={{ marginBottom: "2rem", alignSelf: "flex-start", padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
            &larr; Back to Home
          </Link>
          <div className="sidebar-title">Table of Contents</div>
          <a href="#overview" className="sidebar-link">Project Overview</a>
          <a href="#tech-stack" className="sidebar-link">Tech Stack</a>
          <a href="#dataset" className="sidebar-link">Dataset & Features</a>
          <a href="#eda" className="sidebar-link">Key EDA Findings</a>
          <a href="#modeling" className="sidebar-link">Modeling Comparison</a>
          <a href="#impact" className="sidebar-link">Business Impact</a>
          <a href="#roadmap" className="sidebar-link">Implementation Roadmap</a>
          <a href="#visuals" className="sidebar-link">Visuals</a>
        </aside>

        <div className="card project-detail-card" style={{ flex: 1, padding: "0", overflow: "hidden", border: "1px solid var(--card-border)" }}>
          {project.image && <img src={project.image} alt={project.title} className="project-cover-img" />}

          <div style={{ padding: "var(--spacing-detail)" }}>
            <div className="project-header" style={{ marginBottom: "2rem" }}>
              <h1 className="detail-title">{project.title}</h1>
              <span className="badge">{project.badge}</span>
            </div>

            <h4 id="overview" className="text-gradient" style={{ marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1.2rem' }}>
              Project Overview
            </h4>
            <p style={{ fontSize: "1.05rem", color: "var(--foreground)", lineHeight: "1.8" }}>{project.overview}</p>

            <h4 id="tech-stack" className="text-gradient" style={{ marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Tech Stack
            </h4>
            <div className="skill-tags" style={{ marginBottom: '1.5rem' }}>
              {project.techStack.map((tech: string, i: number) => (
                <span key={i} className="skill-item">{tech}</span>
              ))}
            </div>

            <h4 id="dataset" className="text-gradient" style={{ marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Dataset & Features
            </h4>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              {project.datasetFeatures.map((feat: string, i: number) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: feat }} style={{ marginBottom: '0.5rem' }}></li>
              ))}
            </ul>

            <h4 id="eda" className="text-gradient" style={{ marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Key EDA Findings
            </h4>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              {project.edaFindings.map((finding: string, i: number) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: finding }} style={{ marginBottom: '0.5rem' }}></li>
              ))}
            </ul>

            <h4 id="modeling" className="text-gradient" style={{ marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1.2rem' }}>
              Modeling Comparison
            </h4>
            <p style={{ fontSize: "1.05rem", color: "var(--foreground)", marginBottom: '1.8rem', lineHeight: "1.8" }} dangerouslySetInnerHTML={{ __html: project.modeling.description }}></p>

            <div style={{ overflowX: 'auto', marginBottom: '3rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.05rem' }}>
                <thead>
                  <tr style={{ background: 'var(--surface)' }}>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Model</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Best Params</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Recall Class 1</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Other Metric</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>CV Score</th>
                  </tr>
                </thead>
                <tbody>
                  {project.modeling.modelComparison.map((model: any, i: number) => (
                    <tr key={i}>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', fontWeight: 500, color: model.name.includes("Terpilih") ? "var(--primary)" : "var(--foreground)" }}>{model.name}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)' }}><code>{model.params}</code></td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)' }}>{model.recall}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)' }}>{model.metric}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)' }}>{model.cvScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h5 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Confusion Matrix (Random Forest)</h5>
            <div style={{ overflowX: 'auto', marginBottom: '3rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
              <table style={{ borderCollapse: 'collapse', textAlign: 'center', fontSize: '1.05rem', width: '100%' }}>
                <tbody>
                  <tr style={{ background: 'var(--card-bg)' }}>
                    <td style={{ padding: '1.2rem', border: 'none', background: 'transparent' }}></td>
                    <td style={{ padding: '1.2rem', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>Predicted Negative (No)</td>
                    <td style={{ padding: '1.2rem', border: '1px solid var(--card-border)', fontWeight: 'bold' }}>Predicted Positive (Yes)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1.2rem', border: '1px solid var(--card-border)', fontWeight: 'bold', background: 'var(--surface)' }}>Actual Negative (No)</td>
                    <td style={{ padding: '1.5rem', border: '1px solid var(--card-border)' }}>
                      <strong>4,700</strong><br />
                      <span style={{ fontSize: '0.9rem', color: 'var(--success-color, #4ade80)' }}>True Negative</span><br />
                      <span style={{ fontSize: '0.85rem', color: 'var(--foreground-muted)' }}>(Filter sukses)</span>
                    </td>
                    <td style={{ padding: '1.5rem', border: '1px solid var(--card-border)' }}>
                      <strong>3,200</strong><br />
                      <span style={{ fontSize: '0.9rem', color: 'var(--error-color, #ef4444)' }}>False Positive</span><br />
                      <span style={{ fontSize: '0.85rem', color: 'var(--foreground-muted)' }}>(Telemarketing sia-sia)</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1.2rem', border: '1px solid var(--card-border)', fontWeight: 'bold', background: 'var(--surface)' }}>Actual Positive (Yes)</td>
                    <td style={{ padding: '1.5rem', border: '1px solid var(--card-border)' }}>
                      <strong>420</strong><br />
                      <span style={{ fontSize: '0.9rem', color: 'var(--error-color, #ef4444)' }}>False Negative</span><br />
                      <span style={{ fontSize: '0.85rem', color: 'var(--foreground-muted)' }}>(Potensial terlewat)</span>
                    </td>
                    <td style={{ padding: '1.5rem', border: '1px solid var(--card-border)' }}>
                      <strong>670</strong><br />
                      <span style={{ fontSize: '0.9rem', color: 'var(--success-color, #4ade80)' }}>True Positive</span><br />
                      <span style={{ fontSize: '0.85rem', color: 'var(--foreground-muted)' }}>(Tepat sasaran)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Classification Report</h5>
            <div style={{ overflowX: 'auto', marginBottom: '3rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.05rem' }}>
                <thead>
                  <tr style={{ background: 'var(--surface)' }}>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Class / Metric</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Precision</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Recall</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>F1-Score</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Support</th>
                  </tr>
                </thead>
                <tbody>
                  {project.modeling.classificationReportTable.map((row: any, i: number) => (
                    <tr key={i}>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', fontWeight: 500 }}>{row.class}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', color: "var(--foreground)" }}>{row.precision}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', color: "var(--foreground)" }}>{row.recall}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', color: "var(--foreground)" }}>{row.f1Score}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', color: "var(--foreground-muted)" }}>{row.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 id="impact" className="text-gradient" style={{ marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1.2rem' }}>
              Business Impact
            </h4>
            <div style={{ overflowX: 'auto', marginBottom: '3rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.05rem' }}>
                <thead>
                  <tr style={{ background: 'var(--surface)' }}>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Metrics</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>Mass Strategy</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)' }}>RF Model</th>
                    <th style={{ padding: '1.2rem', border: '1px solid var(--card-border)', color: 'var(--primary)', fontWeight: 'bold' }}>Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {project.businessImpact.map((row: any, i: number) => (
                    <tr key={i}>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', fontWeight: 500 }}>{row.metric}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', color: "var(--foreground)" }}>{row.mass}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', color: "var(--foreground)" }}>{row.rf}</td>
                      <td style={{ padding: '1rem 1.2rem', border: '1px solid var(--card-border)', fontWeight: 'bold', color: 'var(--success-color, #4ade80)' }}>{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 id="roadmap" className="text-gradient" style={{ marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Implementation Roadmap
            </h4>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
              {project.roadmap.map((item: string, i: number) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} style={{ marginBottom: '0.8rem' }}></li>
              ))}
            </ul>

            <h4 id="visuals" className="text-gradient" style={{ marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Visuals
            </h4>
            {project.visuals && project.visuals.length > 0 && (
              <ImageSlider images={project.visuals} />
            )}

            <div className="project-links" style={{ marginTop: '4rem' }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo Application</a>
            </div>
          </div>
        </div>
        <div className="right-spacer"></div>
      </div>
    </main>
  );
}
