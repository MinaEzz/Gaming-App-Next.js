import Logo from "../../logo/Logo.component";
import { NAV_LINKS } from "../Navigation.data";
import NavLink from "./nav-link/NavLink.component";

const Sidebar = () => {
  return (
    <aside className="w-full h-screen overflow-clip sticky inset-0 col-span-2 py-10 flex flex-col items-center gap-8 bg-black/50 max-lg:hidden">
      <Logo />
      <nav className="w-full h-full mt-4">
        <ul className="w-full h-full space-y-4 overflow-y-auto">
          {NAV_LINKS.map((link, index) => {
            return (
              <NavLink
                key={index}
                label={link.label}
                icon={link.icon}
                href={link.href}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
