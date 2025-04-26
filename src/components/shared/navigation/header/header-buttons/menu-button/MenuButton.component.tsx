import Button from "@/components/UI/button/Button.component";
import { BiMenu } from "react-icons/bi";

const MenuButton = () => {
  return (
    <Button className="lg:hidden block">
      <BiMenu className="w-10 h-10" />
    </Button>
  );
};

export default MenuButton;
