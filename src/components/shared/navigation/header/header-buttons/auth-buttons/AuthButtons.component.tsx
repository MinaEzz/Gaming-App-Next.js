import Button from "@/components/UI/button/Button.component";
import { LuLogIn, LuPlus } from "react-icons/lu";

const AuthButtons = () => {
  return (
    <div className="w-fit items-center gap-4 hidden lg:flex">
      <Button href={"/login"} className="gradient-bg-to-r rounded-tr-3xl">
        <p>Login</p>
        <LuLogIn className="w-4 h-4" />
      </Button>
      <Button href={"/signup"} className="gradient-bg-to-r rounded-tr-3xl">
        <p>Sign Up</p>
        <LuPlus className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default AuthButtons;
