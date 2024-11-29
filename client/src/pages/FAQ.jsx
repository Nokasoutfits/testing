import React, { useState } from "react";
import CountUp from "react-countup";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { accountInfo } from "../constants";
import { Link } from "react-router-dom";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whyus from "../components/Whyus";

const FAQ = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>FAQ's - SwizzFunds</title>
          <meta
            name="description"
            content=" How do i create my account?, How do i make a deposit?"
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <div>
        <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div
            className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}
          >
            <div>
              <h4 className={`${styles.sectionSubText} pink-text-gradient`}>
                Frequently Asked Questions
              </h4>
              <h2 className={`${styles.sectionHeadText} `}>FAQ's.</h2>
            </div>
            <div className="hidden xl:block">
              <div>
                <h1 className="text-[24px] sm:text-[30px] font-bold pink-text-gradient">
                  $<CountUp end={5000000} enableScrollSpy={true} /> +
                </h1>
                <p className="">Complete Transactions </p>
              </div>
              <div>
                <h1 className="text-[24px] sm:text-[30px] font-bold mt-6 pink-text-gradient">
                  <CountUp end={35000} enableScrollSpy={true} /> +
                </h1>
                <p className="">Active Investors </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.paddingX} max-w-7xl mx-auto py-20 `}
        >
          <div className="grid lg:grid-cols-2 gap-6 ">

            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>How do i create my account?</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-secondary`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white leading-8 ">
                            Registration process is very easy and will take a few moments to complete Simply click <Link to="/register" className="text-light">CREATE ACCOUNT</Link> button and fill in all the required fields
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>How do i make a deposit?</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-secondary`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white leading-8 ">
                            To deposit funds in your trading account is quick and simple For your convenience you may choose one of the several available deposit methods To make a successful deposit please follow the steps below Login to your account Click on the DEPOSITS button in the DASHBOARD section Choose the deposit option And follow the steps to complete your transaction.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>How long does my deposit take before it can reflect on my account dashboard?</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-secondary`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white leading-8 ">
                            Your deposit will be reflected immediately once it is confirmed on the blockchain network.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>How do I make a withdrawal?</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-secondary`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white leading-8 ">
                            To make a withdrawal request click the WITHDRAW button at the top center of your account dashboard and input the required details to withdraw.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Can I have more than one account?</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-secondary`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white leading-8 ">
                            No you cannot have more than one account only investors on the vip plan are allowed to do so.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Can I have more than two account?</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-secondary`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm leading-8 text-white">
                            We do not allow multiple accounts except only for our investors on the VIP plan.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left text-tertiary bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>How many times can i make a deposit?</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-secondary`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white leading-8 ">
                            Yes you can make as many deposit as you want on any of our investment plans except the starter plan where you can only invest 3 times after which you make a choice to continue investing with us or not.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

                
            </div>  
        </div>
      </div>
      <Whyus/>
      <Footer/>
    </div>
  );
};

export default FAQ;
