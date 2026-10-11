/**
 * Portfolio Data Type Definitions
 * Harishwa S - Personal Portfolio
 */

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  college: string;
  degree: string;
  batch: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  category: 'programming' | 'ai' | 'web' | 'hardware' | 'soft' | 'language';
  description?: string;
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: string;
  tagline: string;
  problem: string;
  overview: string;
  technologies: string[];
  contribution: string[];
  keyFeatures: string[];
  impactNotes?: string;
  hasInteractiveDemo?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  score?: string;
  scoreType?: string;
  status?: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  duration: string;
  issuer: string;
  completionDate: string;
  conductedAt: string;
  skills: string[];
}

export interface ActivityItem {
  title: string;
  role: string;
  organization?: string;
  category: 'club' | 'innovation' | 'sports' | 'extracurricular';
  description: string;
  highlights: string[];
}
