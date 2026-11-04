export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  categorySlug: 'strategy' | 'digital' | 'creative' | 'social';
  year: string;
  image: string;
  heroImage: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  deliverables: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  statement: string;
  detail: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  services: string[];
  message: string;
}

