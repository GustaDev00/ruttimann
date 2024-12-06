export interface ButtonSwipeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  title?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}
