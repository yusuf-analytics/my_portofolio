export interface SkillData {
  slug?: string;
  name: string;
  src: string;
  hasDetails: boolean;
  certNo?: string;
  certLink?: string;
  certImage?: string;
  materials?: string[];
}

export const skillsData: SkillData[] = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", hasDetails: false },
  { name: "JavaScript", slug: "javascript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", hasDetails: true, certNo: "PZN-27544-4030-1774748056", certLink: "https://kelas.programmerzamannow.com/certificates/PZN-27544-4030-1774748056", certImage: "/sertifikat-javascript.pdf", materials: ["JavaScript Dasar", "JavaScript OOP", "JavaScript Standard Library", "JavaScript Modules", "JavaScript DOM", "JavaScript TodoList", "JavaScript Async"] },
  { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", hasDetails: false },
  { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", hasDetails: false },
  { name: "Matplotlib", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg", hasDetails: false },
  { name: "Seaborn", src: "/seaborn-logo.svg", hasDetails: false },
  { name: "Scikit-learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", hasDetails: false },
  { name: "SciPy", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg", hasDetails: false },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", hasDetails: false },
  { name: "Tableau", src: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg", hasDetails: false },
  { name: "Power BI", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", hasDetails: false },
  { name: "Excel", src: "/excel-logo.png", hasDetails: false },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", hasDetails: false }
];
