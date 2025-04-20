import { BsPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: <GoHomeFill />,
  },
  {
    label: "Category",
    href: "/category",
    icon: <MdDashboard />,
  },
  // {
  //   label: "Library",
  //   href: "/library",
  //   icon: "library",
  // },
  {
    label: "Friends",
    href: "/friends",
    icon: <BsPeopleFill />,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: <FaHeart />,
  },
  // {
  //   label: "Downloads",
  //   href: "/downloads",
  //   icon: "downloads",
  // },

  // {
  //   label: "Settings",
  //   href: "/settings",
  //   icon: "settings",
  // },
  // {
  //   label: "Help",
  //   href: "/help",
  //   icon: "help",
  // },
];
