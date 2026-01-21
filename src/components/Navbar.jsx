import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeClass =
    "underline font-semibold text-yellow-200";
  const normalClass =
    "hover:underline";

  return (
    <nav className="bg-pink-600 text-white p-4 flex justify-between items-center sticky top-0 z-50">
      
      {/* Branding */}
      <div className="leading-tight">
        <h1 className="text-xl font-bold">
          The Stitching Beauty
          <span className="text-sm italic font-normal text-pink-100">
            {" "}– by Mrs. Pallavi Ramakant Soni
          </span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4 text-sm">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/blouse-stitching"
          className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }
        >
          Blouse Designs
        </NavLink>

        <NavLink
          to="/accessories"
          className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }
        >
          Accessories
        </NavLink>

        <NavLink
          to="/measurement-guide"
          className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }
        >
          Measurement Guide
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
