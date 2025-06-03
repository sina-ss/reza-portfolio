import {
  PersonalData,
  WorkExperience,
  Education,
  Certification,
  Project,
  SkillCategory,
} from "@/types";

export const personalData: PersonalData = {
  name: "Reza Fakhr Hosseini",
  title: "Financial Analyst & Investment Professional",
  dateOfBirth: "10 Dec 2000",
  phone: "+447351036696",
  email: "rzafh79@gmail.com",
  linkedin: "https://linkedin.com/in/reza-fakhr-hosseini",
  website: "rfhosseini.me",
  location: "Manchester, UK",
};

export const personalStatement = `As a Financial Analyst, I have completed financial modeling for over 50 companies across three major sectors in my country, including refineries. Over the past four years, I dedicated myself to this role, often working extra unpaid hours, progressing from an untrained beginner to leading the financial team at one of my country's most established and reputable brokerage and fund institution. Originally a Biomedical Engineering major, my curiosity led me to add an Economics minor and make a career pivot into finance. This path has inspired me to pursue advanced studies in the UK, where I look forward to entering the global finance job market with a strong work ethic, curiosity, and analytical rigour—especially in technical sectors that demand precision and insight.`;

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    position: "Financial Analyst",
    company: "Tadbirgaran Farda",
    location: "Tehran, Iran",
    startDate: "April 2020",
    endDate: "September 2024",
    responsibilities: [
      "Financial Analysis and Research about Companies and Industries",
      "Investment fund portfolio management",
      "Market Trend Analysis",
      "Financial Modelling and Forecasting",
      "Taught financial subjects to colleagues and clients",
    ],
    achievements: [
      "Financial Modelling of +50 firms",
      "Developed independent valuation projects of +10 firms (Relative and Absolute)",
      "Supervising and leading the analysis team",
      "Financial Modelling and Forecasting of 3 main sectors' firms of Iran (Refinery, Power Plant, Cement)",
      "Represented the organization in analytical meetings and annual general meetings",
    ],
    projects: [
      "Automated Excel Dashboard For Communications' Operators",
      "Automated Excel and Power Bi Dashboard For Portfolio Management of 'Moshtarak Tadbir' Fund",
      "Designing database and backend for Setad Portfolio Management Application",
      "Specific Financial Evaluation of 'Barekat Financial Group'",
    ],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "M.Sc.",
    field: "Finance",
    institution: "Manchester Metropolitan University",
    location: "Manchester, UK",
    startDate: "2024",
    endDate: "2025",
    graduationDate: "September 2025",
    ranking: "Rank 51+ in World, QS Universities",
  },
  {
    id: "2",
    degree: "B.Sc.",
    field: "Biomedical Engineering (Bioelectric)",
    institution: "Amirkabir University of Technology",
    location: "Tehran, Iran",
    startDate: "2019",
    endDate: "2023",
    gpa: "3.45 (16.43 / 20) | Last 60 units: 3.71 (17.138 / 20)",
    ranking: "Rank 1 BioElectrics Department in Iran, Ministry of Science",
  },
  {
    id: "3",
    degree: "Minor",
    field: "Economics",
    institution: "Amirkabir University of Technology",
    location: "Tehran, Iran",
    startDate: "2021",
    endDate: "2022",
    gpa: "3.8 (17.82 / 20)",
  },
  {
    id: "4",
    degree: "High School",
    field: "Mathematics",
    institution: "Atomic Energy High School",
    location: "Tehran, Iran",
    startDate: "2016",
    endDate: "2019",
    gpa: "19.52 / 20",
    ranking: "Rank 1 High School in Iran, Ministry of Science",
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Bloomberg Market Concepts",
    issuer: "Bloomberg",
    issueDate: "May 2025",
    credentialId: "srbcSSX6bmAxvXgaMj4mWADV",
    status: "completed",
  },
  {
    id: "2",
    name: "Bloomberg Spreadsheet Analysis",
    issuer: "Bloomberg",
    issueDate: "May 2025",
    credentialId: "rpu4HEP4p2bp9QYBm1cBRUFS",
    status: "completed",
  },
  {
    id: "3",
    name: "Environmental Social Governance Bloomberg",
    issuer: "Bloomberg",
    issueDate: "May 2025",
    credentialId: "qqqz3Ua7cBbc9o1CcrSs9ntN",
    status: "completed",
  },
  {
    id: "4",
    name: "Finance Accelerator",
    issuer: "Morgan Stanley and UBS",
    issueDate: "Oct 2024",
    credentialId: "f7d3907c-2efc-47b8-b358-1b8a60b27f6e",
    status: "completed",
  },
  {
    id: "5",
    name: "CFA Level 1 Candidate",
    issuer: "CFA Institute",
    issueDate: "",
    status: "scheduled",
    scheduledDate: "Aug 2025",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Automated Excel Dashboard For Communications' Operators",
    description:
      "Developed comprehensive automated dashboard for telecommunications sector analysis",
    technologies: ["Excel", "VBA", "Financial Modeling"],
    category: "automation",
  },
  {
    id: "2",
    name: "Portfolio Management Dashboard for Moshtarak Tadbir Fund",
    description:
      "Built automated Excel and Power BI dashboard for investment fund portfolio management",
    technologies: ["Excel", "Power BI", "VBA", "Financial Analytics"],
    category: "automation",
  },
  {
    id: "3",
    name: "Setad Portfolio Management Application",
    description:
      "Designed database and backend for one of Iran's largest organizations' portfolio management system",
    technologies: [
      "Database Design",
      "Backend Development",
      "Portfolio Management",
    ],
    category: "development",
  },
  {
    id: "4",
    name: "Barekat Financial Group Evaluation",
    description:
      "Conducted comprehensive financial evaluation of Iran's biggest pharmaceutical sector financial group",
    technologies: ["Financial Modeling", "Valuation", "Industry Analysis"],
    category: "analysis",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Skills",
    skills: [
      { name: "VBA", level: "advanced", category: "programming" },
      { name: "MATLAB", level: "advanced", category: "programming" },
      { name: "Python", level: "advanced", category: "programming" },
      { name: "JavaScript", level: "intermediate", category: "programming" },
      { name: "TypeScript", level: "intermediate", category: "programming" },
      { name: "C++", level: "intermediate", category: "programming" },
      { name: "LaTeX", level: "familiar", category: "programming" },
      { name: "Assembly", level: "familiar", category: "programming" },
      { name: "HTML", level: "familiar", category: "programming" },
    ],
  },
  {
    name: "Software Skills",
    skills: [
      {
        name: "Microsoft Office Suite",
        level: "advanced",
        category: "software",
      },
      { name: "Excel", level: "advanced", category: "software" },
      {
        name: "Bloomberg Terminal",
        level: "intermediate",
        category: "software",
      },
      { name: "Power BI", level: "advanced", category: "software" },
      { name: "Figma", level: "familiar", category: "software" },
    ],
  },
  {
    name: "Financial Analysis",
    skills: [
      { name: "Financial Modeling", level: "advanced", category: "finance" },
      { name: "DCF Modeling", level: "advanced", category: "finance" },
      { name: "M&A Modeling", level: "advanced", category: "finance" },
      { name: "LBO Modeling", level: "advanced", category: "finance" },
      { name: "Valuation", level: "advanced", category: "finance" },
      { name: "Risk Assessment", level: "advanced", category: "finance" },
      { name: "Portfolio Management", level: "advanced", category: "finance" },
      { name: "Bloomberg Analysis", level: "advanced", category: "finance" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "No Ego", level: "advanced", category: "soft" },
      { name: "Adaptability", level: "advanced", category: "soft" },
      { name: "Team Player", level: "advanced", category: "soft" },
      { name: "Emotional Intelligence", level: "advanced", category: "soft" },
      { name: "Positive Attitude", level: "advanced", category: "soft" },
    ],
  },
];

export const teachingExperience = {
  position: "Teaching Assistant",
  course: "Management and Entrepreneurship in Biomedical Engineering",
  professor: "Dr. Hamed Azarnoush",
  institution: "Amirkabir University of Technology",
  duration: "2 semesters (2022-2023)",
};

export const languageProficiency = {
  language: "English",
  test: "IELTS",
  overall: 7,
  listening: 7.5,
  reading: 7,
  speaking: 7,
  writing: 6.5,
};
