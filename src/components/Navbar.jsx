import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const activeDesktop =
    "underline font-semibold text-yellow-200";
  const normalDesktop =
    "hover:underline";

  const activeMobile =
    "block py-2 font-semibold underline text-yellow-200";
  const normalMobile =
    "block py-2 hover:underline";

  return (
    <nav className="bg-pink-600 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        
        <h1 className="text-xl font-bold">
          The Stitching Beauty
          <span className="text-sm italic font-normal text-pink-100">
            {" "}– by Mrs. Pallavi Ramakant Soni
          </span>
        </h1>

        <div className="hidden md:flex space-x-4 text-sm">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeDesktop : normalDesktop}>
            Home
          </NavLink>
          <NavLink to="/blouse-stitching" className={({ isActive }) => isActive ? activeDesktop : normalDesktop}>
            Blouse Designs
          </NavLink>
          <NavLink to="/accessories" className={({ isActive }) => isActive ? activeDesktop : normalDesktop}>
            Accessories
          </NavLink>
          <NavLink to="/measurement-guide" className={({ isActive }) => isActive ? activeDesktop : normalDesktop}>
            Measurement Guide
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeDesktop : normalDesktop}>
            Contact
          </NavLink>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-pink-700 px-4 pb-4 text-sm">
          <NavLink onClick={() => setOpen(false)} to="/" end className={({ isActive }) => isActive ? activeMobile : normalMobile}>
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/blouse-stitching" className={({ isActive }) => isActive ? activeMobile : normalMobile}>
            Blouse Designs
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/accessories" className={({ isActive }) => isActive ? activeMobile : normalMobile}>
            Accessories
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/measurement-guide" className={({ isActive }) => isActive ? activeMobile : normalMobile}>
            Measurement Guide
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={({ isActive }) => isActive ? activeMobile : normalMobile}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
