import { Darkmode } from "./Darkmode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Search from "./Search";


const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center">
        <Logo></Logo>
        <Search></Search>
        <div className="flex gap-5">
          <Darkmode></Darkmode>
        <DropdownListMenu></DropdownListMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
