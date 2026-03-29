import { skillsData } from "@/data/skills";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return skillsData.filter(s => s.hasDetails && s.slug).map((s) => ({ slug: s.slug }));
}

export default async function SkillDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const skill = skillsData.find((s) => s.slug === resolvedParams.slug);

  if (!skill || !skill.hasDetails) notFound();

  return (
    <main className="main-content container animate-fade-in delay-1" style={{ paddingTop: '120px', paddingBottom: '5rem', maxWidth: '1000px' }}>
      <Link href="/#skills" className="btn btn-secondary" style={{ marginBottom: "2rem", display: "inline-block" }}>
        &larr; Back to Home
      </Link>

      <div className="card project-detail-card" style={{ padding: "var(--spacing-detail)", border: "1px solid var(--card-border)" }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <img src={skill.src} alt={skill.name} style={{ width: '80px', height: '80px', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <h1 className="detail-title" style={{ margin: 0 }}>{skill.name}</h1>
              <span style={{ background: '#10b981', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', padding: '0.2rem 0.6rem', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Verified</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', margin: 0 }}>Official Certification & Credential</p>
          </div>
        </div>

        <h4 className="text-gradient" style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          Credential Details
        </h4>
        
        <div className="metric-grid">
           <div className="card" style={{ padding: '2rem', border: '1px solid var(--card-border)', background: 'var(--surface)' }}>
             <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>Nomor Registrasi (ID)</p>
             <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0', fontFamily: 'monospace', color: 'var(--foreground)' }}>{skill.certNo}</p>
           </div>
           
           <div className="card" style={{ padding: '2rem', border: '1px solid var(--card-border)', background: 'var(--surface)' }}>
             <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>Status Sistem</p>
             <p style={{ fontSize: '1.15rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '500', color: 'var(--foreground)' }}>
               <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)' }}></span>
               Terverifikasi Resmi
             </p>
             <a href={skill.certLink} target="_blank" rel="noopener noreferrer" className="verify-link" style={{ fontSize: '0.95rem', color: "var(--accent)", textDecoration: "none", display: 'inline-block', fontWeight: '600', transition: 'opacity 0.2s' }}>Validasi Server &rarr;</a>
           </div>
        </div>
          
        {skill.certImage && (
           <div style={{ marginBottom: "4rem" }}>
             <h4 className="text-gradient" style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
               Dokumen Sertifikat
             </h4>
             <div style={{ maxWidth: "800px", margin: "0 auto", border: "1px solid var(--card-border)", borderRadius: "12px", overflow: "hidden", background: "var(--card-bg)", boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}>
                 {skill.certImage.endsWith('.pdf') ? (
                     <iframe src={`${skill.certImage}#view=Fit&toolbar=0&navpanes=0&scrollbar=0`} style={{ width: "100%", aspectRatio: "1.414", border: "none", display: "block" }} title={`Certificate ${skill.name}`} />
                 ) : (
                     <img src={skill.certImage} alt={`Certificate ${skill.name}`} style={{ width: "100%", height: "auto", display: "block" }} />
                 )}
             </div>
           </div>
        )}

        <h4 className="text-gradient" style={{ borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          Materi Pembelajaran Tersertifikasi
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
          {skill.materials?.map((m: string, i: number) => (
             <span key={i} className="material-chip" style={{ padding: '0.8rem 1.4rem', background: 'var(--surface)', border: '1px solid var(--card-border)', borderRadius: '30px', fontSize: '0.95rem', fontWeight: '500', color: 'var(--foreground)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', transition: 'transform 0.2s' }}>
               {m}
             </span>
          ))}
        </div>

      </div>
    </main>
  );
}
