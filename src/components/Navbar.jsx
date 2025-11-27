import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import { MdOutlineBakeryDining } from "react-icons/md";

import { RxHamburgerMenu } from "react-icons/rx";

import { RxCross2 } from "react-icons/rx";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleFun = () => {
    setOpen(!open);
  };

  return (
    <div className="flex gap-10 justify-start shadow rounded-xl my-2 h-15">
      <div className="my-2 relatve hidden md:flex ">
        <Link to="/">
          <span className="text-[#be185d] md:text-2xl md:mt-20 md:mx-10 cursor-pointer items-center ">
            Bakery <MdOutlineBakeryDining className="absolute top-5 left-4" />
          </span>{" "}
        </Link>
      </div>

      <div className="hidden md:flex  lg:flex  gap-10 my-4   ">
        {/* <NavLink
          className={({ isActive }) => (isActive ? "text-green-400" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-400" : "")}
          to="/menu"
        >
          Menu
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-400" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-400" : "")}
          to="/contact"
        >
          Contact
        </NavLink> */}

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-green-400" : ""} hover:text-green-400`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `${isActive ? "text-green-400" : ""} hover:text-green-400`
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-green-400" : ""} hover:text-green-400`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-green-400" : ""} hover:text-green-400`
          }
        >
          Contact
        </NavLink>
      </div>

      <div
        className="md:hidden my-3 mx-4 text-3xl cursor-pointer"
        onClick={toggleFun}
      >
        {open ? <RxCross2 /> : <RxHamburgerMenu />}
      </div>

      {
        <div>
          <div className="my-2 relatve flex   md:hidden ">
            <Link to="/">
              <span className="text-[#be185d] absolute left-40 md:text-2xl md:mt-20 md:mx-10 cursor-pointer">
                Bakery
                <MdOutlineBakeryDining className="absolute top-1 left-13" />
              </span>
            </Link>
          </div>
        </div>
      }

      {open && (
        <div className="md:hidden flex flex-col justify-center items-center bg-[#f4e4e6] gap-10  my-4 z-10 w-[250px] h-[300px] shadow-blue-600  rounded-xl ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            to="/menu"
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
