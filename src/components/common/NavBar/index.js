import { useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";

function NavBar() {
  return (
    <aside classNamme="bg-white">
      <nav className="h-screen">
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <CgProfile />
            <p>Profile</p>
          </li>
          <li className="flex items-center gap-3">
            <BiEdit />
            <p>Kiosk Editor</p>
          </li>
          <li className="flex items-center gap-3">
            <SlScreenDesktop />
            <p>View Page</p>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default NavBar;
