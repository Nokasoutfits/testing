import React, { useState } from "react";
import CountUp from "react-countup";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { styles } from "../styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./pages.css";
import Whyus from "../components/Whyus";

const Privacy = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <title>Privacy - SwizzFunds </title>
        <meta name="description" content=" SPEED SOLUTIONS Ltd, and its related entities hereafter SwizzFunds, 
            is responsible for the protection of the privacy and the
            safeguarding of clients’ personal and financial information. By
            opening a trading account with SwizzFunds, the client hereby gives
            its consent to such collection, processing, storage and use of
            personal information by SwizzFunds as explained below."/>

      </Helmet>
    </HelmetProvider>
        <Navbar/>
    <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div
            className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}
          >
            <div>
              {/* <h4 className={`${styles.sectionSubText} pink-text-gradient`}>
                Frequently Asked Questions
              </h4> */}
              <h2 className={`${styles.sectionHeadText} `}>Privacy.</h2>
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

        <div className="privacy">
            <div className="container2">
            <div className="content">
          <p className="intro">
            SPEED SOLUTIONS Ltd, and its related entities hereafter SwizzFunds, 
            is responsible for the protection of the privacy and the
            safeguarding of clients’ personal and financial information. By
            opening a trading account with SwizzFunds, the client hereby gives
            its consent to such collection, processing, storage and use of
            personal information by SwizzFunds as explained below.
          </p>
          <div className="text">
            <h2>The collection of personal information</h2>
            <p>
              SwizzFunds collects the necessary information required to open a
              client’s trading account and perform transactions. Additionally,
              it safeguards the clients’ assets and privacy and provide clients
              with the variety of services they require. In this respect, the
              Company gathers information from clients and may, in certain
              circumstances, gather information from banks, and/or credit
              agencies, and/or clearing agencies, and/or other sources which
              will help the Company to construct the clients’ profile based on
              their requirements and preferences in order to provide all its
              services effectively. <br /> <br /> The only information the
              Company collects includes information required to communicate with
              and identify its clients. The Company may also collect certain
              demographic information, such as birth dates, education level,
              occupation, etc. The Company also assesses trading related
              information.
            </p>
          </div>
          <div className="text">
            <h2>Usage of personal information</h2>
            <p>
              The Company uses clients’ personal information only as required to
              provide quality service and security to its clients. This
              information helps the Company to improve its services, customize
              browsing experience and enables it to inform its clients about
              additional products, services or promotions relevant to them. In
              this respect, the clients hereby consent to the usage of this data
              for such purposes. <br /> <br /> If the clients do not want to
              receive information of this nature for any reason, they can
              contact the Company at the following address: support@SwizzFunds.com
            </p>
          </div>
          <div className="text">
            <h2>Protection of personal information</h2>
            <p>
              Any personal information provided by the client to the Company
              will be treated as confidential and shared only within the Company
              and its affiliates and will not be disclosed to any third party
              except under any regulatory or legal proceedings. In case such
              disclosure is required to be made by law or any regulatory
              authority, it will be made on a ‘need-to-know’ basis, unless
              otherwise instructed by the regulatory authority. Under such
              circumstances, the Company shall expressly inform the third party
              regarding the confidential nature of the information.
            </p>
          </div>
          <div className="text">
            <h2>Affiliates and Partners</h2>
            <p>
              The Company may share information with affiliates in the event
              such information is reasonably required by such affiliate to
              provide the products or services to its clients. The Company may
              share information with partners, affiliates and associates to
              offer additional similar products and services that meet clients’
              needs and which are delivered in a manner that is useful and
              relevant only where clients have authorized the Company to do so.
            </p>
          </div>
          <div className="text">
            <h2>Non-affiliated third parties</h2>
            <p>
              The Company does not sell, license, lease or otherwise disclose
              clients’ personal information to third parties, except as
              described in this Privacy Policy. <br /> <br/> The Company reserves the
              right to disclose personal information to third parties where
              required by Law, regulatory and other government authority. The
              Company may also disclose information as necessary to credit
              reporting or collection agencies as reasonably required to provide
              the services to Company and/or its clients. <br /> <br/> In addition,
              the Company may engage third parties to help carry out certain
              internal functions such as account processing, fulfillment, client
              service, client satisfaction surveys or other data collection
              activities relevant to its business. Use of the shared information
              is strictly limited to the performance of the above and is not
              permitted for any other purpose. All third parties with which the
              Company shares personal information are required to protect such
              personal information in accordance with all relevant legislation
              and in the same manner the Company protects them. The Company will
              not share personal information with third parties which it
              considers will not provide its clients the required level of
              protection. <br /> In cases where clients have been introduced by
              a Business Introducer, such Business Introducer may have access to
              clients’ information. Hence, clients hereby consent to the sharing
              of information with such Business Introducer.
            </p>
          </div>
          <div className="text">
            <h2>Contact Clients</h2>
            <p>
              From time to time the Company may contact clients whether by phone
              or email and offer them further information about the Company and
              financial market trading. Additionally, the Company may, on
              occasion, seek to contact clients, whether by phone or by email to
              inform them of unique promotional offerings provided by the
              Company for the client. Clients consent to the receipt of such
              contact when they consent to our terms and conditions of use when
              registering with the Company. Any person wishing to opt out of
              further contact with the Company at any time whatsoever is
              entitled to do so, simply by contacting the Company whether by
              phone or email and requesting that no further contact on behalf of
              the Company be made.
            </p>
          </div>
          <div className="text">
            <h2>Restriction of responsibility</h2>
            <p>
              The Company is not responsible for the privacy policies or the
              content of sites to which Spiratrusts.com links and has no control
              of the use or protection of information provided by the clients or
              collected by those sites. Whenever a client elects to link to a
              co-branded web site or to a linked web site, the client may be
              asked to provide registration or other personal information.
              Please note that such information is recorded by a third party and
              will be governed by the privacy policy of that third party.
            </p>
          </div>
          <div className="text">
            <h2>Use of “COOKIES”</h2>
            <p>
              The Company uses cookies to secure clients’ trading activities and
              to enhance the performance of the Spiratrusts.com web site.
              Cookies used by the Company do not contain personal information or
              other sensitive information. <br /> <br/> The Company may share web site
              usage statistics with reputable advertising companies and with its
              affiliated marketing companies. It is noted that the information
              collected by such advertising companies is not personally
              identifiable. To administer and improve the Spiratrusts.com web
              site, the Company may use third parties to track and analyze usage
              and statistical volume information. The third party may use
              cookies to track behavior and may set cookies on behalf of the
              Company. These cookies do not contain any personally identifiable
              information.
            </p>
          </div>
          <div className="text">
            <h2>Privacy Policy Updates</h2>
            <p>
              The Company may update this Privacy Policy from time to time. In
              case the Company materially changes this Policy including how it
              collects, processes or uses clients’ personal information, the
              revised Privacy Policy will be uploaded in the Company’s website.
              In this respect, the clients hereby agree to accept posting of a
              revised Privacy Policy electronically on the website as the actual
              notice of the Company to its clients. Any dispute over the
              Company’s Privacy Policy is subject to this notice and the Client
              Agreement. The Company encourages its clients to periodically
              review this Privacy Policy so that they are always aware of what
              information the Company collects, how it uses it and to whom it
              may disclose it, in accordance with the provisions of this Policy.
            </p>
          </div>
        </div>
            </div>
        </div>
        <Whyus/>
        <Footer/>
    </div>
  )
}

export default Privacy