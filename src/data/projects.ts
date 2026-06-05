export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'ugz' | 'arch';
  tags: string[];
}

export const projects: Project[] = [];
