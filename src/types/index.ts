export interface PersonalData {
  name: string;
  title: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  linkedin: string;
  website: string;
  location: string;
}

export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];
  projects?: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  ranking?: string;
  graduationDate?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  status: "completed" | "in-progress" | "scheduled";
  scheduledDate?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  impact?: string;
  category: "automation" | "analysis" | "modeling" | "development";
}

export interface Skill {
  name: string;
  level: "familiar" | "intermediate" | "advanced";
  category: "programming" | "software" | "finance" | "soft";
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ContactInfo {
  name: string;
  email: string;
  message: string;
  subject?: string;
}
