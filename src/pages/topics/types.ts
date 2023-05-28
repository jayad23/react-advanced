export type Content = Array<{title: string, development: Array<{ definition: string; image?: string; urlLink?: "" }>}>;
export interface SectionCardProps {
  title: string;
  content: Content;
  link: string;
  image: string;
}