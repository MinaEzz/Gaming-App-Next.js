import Button from "@/components/UI/button/Button.component";
import { LuLogIn, LuPlus } from "react-icons/lu";

const SidebarButtons = () => {
  return (
    <div className="w-full flex flex-col gap-4 px-4 md:hidden">
      <Button href={"/login"} className="gradient-bg-to-r rounded-3xl">
        <p>Login</p>
        <LuLogIn className="w-4 h-4" />
      </Button>
      <Button href={"/signup"} className="gradient-bg-to-r rounded-3xl">
        <p>Sign Up</p>
        <LuPlus className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SidebarButtons;
