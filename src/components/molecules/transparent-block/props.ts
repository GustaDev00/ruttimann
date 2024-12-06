export interface TransparentBlockProps {
  title: React.ReactNode;
  text: React.ReactNode;
  link: {
    title: string;
    href: string;
  };
  img: {
    src: string;
    alt: string;
  };
  className?: string;
}
