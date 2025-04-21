export type TType = "button" | "submit" | "reset";

export default interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: TType;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  style?: React.CSSProperties;
}
