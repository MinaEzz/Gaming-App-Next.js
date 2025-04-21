import { BiLoader } from "react-icons/bi";
import ISpinnerProps from "./Spinner.types";

const Spinner = ({ size = "md", className = "" }: ISpinnerProps) => {
  const sizeClassName = {
    xs: "w-2 h-2",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };
  return (
    <span className={`animate-spin ${className}`}>
      <BiLoader className={sizeClassName[size]} />
    </span>
  );
};

export default Spinner;
