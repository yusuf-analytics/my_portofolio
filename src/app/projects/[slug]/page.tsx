import { projectsData } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find(p => p.slug === resolvedParams.slug);

  if (!project) notFound();

  return (
    <main className="main-content container animate-fade-in delay-1" style={{ paddingTop: '120px', paddingBottom: '5rem' }}>
      <Link href="/#projects" className="btn btn-secondary" style={{ marginBottom: "2rem", display: "inline-block" }}>
        &larr; Back to Home
      </Link>
      
      <div className="card project-card" style={{ padding: "0", overflow: "hidden", border: "1px solid var(--card-border)" }}>
         <img src={project.image} alt={project.title} style={{ width: "100%", height: "400px", objectFit: "cover", filter: "grayscale(30%)" }} />
         
         <div style={{ padding: "4rem 3rem" }}>
           <div className="project-header" style={{ marginBottom: "2rem" }}>
             <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem", letterSpacing: "-0.04em" }}>{project.title}</h1>
             <span className="badge">{project.badge}</span>
           </div>
           
           <h4 className="text-gradient" style={{marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>
             The Business Context
           </h4>
           <p style={{ fontSize: "1.05rem", color: "var(--foreground)" }}>{project.context}</p>

           <h4 className="text-gradient" style={{marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>
             The Problem Being Solved
           </h4>
           <p style={{ fontSize: "1.05rem", color: "var(--foreground)" }}>{project.problem}</p>
           
           <h4 className="text-gradient" style={{marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>
             Solution & UI Visuals
           </h4>
           <p style={{ fontSize: "1.05rem", marginBottom: "1.5rem", color: "var(--foreground)" }}>{project.solution}</p>
           {project.visuals && project.visuals.length > 0 && (
             <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
               {project.visuals.map((vis, i) => (
                 <img key={i} src={vis} alt={`Visual for ${project.title}`} style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--card-border)' }} />
               ))}
             </div>
           )}

           <h4 className="text-gradient" style={{marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>
             Methodology & Tech Stack
           </h4>
           <p style={{ fontSize: "1.05rem", color: "var(--foreground)" }} dangerouslySetInnerHTML={{ __html: project.methodology }}></p>

           <h4 className="text-gradient" style={{marginTop: '2.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>
             Business Impact (Simulation Results)
           </h4>
           <ul className="impact-list" style={{ marginTop: "1rem" }}>
             {project.impact.map((item, i) => (
               <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
             ))}
           </ul>

           <div className="project-links" style={{marginTop: '4rem'}}>
             <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Live Application</a>
           </div>
         </div>
      </div>
    </main>
  );
}
