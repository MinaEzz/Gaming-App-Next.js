import HeaderButtons from "./header-buttons/HeaderButtons.component";
import LogoSection from "./logo-section/LogoSection.component";
import SearchbarSection from "./searchbar-section/SearchbarSection.component";

const Header = () => {
  return (
    <header className="w-full min-h-[5.75rem] px-5 flex items-center bg-black/50">
      <div className="w-full flex items-center justify-between">
        <SearchbarSection />
        <LogoSection />
        <HeaderButtons />
      </div>
    </header>
  );
};

export default Header;
