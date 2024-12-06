export interface CardContentProps {
  title: React.ReactNode;
  description: React.ReactNode;
  link?: {
    title: string;
    href: string;
  };
  img: {
    src: string;
    alt: string;
  };
  className?: string;
}
