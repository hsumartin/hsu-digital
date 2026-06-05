export interface Writing {
  slug: string;
  title: string;
  subtitle: string;
  abstract: string;
  tags: string[];
  date: string;
  hasTranslation: boolean;
  translationSlug?: string;
  lang: 'de' | 'en';
}

export const writings: Writing[] = [];
