"use client";

import { useState } from "react";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  categories: string[];
  badge: string;
  shortDescription?: string;
  image?: string;
}

const TABS = [
  { label: "Semua", value: "all" },
  { label: "Data Analyst", value: "da" },
  { label: "Data Science", value: "ds" },
  { label: "Machine Learning", value: "machine-learning" },
  { label: "Deep Learning", value: "deep-learning" },
  { label: "Gen AI", value: "gen-ai" },
  { label: "Web Development", value: "web-development" },
  { label: "Mobile Development", value: "mobile-development" }
];

export default function ProjectsGallery({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter((proj) => {
    if (activeTab === "all") return true;
    
    // Map existing categories or just check inclusion
    // Ex: "data-analyst" => "da" or "da" => "da"
    const normalizedCategories = proj.categories.map(c => {
      if (c === "data-analyst") return "da";
      if (c === "data-science") return "ds";
      return c;
    });
    
    return normalizedCategories.includes(activeTab);
  });

  return (
    <>
      <div className="portfolio-tabs hide-scrollbar" style={{ display: "flex", gap: "0.8rem", overflowX: "auto", whiteSpace: "nowrap", marginBottom: "2.5rem", paddingBottom: "0.5rem", WebkitOverflowScrolling: "touch" }}>
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`btn ${activeTab === tab.value ? "btn-primary" : "btn-secondary"}`}
            style={{ padding: "0.6rem 1.4rem", fontSize: "0.9rem", borderRadius: "30px", flexShrink: 0 }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="projects-slider"> 
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj, idx) => (
            <Link href={`/projects/${proj.slug}`} key={idx} className="card project-card abstract-card projects-slider-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', padding: '0', overflow: 'hidden', minHeight: '440px' }}>
              <div style={{ height: '240px', width: '100%', borderBottom: '1px solid var(--card-border)', flexShrink: 0, overflow: 'hidden' }}>
                <img src={proj.image || "/placeholder.jpg"} alt={proj.title} className="abstract-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease' }} />
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
          ))
        ) : (
          <div style={{ padding: "3rem", textAlign: "center", width: "100%", color: "var(--muted)" }}>
            Project tidak ditemukan untuk kategori ini. Nanti akan saya tambahkan!
          </div>
        )}
      </div>
    </>
  );
}
