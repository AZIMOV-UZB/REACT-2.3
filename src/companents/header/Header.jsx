import React, { useState } from "react";
import "./header.css";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import rasm from "../../assets/Header.svg"
import { FaUserAlt } from "react-icons/fa";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container header mx-auto px-5">
        <div className=" header flex items-center  gap-[69px] justify-between  mt-5">
          <Link to={"/"}>
            <img
              className="w-[130px] h-[50px] object-contain "
              src={rasm}
              alt="foto"
            />
          </Link>

          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
          
              <div className="flex items-center gap-1 navbar__collection">
                <FaUserAlt />
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/Admin"}
                >

                  User
                </NavLink>
              </div>
         
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
