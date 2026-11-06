// All editable content lives here.
export const site = {
  name: "Suryansh Sah",
  role: "Software Engineer | AI & ML Enthusiast",
  intro: "Building intelligent applications and practical software solutions through Python, AI/ML, and full-stack development.",
  email: "suryanshsahs@gmail.com",
  phone: "+91-7869512390",
  location: "Hyderabad, India",
  github: "https://github.com/suryanshsah1665",
  linkedin: "", // TODO: paste your LinkedIn URL. Left empty, the LinkedIn links are hidden.
  resume: "/Suryansh_Resume.pdf", // place the PDF in /public
};

export const about = {
  text: "I'm a Computer Science Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at GITAM Deemed University. I enjoy developing practical software solutions, exploring intelligent systems, and solving engineering problems through clean, efficient code. My experience includes software development, backend engineering, Python automation, machine learning, and working with the Frappe Framework.",
  facts: [
    ["Degree", "B.Tech CSE (AI & ML)"],
    ["University", "GITAM Deemed University"],
    ["Internship", "SDE Internship at BWH"],
    ["Interests", "Software Engineering, AI/ML, Backend Development"],
  ],
};

export const skills = [
  { title: "Languages", icon: "Code2", items: ["Python", "C", "Java", "JavaScript"] },
  { title: "Frameworks", icon: "Layers", items: ["Frappe Framework", "Django", "Flask"] },
  { title: "Web", icon: "Globe", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Backend", icon: "Server", items: ["Python", "REST APIs", "Business Logic"] },
  { title: "Database", icon: "Database", items: ["SQL", "Database Management"] },
  { title: "AI / ML", icon: "Brain", items: ["Machine Learning", "CNN", "Neural Networks"] },
  { title: "Core CS", icon: "Cpu", items: ["Data Structures", "Algorithms", "Algorithm Analysis", "Object-Oriented Programming"] },
  { title: "Tools", icon: "Wrench", items: ["Git", "GitHub", "VS Code", "PyCharm"] },
];

export const experience = [
  { role: "SDE Intern", org: "BWH", period: "June 2026 – August 2026", points: [
    "Worked with Python and the Frappe Framework on software development and application customization.",
    "Contributed to backend functionality, application business logic, and Frappe-based development workflows.",
    "Gained practical experience developing and customizing business applications." ] },
  { role: "Freelance Developer", org: "Self-employed", period: "June 2019 – June 2026", points: [
    "Developed Python and C-based scripts and small-scale software solutions for client requirements.",
    "Automated workflows and applied debugging and clean coding practices.",
    "Managed projects from requirements through delivery." ] },
  { role: "Marketing Team", org: "E-Club Hyderabad", period: "December 2023 – January 2025", points: [
    "Contributed to marketing initiatives and promotional activities as part of the E-Club Hyderabad team." ] },
];

// Verified against the repository code.
export const featured = [
  { id: "invoiceflow", name: "InvoiceFlow", visual: "invoice",
    repo: "https://github.com/suryanshsah1665/invoiceflow", live: "",
    note: "Previously hosted on Railway. Now available as source only.",
    desc: "A full-stack invoice generation application built with Flask. Users register, log in, and manage their own invoices, then download them as PDFs.",
    points: ["User authentication and account management", "Invoice creation, editing, and payment status updates", "PDF generation and download with WeasyPrint", "Each user's customers and invoices are stored separately", "Dashboard with revenue data"],
    tech: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Flask-Login", "WeasyPrint", "Alembic", "Docker", "HTML", "CSS"] },
  { id: "trading-bot", name: "Trading Bot", visual: "flow",
    steps: ["CLI", "Validators", "Orders", "Binance Futures Testnet"], caption: "Layered structure: cli.py, validators, orders, client",
    repo: "https://github.com/suryanshsah1665/trading_bot", live: "",
    note: "Testnet only. It does not trade real funds.",
    desc: "A command-line trading bot for the Binance Futures Testnet, built as a technical assessment during an internship selection process.",
    points: ["Places MARKET and LIMIT orders, BUY or SELL", "Validates order type, side, quantity, and price before sending", "Handles API errors and timestamp synchronization", "Logs requests, responses, and errors"],
    tech: ["Python", "Binance Futures Testnet API", "argparse", "Logging"] },
  { id: "code-quality", name: "Code Quality Analyzer", visual: "flow",
    steps: ["Python source", "AST features", "Random Forest", "Clean / Moderate / Complex"], caption: "Analysis pipeline behind the /analyze endpoint",
    repo: "https://github.com/suryanshsah1665/Internship_P", live: "",
    note: "Academic project. The model is trained on a generated dataset with rule-based labels.",
    desc: "A Python tool that analyzes the structure of source code and classifies its quality as Clean, Moderate, or Complex using a machine learning model.",
    points: ["Parses code with Python's ast module to count functions, loops, conditionals, and nesting depth", "Computes average function length and a cyclomatic complexity estimate", "Random Forest classifier built with scikit-learn", "Flask API that returns a prediction with confidence and saves each analysis to PostgreSQL"],
    tech: ["Python", "Flask", "scikit-learn", "ast", "PostgreSQL"] },
];

export const others = [
  { name: "Proposal", repo: "https://github.com/suryanshsah1665/proposal", live: "" },
  { name: "Doulove-me", repo: "https://github.com/suryanshsah1665/doulove-me", live: "" },
]; // paste each deployed URL into `live` to show a "Live site" button

export const education = [
  { title: "B.Tech, Computer Science Engineering (AI & ML)", org: "GITAM Deemed University", period: "August 2023 – August 2027" },
  { title: "Higher Secondary Education", org: "Krishna Public School, Raipur", period: "April 2017 – April 2023" },
];

export const certifications = [
  ["Software Engineer", "HackerRank", "April 2026"],
  ["Advanced Software Engineering Job Simulation", "Walmart USA, Forage", "February 2026"],
  ["Cyber Job Simulation", "Deloitte Australia, Forage", "February 2026"],
  ["Store Listing Certificate", "Google Play Academy", "June 2025"],
  ["Algorithms for Searching, Sorting, and Indexing", "University of Colorado Boulder", "June 2025"],
  ["Introduction to Python Functions", "University of Colorado Boulder", "June 2025"],
  ["Programming for Everybody (Getting Started with Python)", "University of Michigan", "June 2025"],
];
