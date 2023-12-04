import { ColorModeToggle } from "./color-mode-toggle";
import { MainNav } from "./main-nav";

const NavBar = async () => {

  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6"/>
        <div className="ml-auto flex items-center space-x-4">
          <ColorModeToggle />
        </div>
      </div>
    </div>
   );
}
 
export default NavBar;