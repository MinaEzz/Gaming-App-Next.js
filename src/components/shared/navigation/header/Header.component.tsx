import Button from "@/components/UI/button/Button.component";
import Searchbar from "./searchbar/Searchbar.component";
import { LuLogIn, LuPlus } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-full min-h-[5.75rem] px-5 flex items-center bg-black/50">
      <div className="w-full flex items-center justify-between">
        <div className="lg:w-[40%] w-[50%]">
          <Searchbar />
        </div>
        <div className="w-fit flex items-center gap-4">
          <Button href={"/login"} className="gradient-bg-to-r rounded-tr-3xl">
            <p>Login</p>
            <LuLogIn className="w-4 h-4" />
          </Button>
          <Button href={"/signup"} className="gradient-bg-to-r rounded-tr-3xl">
            <p>Sign Up</p>
            <LuPlus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
