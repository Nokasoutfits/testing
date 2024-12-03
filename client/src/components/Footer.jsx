import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-tertiary w-full">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto py-20 flex flex-col lg:flex-row gap-6 justify-between `}
      >
        <div className="flex flex-col gap-2">
          <h5 className="text-[18px] xl:text-[22px] font-bold">Our Company</h5>
          <Link
            to="/about"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            About
          </Link>
          <Link to="/faq" className="text-[16px] xl:text-[18px] text-secondary">
            FAQ's
          </Link>
          <Link
            to="/contact"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[18px] xl:text-[22px] font-bold">Our Services</h5>
          <Link
            to="/crypto-Investment"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            Crypto Investment
          </Link>
          <Link
            to="/gold-Investment"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            Gold Investment
          </Link>
          <Link
            to="/stock-exchange"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            Stock Investment
          </Link>
          <Link
            to="/real-estate-Investment"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            Real Estate Investment
          </Link>
          <Link
            to="/forex-Investment"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            Forex Investment
          </Link>
          {/* <Link to="/loans" className='text-[16px] xl:text-[18px] text-secondary'>Loan</Link> */}
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[18px] xl:text-[22px] font-bold">Account</h5>
          <Link
            to="/register"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            Create Acount
          </Link>
          <Link
            to="/login"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            Login
          </Link>
          <Link
            to="/forgot-password"
            className="text-[16px] xl:text-[18px] text-secondary"
          >
            Forgot Password
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[18px] xl:text-[22px] font-bold">Location</h5>
          <span className="text-[16px] xl:text-[18px] text-secondary">
            Address:{" "}
            <span>8361 International Dr, Orlando, FL 92810, United States</span>
          </span>
          <span className="text-[16px] xl:text-[18px] text-secondary">
            Branch Address:{" "}
            <span>413 Oxford St, London W1C 2PF, United Kingdom</span>
          </span>
          <span className="text-[16px] xl:text-[18px] text-secondary">
            Whatsapp/Call: +1(239) 203-8946 
            {/* / +1(239) 203-8946 */}
          </span>
        </div>
      </div>
      <hr className="pb-10" />
      <div className={`${styles.paddingX} max-w-7xl mx-auto pb-[10rem] `}>
        <p className="pb-4 text-md xl:text-lg text-secondary">
          2023 SwizzFunds. All Rights Reserved.
        </p>
      </div>
      {/* <div
        class="fixed bg-green-600 border-2 outline-2 outline-green-600 p-4 rounded-full bottom-[50px] left-10 "
        style={{ zIndex: "999" }}
      >
        <a href="https://wa.me/+4407771094494" rel="noreferrer" target="_blank">
          <FaWhatsapp className="text-4xl" />
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
