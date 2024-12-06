export interface ContentColumn {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description: React.ReactNode;
  link?: {
    title: string;
    href: string;
  };
  img: {
    src: string;
    alt: string;
  };
}

export interface ContentColumnsProps {
  column1: ContentColumn;
  column2: ContentColumn;
  className?: string;
}
