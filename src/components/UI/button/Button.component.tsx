import Link from "next/link";
import IButtonProps from "./Button.types";

const Button = ({
  children,
  className = "",
  onClick,
  href,
  type = "button",
  disabled = false,
  style,
}: IButtonProps) => {
  // TODO: border gradient
  if (href)
    return (
      <Link
        href={href}
        className={`bg-transparent flex items-center justify-center gap-2 py-2 px-4 capitalize text-base text-gray-50 font-medium text-center cursor-pointer ${className}`}
        style={style}
      >
        {children}
      </Link>
    );
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-transparent flex items-center justify-center gap-2 py-2 px-4 capitalize text-base text-gray-50 font-medium text-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-80 ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
