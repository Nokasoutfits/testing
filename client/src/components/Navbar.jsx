import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";

import { styles } from "../styles";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import {slideIn} from '../utils/motion'
import { FaArrowRight, FaLanguage } from "react-icons/fa";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [language, setLanguage] = useState(false);
  const [subMenu2, setSubMenu2] = useState(false);

  const handleMenu = () => {
    setMobile(!mobile);
  };
  const handleSubMenu = () => {
    setSubMenu(!subMenu);
  };
  const handleSubMenu2 = () => {
    setSubMenu2(!subMenu2);
  };
  const viewLanguage = ()=>{
    setLanguage(!language)
  }
  return (
    <div className="w-[100vw] bg-tertiary fixed top-0 z-50 ">
      <div
        className={` max-w-7xl mx-auto ${styles.paddingX} flex justify-between items-center py-4`}
      >
        <FaLanguage onClick={viewLanguage} className="fixed text-[2rem] w-[60px] hover:bg-yellow-400 md:w-[70px] md:text-[2.3rem] text-white bg-blue-400 top-[85px] md:top-[100px] right-[20px] shadow-lg px-1"  style={{zIndex:"40", cursor: "pointer"}}/>
      <div id="google_translate_element" className={language ? "fixed top-[120px] md:top-[120px] right-0 shadow-lg bg-black px-1 rounded-md" : "fixed top-[70px] md:top-[85px] right-[-100%]"} style={{zIndex:"99", cursor: "pointer"}}></div>
        
        <Link to="/" className="flex items-end ">
          <motion.div variants={slideIn("left", "spring", 0.2, 1)}
            initial="hidden"
            animate="show"
          >
            <img src={logo} alt="logo" className="w-[50px] sm:w-[70px]" />
          </motion.div>
        </Link>
        <div className="lg:hidden justify-center items-center relative cursor-pointer">
          <img
            src={menu}
            alt=""
            className="top-0 w-[30px] left-[0]"
            onClick={handleMenu}
          />

          {/* //Mobile menu       */}
          <div
            className={
              !mobile
                ? "hidden "
                : `flex flex-col absolute bottom-[-1] right-0 black-gradient py-4 mt-2 pl-6 pr-20 z-50`
            }
          >
            <img
              src={close}
              alt=""
              className=" absolute top-4 w-[15px] right-4 z-10"
              onClick={handleMenu}
            />
            <Link to="/" className="py-2 pt-4 text-md">
              Home
            </Link>
            <div className="relative" onClick={handleSubMenu2}>
            <span className="py-2 pt-4 text-md flex items-center cursor-pointer">
              Our Company{" "}
              <MdOutlineArrowDropDown className="text-white text-xl" />{" "}
            </span>
            <div
              className={
                !subMenu2
                  ? "hidden"
                  : ` flex flex-col absolute z-10 black-gradient p-4 gap-2`
              }
            >
              <Link to="/about" className=" text-[14px] xl:text-[16px] ">
                About
              </Link>
              <Link to="/contact" className=" text-[14px] xl:text-[16px] ">
                Contact
              </Link>
            </div>
          </div>
            <Link to="/services" className="py-2 text-md">
              Services
            </Link>
            <div className="relative" onClick={handleSubMenu}>
            <span className="py-2 pt-4 text-md flex items-center cursor-pointer">
              Information{" "}
              <MdOutlineArrowDropDown className="text-white text-xl" />{" "}
            </span>
            <div
              className={
                !subMenu
                  ? "hidden"
                  : ` flex flex-col absolute black-gradient p-4 gap-2`
              }
            >
              <Link to="/accounts" className="py-2 pt-4 text-md">
                Accounts
              </Link>
              <Link to="/faq" className="py-2 pt-4 text-md">
                Faq
              </Link>
              <Link to="/legal" className="py-2 pt-4 text-md">
                Legal
              </Link>
            </div>
          </div>
          <Link to="/login" className="py-2 text-md flex gap-2 items-center bg-light p-2 rounded-lg mt-4 ">
              Login <FaArrowRight className=""/>
            </Link>
          <Link to="/register" className="py-2 text-md flex gap-2 items-center border border-light p-2 rounded-lg mt-4 mb-4">
             Register
            </Link>
          </div>

          {/* //Mobile menu */}
        </div>

        <div className={`hidden lg:flex w-[1000px] justify-end items-center gap-8`}>
          <img src={close} alt="" className="hidden" />
          <Link to="/" className=" text-[14px]  uppercase">
            Home
          </Link>
          <div className="relative" onClick={handleSubMenu2}>
            <span className=" text-[14px]   flex items-center cursor-pointer uppercase">
              Our Company{" "}
              <MdOutlineArrowDropDown className="text-white text-xl" />{" "}
            </span>
            <div
              className={
                !subMenu2
                  ? "hidden"
                  : ` flex flex-col absolute black-gradient p-4 gap-2`
              }
            >
              <Link to="/about" className=" text-[14px]   uppercase">
                About
              </Link>
              <Link to="/contact" className=" text-[14px]   uppercase">
                Contact
              </Link>
            </div>
          </div>
          <Link to="/services" className=" text-[14px]   uppercase">
            Services
          </Link>
          <div className="relative" onClick={handleSubMenu}>
            <span className=" text-[14px]   flex items-center cursor-pointer uppercase">
              Information{" "}
              <MdOutlineArrowDropDown className="text-white text-xl" />{" "}
            </span>
            <div
              className={
                !subMenu
                  ? "hidden"
                  : ` flex flex-col absolute black-gradient p-4 gap-2`
              }
            >
              <Link to="/accounts" className=" text-[14px]   uppercase">
                Accounts
              </Link>
              <Link to="/faq" className=" text-[14px]   uppercase">
                Faq
              </Link>
              <Link to="/legal" className=" text-[14px]   uppercase">
                Legal
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 ml-6">
          <Link to="/login" className="flex gap-2 items-center text-[14px]   uppercase bg-light p-2 rounded-lg">
                LogIn <FaArrowRight/>
              </Link>
          <Link to="/register" className="text-[14px]   uppercase border border-light p-2 rounded-lg">
                Register
              </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
