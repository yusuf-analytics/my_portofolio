export interface SkillData {
  slug?: string;
  name: string;
  src: string;
  hasDetails: boolean;
  certNo?: string;
  certLink?: string;
  certImage?: string;
  materials?: string[];
  category: string;
}

export const skillsData: SkillData[] = [
  // Data Analyst
  { name: "Power BI", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", hasDetails: false, category: "Data Analyst" },
  { name: "Tableau", src: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg", hasDetails: false, category: "Data Analyst" },
  { name: "Excel", src: "/excel-logo.png", hasDetails: false, category: "Data Analyst" },
  { name: "Google Looker", src: "https://cdn.worldvectorlogo.com/logos/looker-1.svg", hasDetails: false, category: "Data Analyst" },

  // Data Science & Machine Learning & Deep Learning
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", hasDetails: false, category: "Data Science & Machine Learning & Deep Learning" },
  { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", hasDetails: false, category: "Data Science & Machine Learning & Deep Learning" },
  { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", hasDetails: false, category: "Data Science & Machine Learning & Deep Learning" },
  { name: "Matplotlib", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg", hasDetails: false, category: "Data Science & Machine Learning & Deep Learning" },
  { name: "SciPy", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg", hasDetails: false, category: "Data Science & Machine Learning & Deep Learning" },
  { name: "Scikit-learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", hasDetails: false, category: "Data Science & Machine Learning & Deep Learning" },
  { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", hasDetails: false, category: "Data Science & Machine Learning & Deep Learning" },
  { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", hasDetails: false, category: "Data Science & Machine Learning & Deep Learning" },

  // Gen AI
  { name: "LangChain", src: "/langchain-icon-logo-png_seeklogo-611655.png", hasDetails: false, category: "Gen AI" },
  { name: "LangSmith", src: "/langsmith-color.png", hasDetails: false, category: "Gen AI" },
  { name: "LangGraph", src: "/langgraph-color.png", hasDetails: false, category: "Gen AI" },
  { name: "n8n", src: "/n8n-icon.webp", hasDetails: false, category: "Gen AI" },
  { name: "Hugging Face", src: "/hugging-face-logo.png", hasDetails: false, category: "Gen AI" },
  { name: "OpenClaw", src: "/openclaw.png", hasDetails: false, category: "Gen AI" },

  // Web Development
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", hasDetails: false, category: "Web Development" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", hasDetails: false, category: "Web Development" },
  { name: "JavaScript", slug: "javascript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", hasDetails: true, certNo: "PZN-27544-4030-1774748056", certLink: "https://kelas.programmerzamannow.com/certificates/PZN-27544-4030-1774748056", certImage: "/sertifikat-javascript.pdf", materials: ["JavaScript Dasar", "JavaScript OOP", "JavaScript Standard Library", "JavaScript Modules", "JavaScript DOM", "JavaScript TodoList", "JavaScript Async"], category: "Web Development" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Golang", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Rust", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", hasDetails: false, category: "Web Development" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Vue", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Svelte", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Vite", src: "https://cdn.worldvectorlogo.com/logos/vitejs.svg", hasDetails: false, category: "Web Development" },
  { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", hasDetails: false, category: "Web Development" },
  { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", hasDetails: false, category: "Web Development" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Bun.js", src: "https://bun.sh/logo.svg", hasDetails: false, category: "Web Development" },
  { name: "Nest.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", hasDetails: false, category: "Web Development" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", hasDetails: false, category: "Web Development" },

  // Mobile Development
  { name: "Android", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg", hasDetails: false, category: "Mobile Development" },
  { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", hasDetails: false, category: "Mobile Development" },
  { name: "Swift", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg", hasDetails: false, category: "Mobile Development" },
  { name: "Dart", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg", hasDetails: false, category: "Mobile Development" },

  // Infrastructure & Data
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", hasDetails: false, category: "Infrastructure & Data" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", hasDetails: false, category: "Infrastructure & Data" },
  { name: "Cassandra", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-plain.svg", hasDetails: false, category: "Infrastructure & Data" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", hasDetails: false, category: "Infrastructure & Data" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", hasDetails: false, category: "Infrastructure & Data" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", hasDetails: false, category: "Infrastructure & Data" },
  { name: "Kafka", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg", hasDetails: false, category: "Infrastructure & Data" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", hasDetails: false, category: "Infrastructure & Data" },
  { name: "Elasticsearch", src: "https://cdn.worldvectorlogo.com/logos/elasticsearch.svg", hasDetails: false, category: "Infrastructure & Data" }
];
