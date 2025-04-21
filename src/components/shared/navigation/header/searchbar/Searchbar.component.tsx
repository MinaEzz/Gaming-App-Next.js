import Button from "@/components/UI/button/Button.component";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <label className="w-full h-[2.75rem] relative flex items-center text-gray-50">
      <BiSearch className="absolute left-2 w-5 h-5 pointer-events-none" />
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full pl-8 rounded-2xl rounded-r-none border border-gray-50 border-r-0 outline-none bg-transparent text-base text-gray-50 placeholder:gray-50 placeholder:text-sm"
      />
      <Button className="h-full gradient-bg-to-r border border-l-0 border-gray-50 rounded-r-2xl px-2 text-sm">
        <BiSearch className="w-6 h-6" />
      </Button>
    </label>
  );
};

export default Searchbar;
