import React, { useState } from "react";
import CountUp from "react-countup";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { styles } from "../styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./pages.css";
import Whyus from "../components/Whyus";

const TermsCondi = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Terms & Condition - SwizzFunds</title>
          <meta
            name="description"
            content="We reserve the right to change this Agreement at any time and
                  notify you of any such change either via email or through the
                  Company’s website."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
        <div
          className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}
        >
          <div>
            {/* <h4 className={`${styles.sectionSubText} pink-text-gradient`}>
                Frequently Asked Questions
              </h4> */}
            <h2 className={`${styles.sectionHeadText} `}>Terms & Condition.</h2>
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
      <div className={`terms max-w-7xl ${styles.paddingX}`}>
        <div className="container2">
          <div className="content">
            <div className="text">
              <ol>
                <li>
                  <h2> INTRODUCTION – ABOUT US</h2>
                  <p>
                    We reserve the right to change this Agreement goldat any
                    time and notify you of any such change either via email or
                    through the Company’s website. Any changes to the Agreement
                    will not apply to transactions performed prior to the date
                    on which the changes become effective unless specifically
                    agreed otherwise. In case you disagree with the changes, you
                    may terminate the Agreement in accordance with paragraph 24
                    hereof.
                  </p>
                </li>
                <li>
                  <h2> COMMUNICATION WITH US</h2>
                  <p>
                    You may communicate with us in writing (including fax), by
                    email or other electronic means. The language of
                    communication shall be English and you will receive
                    documents and other information from us in English. However,
                    where appropriate and for your convenience, we will endeavor
                    to communicate with you in other languages. By accepting and
                    agreeing to the Terms and Conditions of this Agreement, you
                    accept the following terms and conditions and all the
                    policies included in the official website of the company
                    www.swizzfunds.com. <br /> <br /> The Company is free to use
                    any idea, concept, know-how or technique or information
                    contained in your communications for any purpose including,
                    but not limited to, developing and marketing products. The
                    Company monitors your communications to evaluate the quality
                    of service you receive, your compliance with this Agreement,
                    the security of the website, or for other reasons. You agree
                    that such monitoring activities will not entitle you to any
                    cause of action or other right with respect to the way the
                    Company monitors your communications. <br />
                    <br /> The Company may record telephone conversations to
                    ensure that the services provided are being delivered in
                    accordance to quality assurance guidelines and the Company’s
                    standards. Such records will be the Company’s property
                  </p>
                </li>
                <li>
                  <h2>MEMBERSHIP ELIGIBILITY</h2>
                  <p>
                    Services are available and reserved only for individuals or
                    legal entities that have established a legally binding
                    contract under the laws applicable in their country of
                    residence. Without limiting the below mentioned terms, our
                    Services are not available to people aged under the age of
                    18 or who have not attained the legal age (“Minors”). To
                    avoid any doubt, we disclaim any liability for unauthorized
                    use by Minors of our Services in any manner or another.{" "}
                    <br />
                    <br />
                    Without limiting the above-mentioned provisions, our
                    Services are not available in areas where their use is
                    illegal and the Company reserves the right to refuse and/or
                    cancel access to its Services to anyone at its sole
                    convenience. <br /> <br />
                    For avoidance of doubt, the ability to access our website
                    does not necessarily mean that our services, and/or your
                    activities through it, are legal under the laws, regulations
                    or directives relevant to your country of residency
                  </p>
                </li>
                <li>
                  <h2>DEFINITIONS – INTEPRETATION</h2>
                  <p>
                    <big>“Account”</big> means the personal trading account the
                    Client maintains with the Company and designated with a
                    unique account number.
                  </p>
                  <p>
                    <big>“Access Codes”</big> means the username and password
                    given by the Company to the Client for accessing the
                    Company’s website.
                  </p>
                  <p>
                    <big>“Agreement”</big> means these Terms and Conditions for
                    the Services offered by the Company.
                  </p>
                  <p>
                    <big>“Applicable Regulations”</big> means IFSC Legislation,
                    Directives, Circulars or other Regulations issued by IFSC
                    and govern the operations of Licensed Service Providers and
                    all applicable laws and rules in force from time to time.
                  </p>
                  <p>
                    <big>“Balance”</big> means the sum held on behalf of the
                    Client on its Client Account within any time period.
                  </p>
                  <p>
                    <big>“Business Day”</big> means a day which is not a
                    Saturday or a Sunday or a public holiday in Belize or any
                    other holiday to be announced by the Company on its website.
                  </p>
                  <p>
                    <big>“LSP Authorization”</big> means the license the Company
                    has obtained from IFSC, as this may be amended from time to
                    time and which sets out the investment and ancillary
                    services the Company is authorized to provide.
                  </p>
                  <p>
                    <big>“Company’s website”</big> means the following website
                    is swizzfunds.com
                  </p>
                  <p>
                    <big>’’CFD’’</big> means ‘contract for difference’ consists
                    of an agreement (contract) to exchange the difference in
                    value of a particular currency, commodity, share, index or
                    cryptocurrency between the time at which a contract is
                    opened and the time at which it is closed. Gains or losses
                    are made based on how the underlying instruments prices
                    change relative to the price at the initiation of the
                    contract.
                  </p>
                  <p>
                    <big>“IFSC”</big> means the International Financial Services
                    Commission.
                  </p>
                  <p>
                    <big>“Execution”</big> means the execution of clients’
                    orders on the Company’s trading platform, where the Company
                    acts as an Agent to Clients’ transactions.
                  </p>
                  <p>
                    <big>“Financial Markets”</big> means international financial
                    markets in which financial instruments exchange rates are
                    determined in multi-party trade.
                  </p>
                  <p>
                    <big>“Financial Instruments”</big> means any of the
                    financial instruments offered by the Company and which are
                    defined as such under applicable Law or Regulation.
                    According to the Company’s license these are: <br />
                    <ul>
                      <li>Transferable Securities</li>
                      <li>Money Market instruments</li>
                      <li>Units in collective investment undertakings</li>
                      <li>
                        Options, futures, swaps, forward rate agreements and any
                        other derivative contracts relating to securities,
                        currencies, interest rates or yields, or other
                        derivatives instruments, financial indices or financial
                        measures which may be settled physically or in cash.
                      </li>
                      <li>
                        Options, futures, swaps, forward rate agreements and any
                        other derivative contracts relating to commodities that
                        must be settled in cash or may be settled in cash at the
                        option of one of the parties (otherwise, then by reason
                        of a default or other termination event).
                      </li>
                      <li>
                        Options, futures, swaps, and any other derivative
                        contract relating to commodities that can be physically
                        settled, if they are traded on a regulated market or/and
                        an MTF.
                      </li>
                      <li>
                        Options, futures, swaps, forwards and any other
                        derivative contracts relating to commodities, that can
                        be physically settled not otherwise mentioned in point
                        (vi) above and not being for commercial purposes, which
                        have the characteristics of other derivative financial
                        instruments, having regard to whether, inter alia, they
                        are cleared and settled through recognized clearing
                        houses or are subjected to regular margin calls.
                      </li>
                      <li>
                        Derivative instruments for the transfer of credit risk.
                      </li>
                      <li>Financial contracts for differences.</li>
                      <li>
                        Options, futures, swaps, forward rate agreements and any
                        other derivative contracts relating to climatic
                        variables, freight rates, emission allowances or
                        inflation rates or other official economic statistics
                        that must be settled in cash or may be settled in cash
                        at the option of one of the parties (otherwise than by
                        reason of a default or other termination event), as well
                        as any other derivative contract relating to assets,
                        rights, obligations, indices and measures not otherwise
                        mentioned in this Part, which have the characteristics
                        of other derivative financial instruments, having regard
                        to whether, inter alia, they are traded on a regulated
                        market or an MTF, are cleared and settled through
                        recognized clearing houses or are subject to regular
                        margin calls.
                      </li>
                    </ul>
                  </p>
                  <p>
                    <big>“MTF”</big> means the Multilateral Trading Facility.
                  </p>
                  <p>
                    <big>“Operating (Trading) Time of the Company”</big> means a
                    time within a business week, where the trading terminal of
                    the Company provides the opportunity of trading operations.
                    The Company reserves the right to alter this time as it sees
                    fits, upon notification to the Client.
                  </p>
                  <p>
                    <big>“Order”</big> means the request/instruction given by
                    the Client to the Company to Open or Close a Position in the
                    Client’s Account.
                  </p>
                  <p>
                    <big>“Services”</big> means the investment and ancillary
                    services which will be provided by the Company to the
                    clients and are governed by this Agreement as these are
                    described in Paragraph 5 of this Agreement.
                  </p>
                  <p>
                    <big>“Transaction”</big> means any type of transaction
                    subject to this Agreement effected in the Client’s trading
                    account(s) including but not limited to Deposit, Withdrawal,
                    Open Trades, Closed Trades and any other transaction of any
                    financial instrument. <br /> <br /> In this Agreement, all
                    the words that denote only the singular number will also
                    comprise the plural, wherever the above-mentioned
                    definitions apply and vice versa, and the words that denote
                    natural persons will comprise legal persons and vice versa.
                    Words denoting any gender include all the genders and
                    whenever reference is made to the terms “Paragraphs”,
                    “Sections” and “Appendices” it concerns paragraphs, sections
                    and appendices of this Agreement.
                    <br /> <br /> The headings of the Sections are only used for
                    facilitating the reference and they do not affect their
                    interpretation. References to any law or regulation will be
                    considered to comprise references to that law or regulation
                    as this can be altered or replaced from time to time or,
                    similarly, to be extended, re-enacted or amended.
                  </p>
                </li>
                <li>
                  <h2>PROVISION OF SERVICES</h2>
                  <p>
                    The following are the investment services which the Company
                    is authorized to provide in accordance with its LSP
                    authorization are governed by this Agreement:
                    <br />
                    <br />
                    It shall be clarified and noted that the Company deals on an
                    execution-only basis and does not advise on the merits of
                    specific transactions, or their taxation consequences.
                    <br />
                    <br />
                    You assume all responsibility in relation to any investment
                    strategy, transaction or investment, tax costs, and for any
                    consequences brought by from any transaction that you
                    perform and the Company shall not be held responsible nor
                    you shall rely on the Company for the above-mentioned.
                    <br />
                    <br />
                    Where the Company provides general trading recommendations,
                    market commentary or other information in its newsletters
                    and/or website:
                    <ul>
                      <li>
                        This is incidental to your dealing relationship with the
                        Company. It is provided solely to enable you to make own
                        investment decisions and does not result to investment
                        advice;
                      </li>
                      <li>
                        If the document contains a restriction on the person or
                        category of persons for whom that document is intended
                        or to whom it is distributed, you agree that you will
                        not pass it on to any such person or category of
                        persons;
                      </li>
                      <li>
                        The Company gives no representation, warranty or
                        guarantee as to the accuracy or completeness of such
                        information or as to the tax consequences of any
                        Transaction;
                      </li>
                      <li>
                        You accept that prior to its dispatch, the Company may
                        have made use of the information on which it is based.
                        The Company does not make representations as to the time
                        of receipt by you and cannot guarantee that you will
                        receive such information at the same time as other
                        clients. Any published research reports or
                        recommendations may appear in one or more screen
                        information service.
                      </li>
                    </ul>
                    <br />
                    The Company’s operating hours are from 00:01 GMT on Sunday
                    to 23:59 GMT on Friday, excluding holidays which will be
                    announced through the Company’s website. The Company
                    reserves the right to suspend or modify the operating hours
                    on its own discretion and on such event its website will be
                    updated without delay in order to inform you accordingly.
                  </p>
                </li>
                <li>
                  <h2>ACCOUNT OPENING INFORMATION AND REQUIREMENTS</h2>
                  <p>
                    When you register for the above-mentioned Services, the
                    Company will ask you to provide certain identifying
                    information. You acknowledge your willingness to share with
                    the Company certain private information which it uses for
                    confirming your identity. This information is collected in
                    line with our stringent verification procedures which are
                    used to deter international money laundering operations and
                    to ensure the security and safety of our customers’ trading
                    activity throughout and is subject to the Company’s “Privacy
                    Policy”. Each client is entitled to have one (1) account, in
                    case the client opens more than one (1) account the Company
                    will be entitled to transfer money or trades from one
                    account to the other even If such transfer will require
                    closing of any trades on the account from which the transfer
                    took place. <br /> <br />
                    If you are registering as a legal entity, you hereby declare
                    that you have the authority to bind that entity to this
                    Agreement. The Company will treat with care the information
                    you entrust to the Company, in accordance with the
                    disclosures it provides during the Registration process and
                    in its Privacy Policy. <br />
                    <br />
                    By registering with the Company, you confirm and agree that
                    you consent to the use of all or part of the information you
                    supply concerning your trading account, the transactions you
                    undertake through it and the interactions which you perform
                    with the Company on behalf of the Company. All interactions
                    you undertake with the Company will be stored by the Company
                    for the purposes of record keeping, as required by the Law
                    and may be employed by the Company in cases that disputes
                    arise between you and the Company or on request by IFSC or
                    any other competent authority.
                  </p>
                </li>
                <li>
                  <h2>GUARANTEES ON BEHALF OF THE CLIENT</h2>
                  <p>
                    You state, confirm and guarantee that any funds handed to
                    the Company for trading purposes, belong exclusively to you
                    and are free of any lien, charge, pledge or any other
                    burden. Further, whatever funds handed over to the Company
                    by you are not in any manner whatsoever directly or
                    indirectly proceeds of any illegal act or omission or
                    product of any criminal activity.
                    <br /> <br />
                    You act for yourself and not as a representative or a
                    trustee of any third person, unless you have produced, to
                    the satisfaction of the Company, a document and/or powers of
                    attorney enabling you to act as representative and/or
                    trustee of any third person.
                    <br /> <br />
                    You agree and understand that if the Company has such proofs
                    that are adequate to indicate that certain amounts, as
                    classified above, received by you are proceeds from illegal
                    acts or products of any criminal activity and/or belonging
                    to a third party, the Company reserves the right to refund
                    these amounts to the sender, either this being you or a
                    beneficial owner of a legal entity. Furthermore, you also
                    agree and understand that the Company may reverse any
                    Transactions performed in your Trading Account and may
                    terminate this agreement. The Company reserves the right to
                    take any legal action against you to cover and indemnify
                    itself upon such an event and may claim any damages caused
                    to the Company by you as a result of such an event.
                    <br /> <br />
                    You declare that you are over 18 (eighteen) years old, in
                    case of natural person, or that you have full legal
                    capacity, in case of legal person, to enter into this
                    Agreement.
                    <br /> <br />
                    You understand and accept that all transactions in relation
                    to trade in any of the Financial Instruments, will be
                    performed only through the Trading Platforms provided by the
                    Company and the Financial Instruments are not transferable
                    to any other Trading Platform whatsoever.
                    <br /> <br />
                    You guarantee the authenticity and validity of any document
                    handed over by the Client to the Company. You understand and
                    accept that the Company is unable to provide you with any
                    legal advice or assurances in respect of your use of the
                    Services and the Company makes no representations whatsoever
                    as to the legality of the Services in your jurisdiction.
                  </p>
                </li>
                <li>
                  <h2>ELECTRONIC TRADING</h2>
                  <p>
                    The Company will provide you with Access Codes for gaining
                    online access to the Company’s website and/or trading
                    platforms, thereby being able to place orders for any
                    Financial Instrument available from the Company and entering
                    into Transactions with the Company. Further, you will be
                    able to trade on the Company’s Trading Platforms with and
                    through the Company with the use of a personal computer,
                    smartphone or any other similar device that is connected to
                    the internet. In this respect, you understand that the
                    Company can, at its absolute discretion, terminate your
                    access to the Company’s systems in order to protect both the
                    Company’s and your interests and to ensure the systems’
                    effectiveness and efficiency.
                    <br /> <br />
                    You agree that you will keep the Access Codes in a safe
                    place chosen in your discretion and will not reveal them to
                    any other person. You will not proceed and avoid proceeding
                    in any action that could probably allow the irregular or
                    unauthorized access or use of the Trading Platforms.
                    <br /> <br />
                    You agree not to attempt to abuse the Trading Platforms in
                    an attempt to make illegal profits or to attempt to profit
                    by taking advantage of the server latency, or applying
                    practices such as price manipulation, lag trading, time
                    manipulation.
                    <br /> <br />
                    You are responsible for all acts or omissions that occur
                    within the Website by using your registration information.
                    If you believe that someone has used or is using your
                    registration information, user name or password to access
                    any Service without your authorization, you should notify
                    the Company immediately. You must make every effort possible
                    to keep the Access Codes secret and known only to you and
                    you will be liable of any Orders received by the Company
                    through your trading Account under your Access Codes.
                    Further, any Orders received by the Company will be
                    considered as received from you.
                    <br /> <br />
                    You are responsible to monitor your Account and to notify
                    the Company immediately if it comes to your attention that
                    your Access Codes are lost or being used by an unauthorized
                    third party. Also, you agree to immediately notify the
                    Company should you become aware of any failure by you to
                    receive a message indicating the reception and/or execution
                    of an Order, the accurate confirmation of an execution, any
                    information for your Account balances, orders or
                    transactions history as well as in case you receive
                    confirmation of an Order that you did not place.
                    <br /> <br />
                    You acknowledge that the Company may choose not to act based
                    on Orders transmitted to the Company using electronic means
                    other than those Orders transmitted to the Company using the
                    predetermined electronic means such as the Trading Platform,
                    and the Company shall have no liability towards the Client
                    for failing to take action based on such Orders.
                    <br /> <br />
                    You agree to use software programs developed by third
                    parties including but not limited to the generality of those
                    mentioned above, browser software that supports Data
                    Security Protocols compatible with protocols used by the
                    Company. Moreover, you agree to follow the access procedure
                    (Login) of the Company that supports such protocols.
                    <br /> <br />
                    The Company will not be held responsible in the event of an
                    unauthorized access from third persons to information
                    including, but not limited to, electronic addresses and/or
                    personal data, through the exchange of these data between
                    you and the Company and/or any other party using the
                    Internet or other network or electronic mean available.
                    <br /> <br />
                    The Company is not responsible for any power cuts or
                    failures that prevent the use of the system and/or the
                    Trading Platform and cannot be responsible for not
                    fulfilling
                    <br /> <br />
                    any obligations under this Agreement because of network
                    connection or electricity failures.
                    <br /> <br />
                    The Company further reserves the right to ask you to give
                    instructions regarding your transactions by other means that
                    it deems appropriate.
                    <br /> <br />
                    The Company shall have no liability for any potential damage
                    you may suffer due to transmission errors, technical faults,
                    malfunctions, illegal intervention in network equipment,
                    network overloads, viruses, system errors, delays in
                    execution, malicious blocking of access by third parties,
                    internet malfunctions, interruptions or other deficiencies
                    on the part of internet service providers. You acknowledge
                    that access to electronic systems/trading platforms may be
                    limited or unavailable due to such system errors, and that
                    the Company reserves its right upon notifying you to suspend
                    access to electronic systems/trading platforms for this
                    reason.
                    <br /> <br />
                    The Company has the right, unilaterally and with immediate
                    effect, to suspend or withdraw permanently your ability to
                    use any Electronic Service, or any part thereof, without
                    notice, where the Company consider it necessary or advisable
                    to do so, for example due to your non-compliance with the
                    Applicable Regulations, breach of any provisions of this
                    Agreement, on the occurrence of an Event of Default (as
                    defined in Section 25 hereof), network problems, failure of
                    power supply, for maintenance, or to protect you when there
                    has been a breach of security. In addition, the use of a
                    service may be terminated automatically, upon the
                    termination (for whatever reason) of any license granted to
                    the Company which relates to any particular service; or this
                    Agreement. The use of a service may be terminated
                    immediately if the service is withdrawn by any market or the
                    Company is required to withdraw the facility to comply with
                    Applicable Regulations.
                  </p>
                </li>
                <li>
                  <h2>FINANCIAL INFORMATION</h2>
                  <p>
                    Through one or more of its Services, the Company makes
                    available to you a wide range of financial information that
                    is generated internally, from agents, suppliers or partners
                    (“Third-Party Providers”). This includes, but is not limited
                    to financial market data, quotes and news, analyst opinions
                    and research reports, graphs and data (“Financial
                    Information”).
                    <br /> <br />
                    The financial information provided on the Company’s website
                    is not intentional investment advice. The Company and its
                    Third-Party Providers do not warrant the accuracy,
                    timeliness, and completeness or correct sequencing of the
                    financial information, or results of your use of this
                    financial information. The financial information may
                    promptly become unreliable for various reasons, including,
                    for instance, changes in market conditions or economic
                    circumstances.
                    <br /> <br />
                    It is your responsibility to verify the reliability of the
                    information on the Company’s website and its suitability for
                    your needs. We exclude all liability for any claim, damage
                    or loss of any kind caused by information contained in the
                    Company’s website or referenced by the Company’s website.
                    <br /> <br />
                    Trading period of all accounts are 12 months. Any account
                    which must be closed before this stipulated timeframe must
                    have to pay a fee.
                  </p>
                </li>
                <li>
                  <h2>ORDERS – INSTRUCTIONS AND BASIS OF DEALINGS</h2>
                  <p>
                    Reception and Execution of Transactions You can place an
                    Order via the Company’s trading platform. Once your
                    instructions or Orders are received by the Company, they
                    cannot be revoked, except with the Company’s written consent
                    which may be given at the Company’s sole and absolute
                    discretion.
                    <br /> <br />
                    You place your market request at the prices you see on your
                    terminal/platform and the execution process is initiated.
                    Due to the high volatility of the market as well as the
                    internet connectivity between the customer terminal and the
                    server, the prices requested by the customer and the current
                    market price may change, during this process.
                    <br /> <br />
                    You have the right to use a Power of Attorney to authorize a
                    third person (representative) to act on behalf of you in all
                    business relationships with the Company. The Power of
                    Attorney should be provided to the Company accompanied by
                    all identification documents of the representative. If there
                    is no expiry date, the Power of Attorney will be considered
                    valid until the written termination by you.
                    <br /> <br />
                    The Company uses its reasonable endeavors to execute any
                    order promptly, but in accepting your orders the Company
                    does not represents or warrants that it will be possible to
                    execute such order or that execution will be possible
                    according to your instructions. In case the Company
                    encounters any material difficulty in carrying out an order
                    on your behalf, for example in case the market is closed
                    and/or due to illiquidity in financial instruments and other
                    market conditions, the Company shall promptly notify you.
                    <br /> <br />
                    Orders can be placed, executed, changed or removed only
                    within the operating (trading) time and shall remain
                    effective through the next trading session. Your Order shall
                    be valid and in accordance with the type and time of the
                    given Order, as specified. If the time of validity of the
                    Order is not specified, it shall be valid for an indefinite
                    period.
                    <br /> <br />
                    The Company may require you to limit the number of open
                    positions which you may have with the Company at any time
                    and the Company may in its sole discretion close out any one
                    or more Transactions to ensure that such position limits are
                    maintained. The position limits will be notified in advance
                    to you either through the Company’s website or trading
                    platforms.
                    <br /> <br />
                    If any underlying asset of the Financial Instrument becomes
                    subject to a specific risk resulting in a predicted fall in
                    value, the Company reserves the right to withdraw the
                    specific financial instrument from the Company’s trading
                    platform.
                    <br /> <br />
                    The Company has the right to set control limits in relation
                    to your orders at its own and absolute discretion. Such
                    limits may be amended, removed or added and may include
                    without limitation:
                    <ul>
                      <li>Controls over maximum order amount and size;</li>
                      <li>
                        controls over the electronic systems and/or trading
                        platforms to verify for example your identity during the
                        receipt of the order; or
                      </li>
                      <li>
                        any other limits, parameters or controls which the
                        Company may deem required to be implemented in
                        accordance with Applicable Regulations.
                      </li>
                    </ul>
                    <br /> <br />
                    There may be restrictions on the number of Transactions that
                    you can enter into on any one day and in terms of the total
                    value of those Transactions. You acknowledge that some
                    markets place restrictions on the types of orders that can
                    be directly transmitted to their electronic trading systems.
                    These types of orders are sometimes described as synthetic
                    orders. The transmission of synthetic orders to the market
                    is dependent upon the accurate and timely receipt of prices
                    or quotes from the relevant market or market data provider.
                    You acknowledge that a market may cancel a synthetic order
                    when upgrading its systems, trading screens may drop the
                    record of such an order, and you enter such orders at your
                    own risk. You shall refer to the Company’s website for
                    details of the restrictions/limits imposed on Transactions
                    performed through its electronic systems and/or trading
                    platforms.
                  </p>
                  <h4>Execution Policy</h4>
                  <p>
                    The Company takes all reasonable steps to obtain the best
                    possible results for its Clients. The Company’s Best
                    Execution Policy sets out a general overview on how orders
                    are executed as well as several other factors that can
                    affect the execution of a financial instrument. You
                    acknowledge and accept that you have read and understood the
                    “Best Execution Policy”, which was provided to you during
                    the registration process and which is uploaded on the
                    Company’s website.
                    <br /> <br />
                    You agree that the Company may execute an order on your
                    behalf outside a regulated market and/or an MTF and that the
                    Company’s Order Execution Policy will not apply when you
                    place a specific instruction. The execution venue to all
                    clients’ orders will be a duly authorized market maker.
                  </p>
                </li>
                <li>
                  <h2> CONFIRMATIONS</h2>
                  <p>
                    Confirmations for all Transactions that have been executed
                    in your Trading Account on a trading day will be available
                    via your online Account through the Trading Platform as soon
                    as the transaction is executed. It is your responsibility to
                    notify the Company if any confirmations are incorrect.
                    Confirmations shall, in the absence of manifest error, be
                    conclusive and binding on you, unless you place your
                    objection in writing within 7 (seven) Business Days. You may
                    request to receive the Account statement monthly or
                    quarterly via email, by providing such a request to the
                    Company, but the Company is not obliged to provide you with
                    the paper Account statement. The Account statement may be
                    provided at the expense of the client. <br />
                    <br />
                    You have the right to authorize a third person to give
                    instructions and/or Orders to the Company or to handle any
                    other matters related to this Agreement, provided that you
                    have notified the Company in writing that such a right shall
                    be exercised by a third party and that this person is
                    approved by the Company and fulfils all of Company’s
                    conditions to allow this. <br />
                    <br />
                    In case that you have authorized a third person as mentioned
                    above, it is agreed that if you wish to terminate the
                    authorization, it is your full responsibility to notify the
                    Company of such decision in writing. In any other case, the
                    Company will assume that the authorization is still ongoing
                    and will continue accepting instructions and/or Orders given
                    by the authorized person on behalf of you. <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>PRICING</h2>
                  <p>
                    The Company will quote prices at which it is prepared to
                    deal with you. Same where:
                    <br />
                    <br />
                    <ul>
                      <li>
                        The Company exercises any of its rights to close out a
                        Transaction; or
                      </li>
                      <li>A Transaction closes automatically,</li>
                    </ul>
                    It is your responsibility to decide whether or not you wish
                    to deal at the price quoted by the Company. The Company’s
                    prices are determined by the Company in the manner set out
                    in the enclosed terms.
                    <br />
                    <br />
                    Each price shall be effective and may be used in a dealing
                    instruction prior to the earlier of its expiration time and
                    the time, if any, at which it is otherwise withdrawn by the
                    Company. A price may not be used in a dealing instruction
                    after such time. Each price shall be available for use in a
                    dealing instruction for a transaction with a principal
                    amount not to exceed a maximum determined by the Company.
                    You acknowledge that these prices and maximum amounts may
                    differ from prices and maximum amounts provided to other
                    customers of the Company and may be withdrawn or changed
                    without notice. The Company may in its sole discretion and
                    without prior notice to you immediately cease the provision
                    of prices in some or all currency pairs and for some or all
                    value dates at any time.
                    <br />
                    <br />
                    When the Company quotes a price, market conditions may move
                    between Company’s sending of the quote and the time your
                    order is executed. Such movement may be either in your favor
                    or against it. Prices that may be quoted and/or traded upon,
                    from time to time, by other market makers or third parties
                    shall not apply to trades between the Company and you.
                  </p>
                </li>
                <li>
                  <h2> REFUSAL TO EXECUTE ORDERS</h2>
                  <p>
                    The Company has the right, at any time and for any reason
                    and without giving any notice and/or explanation, to refuse,
                    at its discretion, to execute any Order, including without
                    limitation in the following cases:
                    <br />
                    <br />
                    <ul>
                      <li>
                        If you fail to provide to the Company with any documents
                        requested from you either for client identification
                        purposes or for any other reason.
                      </li>
                      <li>
                        If the Company suspects or has concerns that the
                        submitted documents may be false or fake.
                      </li>
                      <li>
                        If you do not have the required funds deposited in your
                        Account.
                      </li>
                      <li>
                        If the Company is informed that your credit or debit
                        card (or any other payment method used) has been lost or
                        stolen.
                      </li>
                      <li>
                        If the Company considers that there is a chargeback
                        risk.
                      </li>
                      <li>
                        If the Company has adequate reasons to suspect that the
                        execution of an Order is part of an attempt to
                        manipulate the market, trading on inside information,
                        relates to money laundering activities or if it can
                        potentially affect in any manner the reliability,
                        efficiency, or smooth operation of the Trading Platform.
                      </li>
                      <li>
                        If you do not have sufficient available funds deposited
                        with the Company or in your bank account to pay the
                        purchase price of an Order along with the respective
                        fees and commissions necessary to carry out the
                        transaction in the Trading Platform. In the event that
                        the Company does refuse to execute an order, such
                        refusal will not affect any obligation which you may
                        have towards the Company or any right which the Company
                        may have against you or your assets.
                      </li>
                      <li>
                        If the order is a result of the use of inside
                        confidential information (insider trading).
                      </li>
                    </ul>
                    It is understood that any refusal by the Company to execute
                    any order shall not affect any obligation which you may have
                    towards the Company or any right which the Company may have
                    against you or your assets. <br />
                    <br />
                    You declare that you shall not knowingly give any Order or
                    instruction to the Company that might instigate the Company
                    to take action in accordance with the Paragraph above.
                  </p>
                </li>
                <li>
                  <h2>CANCELLATION OF TRANSACTIONS</h2>
                  <p>
                    The Company has the right to cancel a transaction if it has
                    adequate reasons/evidence to believe that one of the
                    following has incurred:
                    <br />
                    <br />
                    <ul>
                      <li>Fraud/illegal actions led to the transaction</li>
                      <li>
                        Orders placed on prices that have been displayed due to
                        system errors or system malfunctions either of those of
                        the Company or of its third-party service providers
                      </li>
                      <li>The Company has not acted upon your instructions</li>
                      <li>
                        The Transaction has been performed in violation to the
                        provisions of this Agreement
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h2>SETTLEMENT OF TRANSACTIONS</h2>
                  <p>
                    The Company shall proceed to a settlement of all
                    transactions upon execution of such transactions.
                    Acquisition of a financial contract is completed when the
                    financial contract has been customized, the premium (or the
                    margin, as the case may be) has been calculated and payment
                    has been verified. You agree to be fully and personally
                    liable for the due settlement of every transaction entered
                    into under your account with the company.
                  </p>
                </li>
                <li>
                  <h2>BONUS AND PROMOTIONS POLICY</h2>
                  <p>
                    The Company offers several attractive Bonus programs to its
                    new and existing Clients, who have activated their trading
                    account. Bonuses and/ or financial awards and/ or promotions
                    (“Bonuses”) rewarded to Clients are part of the Company’s
                    promotions program. These Bonuses have limited time offers
                    and their conditions can be subject to change upon written
                    notice given to the Clients on the modifications to
                    substantial parts of the conditions. Prior to accepting any
                    Bonuses offer, Clients will be given the opportunity to
                    consider the terms and conditions associated with each Bonus
                    scheme in order to fully understand how the scheme works as
                    well as its T & C and provide their consent in regard to the
                    adoption of any alterations, in case the client will not
                    provide the Company with any feedback or advice from him/her
                    to the contrary, within the period of seven (7) days, the
                    Company shall consider that the client consent and/or
                    accepts the content of the amendment <br />
                    <br />
                    The Clients are not required to accept any Bonuses offered
                    by the Company; all Bonuses are optional. The Clients may
                    choose not to accept a Bonus. In these circumstances, the
                    Clients will not be bound to the terms relating to the
                    Bonus. By accepting the Bonuses offered, the Clients will be
                    bound by the guidelines, provisions and terms of the Bonus
                    programs, provided that they have fully understood and
                    agreed with the terms and conditions of this agreement.
                    <br />
                    <br />
                    The different Bonus programs and promotions are given at
                    random events and will be added to the clients trading
                    account in one of the following forms: <br />
                    <br />
                    <ul>
                      <li>
                        Pending bonus – bonus will be added to the traders
                        ‘pending bonus’ box and will be added to the actual
                        account balance once certain amounts of trade have been
                        carried out. The bonus may not be traded unless the
                        specific volume is met according to the specific Bonus
                        scheme entered into.
                      </li>
                    </ul>
                    To track the trader’s volume and locate the bonus and its
                    relevant status, the trader is hereby invited to check the
                    Reports section on the main page once logged in. To do so,
                    the trader may click the “Reports” button, in the upper
                    right hand corner of the page, then in the “transactions”
                    tab, in the volume will appear in addition to the bonus
                    reports. The trader has the ability to view the bonus
                    report, which tracks the volume on a day-to-day basis.
                    <br />
                    <br />
                    The required volume to be reached in order to withdraw a
                    bonus is calculated by using the bonus amount multiplied
                    times a rate between 40-50. The trading volume is a
                    calculation of the trader’s trades, regardless of the
                    outcome. In a sense, it is a monitor of the trader’s trading
                    activity.
                    <br />
                    <br />
                    For example: you are granted a pending welcome bonus of 25%
                    on your deposit. If you deposited $300, your pending bonus
                    is $75. The volume requirement is 40 times $75, equaling
                    $3,000. Once you trade a volume of $3,000, the $75 will be
                    released into your balance and available for any given
                    needs.
                    <br />
                    <br />
                    It is here mentioned that the acceptance and reception of
                    the bonus might come as overwhelming. Due to the extent of
                    the bonus that could, sometimes, exceedingly improve the
                    state of the trader’s account. In some instances, traders
                    tend to misuse their bonus’ good fortune and spend it all at
                    once. Therefore, we ask the trader to pay attention to the
                    account’s status and urge the trader to invest the bonus
                    amount with caution and responsibility.
                    <br />
                    <br />
                    All of the Company’s additions to the bonus terms are final.
                    <br />
                    <br />
                    The Clients are hereby invited to utilize the Company’s
                    bonus in a rightful and justified manner, according to the
                    terms and conditions of this agreement. The Company reserves
                    the right to cancel and even close the trader’s account if
                    it suspects any form of abuse or wrong doing of the bonus by
                    the trader which include reasons as stated in section 23.
                    <br />
                    <br />
                    The company is to single-mindedly conclude and decide upon
                    whether clients have abused and/or misused its platform
                    and/or its bonuses.
                    <br />
                    <br />
                    All of the bonuses and favoring benefits should be utilized
                    in accordance with the offer’s predefined period.
                    <br />
                    <br />
                    In the event abuse and/or misuse of the bonus terms and, The
                    Company is entitled to revoke the bonus. Should this be the
                    case, the company’s decisions shall be final. Any change of
                    the bonus terms and conditions, is reserved for the company
                    to be revoked, and later displayed on its website.
                    <br />
                    <br />
                    The acceptance to the reception of the bonus and its
                    addition to the trader’s account bind the trader to the
                    bonus’s terms and conditions here above and hereinafter.
                    <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>CLIENTS FUNDS</h2>
                  <p>
                    Funds belonging to you that will be used for trading
                    purposes will be kept in an account with any bank or
                    financial institution used to accept funds which the Company
                    will specify from time to time and will be held in the
                    Company’s name. It is understood that the Company may hold
                    funds on behalf of you in any bank. The legal and regulatory
                    regime applying to any such bank might be different from the
                    legal and regulatory regime in Belize and in the event of
                    the insolvency or any other analogous events in relation to
                    that bank, your funds may be treated differently from the
                    treatment which would apply if the funds were held with a
                    bank in an account in Belize. The Company will not be liable
                    for the insolvency, acts or omissions of any third party
                    referred to in this clause. <br />
                    <br />
                    Information regarding your deposits and withdrawals should
                    be sent and received only by the Company’s official email
                    address, any other means of communication are not accepted
                    by the Company and shall be considered as fraudulent
                    communication that does not meet the Company’s standards.{" "}
                    <br />
                    <br />
                    Should the client reply to any communication apart from the
                    Company’s official email address, the Company shall not be
                    liable for any losses, damages arising out of negligence
                    incurred or suffered by the client. <br />
                    <br />
                    It is commonly understood that any amount payable by the
                    Company to you, shall be paid directly to you to a bank
                    account the beneficial owner of which is you. Fund transfer
                    requests are processed by the Company within the time period
                    specified on the Company’s official website and the time
                    needed for crediting into your personal account will depend
                    on your bank account provider. <br />
                    <br />
                    The Company retains a right of set off and may, at its
                    discretion, from time to time and without your
                    authorization, set-off any amounts held on behalf and/or to
                    the credit of you against your obligation to the Company.
                    Unless otherwise agreed in writing by the Company and you,
                    this Agreement shall not give rise to rights of credit
                    facilities. <br />
                    <br />
                    You have the right to withdraw the funds which are not used
                    for margin covering, free from any obligations from your
                    Account without closing the said Account. <br />
                    <br />
                    The Company reserves the right to decline a withdrawal
                    request if the request is not in accordance with certain
                    conditions mentioned in this Agreement or delay the
                    processing of the request if not satisfied on full
                    documentation provided. <br />
                    <br />
                    It is within your terms that any incurring bank fees will be
                    paid by you in case of funds withdrawals from your trading
                    account to your designated bank account. You are fully
                    responsible for the payment details that you provided to the
                    Company and the Company accepts no responsibility if you
                    have provided false or inaccurate bank details. <br />
                    <br />
                    You agree that any amounts sent by you in the Company’s bank
                    accounts, will be deposited to your trading account at the
                    value date of the payment received and net of any
                    charges/fees charged by the Bank Account providers or any
                    other intermediary involved in such transaction process. In
                    order for the Company to accept any deposits by you, the
                    identification of the sender must by verified and ensure
                    that the person depositing the funds is you. If these
                    conditions are not met, the Company reserves the right to
                    refund the net amount deposited via the method used by the
                    depositor. <br />
                    <br />
                    The Company reserves the right to decline a withdrawal with
                    specific payment method and to suggest another payment
                    method where you need to complete a new withdrawal request.
                    In the event that the Company is not fully satisfied with
                    the documentation provided in relation to a withdrawal
                    request, the Company can request for additional
                    documentation and if the request is not satisfied, the
                    Company can reverse the withdrawal request and deposit the
                    funds back to your trading account. <br />
                    <br />
                    When a withdrawal request is submitted, the Company may take
                    up to 5 (five) business days to process the request. When
                    your application is approved please wait for maximum 21
                    (twenty-one) additional days before seeing your funds in
                    your account. – in cases of credit card refunds delays that
                    we not in our power we are liable to investigate and insure
                    all measures are taken to find a quick resolution. <br />
                    <br />
                    In the event that any amount received in the Bank Accounts
                    is reversed by the Bank Account provider at any time and for
                    any reason, the Company will immediately reverse the
                    affected deposit from your trading account and further
                    reserves the right to reverse any other type of transactions
                    effected after the date of the affected deposit. It is
                    understood that these actions may result in a negative
                    balance in all or any of your trading account(s). <br />
                    <br />
                    You agree to waive any of your rights to receive any
                    interest earned in the funds held in the Bank Account where
                    your funds are kept. <br />
                    <br />
                    <br />
                  </p>
                  <h2 className="">
                    Account Withdrawal Restrictions
                  </h2>
                  <br />
                  <h2 className="">Account Withdrawal Limits</h2>
                  <p>
                    a. Each account holder is permitted a specific number of
                    withdrawals based on their current plan.
                    <br />
                    b. Exceeding the allowable number of consecutive withdrawals
                    will trigger temporary restrictions on further withdrawals.
                    <br />
                    <br />
                  </p>
                  <h2 className="">Options to Lift Restrictions:</h2>
                  <p>
                    a. If four consecutive withdrawals are made, a temporary
                    restriction will automatically be applied to the account.
                    <br />
                    b. Restricted accounts will not be eligible for further
                    withdrawals until the conditions outlined in Section 3 are
                    fulfilled.
                    <br />
                    <br />
                  </p>
                  <h2 className="">Restriction Activation:</h2>
                  <p>
                    Account holders can regain full access to withdrawal
                    functionality by taking one of the following actions: a.
                    Plan Upgrade: Users may upgrade to a higher-tier plan that
                    offers increased withdrawal flexibility. Assistance with the
                    upgrade process can be obtained by contacting our support
                    team.
                    <br />
                    b. Additional Deposits: Depositing additional funds into the
                    account will reactivate withdrawal privileges under the
                    current plan. b. Restricted accounts will not be eligible
                    for further withdrawals until the conditions outlined in
                    Section 3 are fulfilled.
                    <br />
                    <br />
                  </p>
                  <h2 className="">
                    Account Suspension for Inactivity:
                  </h2>
                  <p>
                    Failure to meet the outlined conditions will result in a
                    continued suspension of withdrawal privileges until the
                    restriction is resolved.
                    <br />
                    <br />
                  </p>
                  <h2 className="">Support and Queries:</h2>
                  <p>
                    For assistance or clarification regarding these terms and
                    conditions, account holders are encouraged to contact
                    Swizzfunds support directly. Our team is committed to
                    providing guidance and support as needed.
                    <br />
                    <br />
                  </p>

                  <h2>MINIMUM WITHDRAWAL AMOUNTS</h2>
                  <p>
                    When you withdraw funds from your Swizzfunds account, a
                    minimum withdraw amount of $30.00 is required. <br />
                    <br />
                    The commissions of wire withdrawals will be placed onto the
                    beneficiary. <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>DORMANT ACCOUNT PROCEDURE</h2>
                  <p>
                    You acknowledge and confirm that any trading account held
                    with the Company in which you have not placed a trade and/or
                    made a deposit for a period greater than 60 (sixty) calendar
                    days, shall be classified by the Company as an Inactive
                    Account. You further acknowledge and confirm that such
                    Inactive Accounts will be subject to 50 (fifty) handling
                    fee, the exact fee will be based on the currency
                    denomination of the Client Account. You further agree that
                    any Inactive Accounts, having zero balance/equity, shall be
                    considered as Dormant Accounts. For the reactivation of an
                    Inactive and/or Dormant Account you must contact the
                    Company. The Inactive and/or Dormant Account will then be
                    reactivated subject to, if required, up-to-date client
                    identification documentation to be provided to the Company.”
                    <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>COSTS AND CHARGES</h2>
                  <p>
                    You shall pay our charges as agreed with you from time to
                    time, any fees or other charges imposed by a clearing
                    organization and interest on any amount due to us at the
                    rates then charged by us. Any alteration to charges will be
                    notified to you before the time of the change.
                    <br />
                    <br />
                    The exact fee will be based on the currency denomination of
                    the Client Account. Relevant fees and charges are as such;
                    <br />
                    <br />
                    Profit Clearance: Fees for trading on the Company’s platform
                    are subjected to a clearance fee which varies in accordance
                    with 10% (percent) of the total profit been withdrawn. A
                    comprehensive list of the clearance fees is shown on the
                    Website.
                    <br />
                    <br />
                    Account Closure Charge
                    <br />
                    <br />
                    A charge of 20% would be paid if a client decides to close
                    his/her account before the said period of 1 year from the
                    day the investment was made.
                    <br />
                    <br />
                  </p>
                  <h4>Inducements</h4>
                  <p>
                    The Company, further to the fees and charges paid or
                    provided to or by the Client or other person on behalf of
                    the Client, may pay and/or received fees/commission to/from
                    third-parties, provided that these benefits are designed to
                    enhanced the quality of the offered service to the Client
                    and not impair compliance with the Company’s duty to act in
                    the best interests of the Client. The Company may pay
                    fee/commission to Affiliates, Introducing Brokers, referring
                    agents or other third parties on a written agreement. This
                    fee/commission is related to a fixed amount per referred
                    client. The Company has the obligations and undertakes to
                    disclose to the client, upon his request, further details
                    regarding the amount of fees/commission or any other
                    remuneration paid by the Company to Affiliates, Introducing
                    Brokers, referring agents, or other third parties. The
                    Company may also receive fees/commission as well as other
                    remuneration from third parties based on a written
                    agreement. The Company receives fees/commission from the
                    counterparty through which it executes transactions. The
                    fee/commission is related to the frequency/volume of
                    transactions executed through the counterparty. The Company
                    has the obligation and undertakes to disclose to the client,
                    upon his request, further details regarding the amount of
                    fees/commission or any other remuneration received by the
                    Company from third parties.
                  </p>
                </li>
                <li>
                  <h2>COMPANY LIABILITY AND INDEMNITY</h2>
                  <p>
                    It shall be noted that the Company and any entity related to
                    the Company, will perform transactions in good faith and
                    with proper due diligence but shall not be held liable for
                    any omission, deliberate omission or fraud by any person,
                    firm or company from whom the Company receives instructions
                    for the execution of the Orders and/or from which
                    transactions are carried out on behalf of you, including
                    where this would be the result of negligence, deliberate
                    omission or fraud on the part of the Company.
                    <br />
                    <br />
                    The Company will not be held liable for any lost
                    opportunities by you that have resulted in either losses or
                    reduction (or increase) in the value of your Financial
                    Instruments.
                    <br />
                    <br />
                    In case the Company incurs any claims, losses, damage,
                    liability or expenses that arise throughout the provision of
                    the Services and all related operations that are performed
                    as a mean for these Services to be performed to you as these
                    are agreed in this Agreement or in relation to the potential
                    disposal of your Financial Instruments, you are fully liable
                    for these losses/expenses/liabilities/claims whereas the
                    Company bears absolutely no responsibility and it is
                    therefore your responsibility to indemnify the Company for
                    the aforementioned.
                    <br />
                    <br />
                    The Company shall not be held liable for any damage caused
                    to you as a result of any omission, negligence, deliberate
                    omission or fraud by the bank where the Company’s bank
                    account is maintained.
                    <br />
                    <br />
                    The Company shall not be held liable for the loss of
                    Financial Instruments and funds of you in cases where your
                    assets are kept by a third party such as a bank, or for an
                    act, which was carried out based on inaccurate information
                    at its disposal prior to being informed by you, of any
                    change in the said information.
                    <br />
                    <br />
                    The Company makes every effort to ensure that the Banks and
                    institutions to which your funds and/or Financial
                    Instruments are deposited are of good standing and
                    reputation. However, the Company shall not be held liable in
                    the event of a loss resulting from deterioration of the
                    financial standing of a bank or institution, or for an event
                    such as a liquidation, receivership or any other event that
                    causes the Bank or institution of a failure and therefore
                    leads to a loss of all or part of the funds deposited.
                    <br />
                    <br />
                    Without prejudice to any other terms of this Agreement, the
                    Company will not be liable for:
                    <br />
                    <br />
                    <ul>
                      <li>Systems errors (Company’s or service providers)</li>
                      <li>Delays</li>
                      <li>Viruses</li>
                      <li>Unauthorized use</li>
                      <li>
                        For any act taken by or on the instruction of a Market,
                        clearing house or regulatory body.
                      </li>
                    </ul>
                    The Company shall not be liable to you for any partial or
                    non-performance of its obligations hereunder by reason of
                    any cause beyond reasonable control of the Company,
                    including without limitation any breakdown, delay,
                    malfunction or failure of transmission, communication or
                    computer facilities, industrial action, act of terrorism,
                    act of God, acts and regulations of any governmental or
                    supra national bodies or authorities or the failure by the
                    relevant intermediate broker or agent, agent or principal of
                    the Company’s custodian, sub-custodian, dealer, Market,
                    clearing house or regulatory or self-regulatory
                    organization, for any reason, to perform its obligations.
                    <br />
                    <br />
                    Neither the Company nor its directors, officers, employees,
                    or agents shall be liable for any losses, damages, costs or
                    expenses, whether arising out of negligence, breach of
                    contract, misrepresentation or otherwise, incurred or
                    suffered by you under this Agreement (including any
                    Transaction or where the Company has declined to enter into
                    a proposed Transaction). In no circumstance, shall the
                    Company has liability for losses suffered by you or any
                    third party for any special or consequential damage, loss of
                    profits, loss of goodwill or loss of business opportunity
                    arising under or in connection with this Agreement, whether
                    arising out of negligence, breach of contract,
                    misrepresentation or otherwise.
                    <br />
                    <br />
                    You shall pay to the Company such sums as it may from time
                    to time require in or towards satisfaction of any debit
                    balance on any of your accounts with the Company and, on a
                    full indemnity basis, any losses, liabilities, costs or
                    expenses (including legal fees), taxes, imposts and levies
                    which the Company may incur or be subjected to with respect
                    to any of your accounts or any Transaction or any matching
                    Transaction on a Market or with an intermediate broker or as
                    a result of any misrepresentation by you or any violation by
                    you of your obligations under this Agreement (including any
                    Transaction) or by the enforcement of the Company’s rights.
                    <br />
                    <br />
                    You acknowledge that you have not relied on or been induced
                    to enter into this Agreement by a representation other than
                    those expressly set out in this Agreement. The Company will
                    not be liable to you for a representation that is not set
                    out in this Agreement and that is not fraudulent.
                    <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>DURATION OF THE AGREEMENT AND AMENDMENT THEREOF</h2>
                  <p>
                    This Agreement shall be valid for an indefinite time period
                    until its termination from either the Company or you or
                    both.
                    <br />
                    <br />
                    The Agreement may be amended on the following cases:
                    <br />
                    <br />
                    <ul>
                      <li>
                        Unilaterally by the Company if such amendment is
                        necessary following an amendment of the law or if IFSC
                        or any other regulatory authority issues decisions or
                        binding directives which affect the Agreement. In any
                        such case, the Company shall notify the Client of the
                        said amendment either in writing or per electronic mail
                        or through its main webpage and your consent shall not
                        be required for any such amendment
                      </li>
                      <li>
                        In cases where the amendment of the Agreement is not
                        required by any change in the legal framework, the
                        Company shall notify you of the relevant amendment
                        through its main webpage and/or via email. If objections
                        arise, you may terminate the Agreement within 7 (seven)
                        days from the notification by sending a registered
                        letter and on the condition that all pending
                        transactions on behalf of you shall be completed. Upon
                        expiry of the above deadline without the Client having
                        raised any objection, it shall be considered that you
                        consent and/or accepts the content of the amendment.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h2>
                    IMPROPER OR ABUSIVE TRADING AND/ OR UNAUTHORISED ACTIVITIES
                  </h2>
                  <p>
                    The Company’s objective is to provide the most efficient
                    trading liquidity available in the form of streaming,
                    tradable prices for most of the financial instruments we
                    offer on the trading platform. As a result of the highly
                    automated nature of the delivery of these streaming,
                    tradable prices, Clients acknowledge and accept that price
                    misquotations are likely to occur from time to time.
                    <br />
                    <br />
                    Should the Clients execute trading strategies with the
                    objective of exploiting such misquotation(s) or act in bad
                    faith (commonly known as ‘sniping’) the Company shall
                    consider this as unacceptable behaviour. Should the Company
                    determine, at its sole discretion and in good faith, that
                    any of the Clients and/ or any of his/ her representative
                    trading on his/ her behalf is taking advantage, benefitting,
                    attempting to take advantage or to benefit of such
                    misquotation(s) or that any Client is committing any other
                    improper or abusive trading act such as for example: <br />
                    <br />
                    <ul>
                      <li>
                        orders placed based on manipulated prices as a result of
                        system errors or system malfunctions
                      </li>
                      <li>
                        arbitrage trading on prices offered by our platforms as
                        a result of systems errors; and/or
                      </li>
                      <li>fraud/illegal actions that led to the transaction</li>
                      <li>
                        coordinated transactions by related parties in order to
                        take advantage of systems errors and delays on systems
                        updates
                      </li>
                    </ul>
                    Clients agree and acknowledge that they will not use our
                    products and services for any Unauthorized Activity.
                    “Unauthorized Activity” means any act, including but not
                    limited to money laundering, arbitrage, or trading on off
                    market quotes or any other activity involving the purchase
                    of the Financial Products on one market for the immediate
                    resale on another market in order to profit from a price
                    discrepancy or price error.
                    <br />
                    <br />
                    In such events and where we reasonably believe that any
                    transaction involves an unauthorized and/ or abusive
                    activity, the Company will have and retain the right to:
                    <br />
                    <br />
                    <ul>
                      <li>
                        adjust the offered payouts available to such Clients;
                        and/or
                      </li>
                      <li>
                        restrict Clients’ access to streaming, instantly
                        tradable quotes, including providing manual quotation
                        only; and/or
                      </li>
                      <li>
                        obtain from Clients’ accounts any historic trading
                        profits that they have gained through such abuse of
                        liquidity as determined by the Company at any time
                        during our trading relationship; and/or
                      </li>
                      <li>reject an order or to cancel a trade; and/or</li>
                      <li>cancel or reserve any transaction; and/o</li>
                      <li>
                        terminate our trading relationship with immediate effect
                      </li>
                    </ul>
                    The Company has, and will continue to develop any tools
                    necessary to identify fraudulent and/ or unlawful access and
                    use of our Online Trading Facility.
                  </p>
                  <h4>Prohibited and Unlawful Trading Techniques</h4>
                  <p>
                    The concept of using trading strategies aimed at exploiting
                    errors in prices and/or concluding trades at off-market
                    prices and/or by taking advantages of internet delays,
                    commonly known as ‘arbitrage’, ‘sniping’ or ‘scalping’
                    (hereinafter collectively referred to as “Arbitrage”),
                    cannot exist in an OTC market where the Client is buying or
                    selling directly from the Principal.
                    <br />
                    <br />
                    The Company reserves the right, not to permit the abusive
                    exploitation of Arbitrage on its Online Trading Facility
                    and/or in connection with its services <br />
                    <br />
                  </p>
                  <h4>Changes in Market Conditions</h4>
                  <p>
                    The Company shall have no obligation to contact you to
                    advice upon appropriate action in light of changes in Market
                    Conditions or otherwise. Clients agree and acknowledge that
                    trading in Over-The-Counter Market Contract for Differences
                    – CFDs is highly speculative and volatile and that,
                    following execution of any transaction, Clients are solely
                    responsible for making and maintaining contact with us and
                    for monitoring open positions and ensuring that any further
                    instructions are given on a timely basis.
                  </p>
                </li>
                <li>
                  <h2>CFD TRADING TERMS</h2>
                  <h4>Overnight Interest</h4>
                  <p>
                    A daily financing charge may apply to each Forex, CFDs, open
                    position at the closing of The Company’s trading day as
                    regards that Forex, CFD. If such financing charge is
                    applicable, it will either be requested to be paid by
                    Customer directly to the Company it will be paid by the
                    Company to Customer, depending on the type of FX/CFD and the
                    nature of the position Customer holds. The method of
                    calculation of the financing charge varies according to the
                    type of FX/CFD to which it applies. The financing charge
                    will be credited or debited (as appropriate) to Customer’s
                    account on the next trading day following the day to which
                    it relates.
                    <br />
                    <br />
                    The Company reserves the right to change the method of
                    calculating the financing charge, the financing rates and/or
                    the types of FX/CFDs to which the financing charge applies.
                    For certain types of FX/CFDs, a commission is payable by
                    Customer to open and close FX/CFD positions. Such commission
                    payable will be debited from Customer’s account at the same
                    time as the Company opens or closes the relevant FX/CFD.
                    Changes in our swap interest rates and calculations shall be
                    at our own discretion and without notice. Clients need to
                    always check information for the current rates charged.
                    Information concerning the swap rates for each Instrument is
                    displayed in the on the Trading Platform. Rates may change
                    quickly due to market conditions (changes in interest rates,
                    volatility, liquidity etc.) and due to various risk related
                    matters that are at the firm’s sole discretion.
                    <br />
                    <br />
                    Any open FX/CFD transaction held by Customer at the end of
                    the trading day as determined by the Company or over the
                    weekend, shall automatically be rolled over to the next
                    business day so as to avoid an automatic close and physical
                    settlement of the transaction. Customer acknowledges that
                    when rolling over such transactions to the next business
                    day, a premium may be either added or subtracted from
                    Customer’s account with respect to such transaction.
                    Information concerning the swap rates for each Instrument is
                    displayed in the “details” link for each specific Instrument
                    on the Trading Platform
                    <br />
                    <br />
                    On Wednesday around 00:00 GMT, overnight rollover fees are
                    multiplied by three (x3) in order to compensate for the
                    upcoming weekend. <br />
                    <br />
                  </p>
                  <h4>Expiry Transactions and rollover</h4>
                  <p>
                    Trades in CFDs linked to the market price of a certain base
                    asset, including the market price of future contracts. A few
                    days prior to the expiration date of the base asset to which
                    the CFD linked, the base asset shall be replaced with
                    another asset, and the quotation of the CFD shall change
                    accordingly.
                    <br />
                    <br />
                    For certain Instruments on our platform that are based on
                    Futures Contracts, we may, in our sole and absolute
                    discretion, set an Expiry Date and time for a specific
                    Instrument. Information concerning the expiration date for
                    each Instrument is displayed in the on the Trading Platform.
                    <br />
                    <br />
                    In the event we set an Expiry Date for a specific
                    Instrument, it will be displayed on the Trading Platform in
                    the details link for each specific Instrument. You
                    acknowledge that it is your responsibility to make yourself
                    aware of the Expiry Date and time.
                    <br />
                    <br />
                    If you do not close an open Transaction with respect to an
                    Instrument which has an Expiry Date, prior to such Expiry
                    Date, the Transaction shall automatically close upon the
                    Expiry Date. The Transaction shall close at a price which
                    will be the last price quoted on the Trading Platform
                    immediately prior to the applicable Expiry Date and time.
                    <br />
                    <br />
                  </p>
                  <h4>Islamic Accounts</h4>
                  <p>
                    In the event that Customer, due to its observance of Islamic
                    religious beliefs cannot receive or pay interest, Customer
                    may elect to designate, in the manner provided by the
                    Company, its trading account to be an Islamic Account, which
                    is not charged with, or entitled to, overnight interest
                    and/or rollovers.
                    <br />
                    <br />
                    The customer hereby confirms and/or accepts and/or declares
                    that a request to render their account as Islamic shall only
                    be made due to the said Islamic religious beliefs and for no
                    other reason whatsoever. The Company reserves the right to
                    refuse accepting the request of a customer to designate
                    their account as an Islamic Account, upon its sole and
                    absolute discretion which shall be conclusive and
                    undisputable upon the customer.
                    <br />
                    <br />
                    In the event that Customer designates its account as an
                    Islamic account, Customer may not keep transactions in such
                    account open for more than 14 days and may not otherwise
                    abuse such benefit.
                    <br />
                    <br />
                    The Company may add commission upon each and every one of
                    the trades executed on the Islamic Account; and/or reserves
                    the right to cancel the aforesaid benefit at any time and
                    take any action necessary in The Company’s absolute
                    discretion due to abuse of this benefit. Such actions may
                    include, without limitation, the designation of the Islamic
                    Account as a regular account and retroactively effecting
                    required adjustments (e.g., setting off amounts from the
                    account equal to amounts paid by the Company as interest),
                    restrict and/or prohibit the customer from hedging their
                    positions, cancellation of transactions, and adjustment of
                    account balances.
                    <br />
                    <br />
                  </p>
                  <h4>Types of Orders:</h4>
                  <p>
                    Orders may be placed as market orders to buy or sell as soon
                    as possible at the price obtainable in the market, or on
                    selected products as limit stop orders to trade when the
                    price reaches a predefined level. Limit orders to buy and
                    stop orders to sell must be placed below the current market
                    price, and limit orders to sell and stop orders to buy must
                    be placed above the current market price. If the bid price
                    for sell orders or ask price for buy orders is reached, the
                    order will be filled as soon as possible at the price
                    obtainable in the market. Limit and stop orders are executed
                    consistent with “The Company’s Order Execution Policy” and
                    are not guaranteed executable at the specified price or
                    amount, unless explicitly stated by the Company for the
                    specific order.
                  </p>
                  <h4>Execution Practices in the Financial Instruments</h4>
                  <h4>Slippage</h4>
                  <p>
                    You are warned that Slippage may occur when trading in
                    Financial Instruments. This is the situation when at the
                    time that an Order is presented for execution, the specific
                    price showed to the Client may not be available; therefore,
                    the Order will be executed close to or a number of pips away
                    from the Client’s requested price. So, Slippage is the
                    difference between the expected price of an Order, and the
                    price the Order is actually executed at. If the execution
                    price is better than the price requested by the Client, this
                    is referred to as positive slippage. If the executed price
                    is worse than the price requested by the Client, this is
                    referred to as negative slippage. Please be advised that
                    Slippage is a normal element when trading in financial
                    instruments. Slippage more often occurs during periods of
                    illiquidity or higher volatility (for example due to news
                    announcements, economic events and market openings and other
                    factors) making an Order at a specific price impossible to
                    execute. your Orders may not be executed at declared prices.
                    Slippage may appear in all types of accounts we offer. It is
                    noted that Slippage can occur also during Stop loss orders,
                    Limit orders, and other types of Orders. We do not guarantee
                    the execution of your Pending Orders at the price specified.
                    However, we confirm that your Order will be executed at the
                    next best available market price from the price you have
                    specified under your pending Order.
                  </p>
                  <h4>General terms of Use</h4>
                  <p>
                    The Client hereby acknowledges and agrees that the Company
                    may, in its sole discretion, add, remove or suspend from the
                    Platform, any Financial Instrument, on any type of
                    Underlying Asset or Market, from time to time in the event
                    of a stock transformation event (for example as the result
                    of a takeover, share consolidation/split, merger, spinoff,
                    nationalisation, de-listing, etc.) or if no Client Positions
                    are held in a particular Financial Instrument at that time.
                    Additionally, in the event we are no longer able to continue
                    to provide an instrument in its existing format, we reserve
                    the right, in our sole discretion, to amend the content or
                    terms of an instrument including its expiry date, trading
                    hours or any other parameters in the instrument details tab
                    by providing you with notice.
                  </p>
                  <h4>Maintaining Account status</h4>
                  <p>
                    In order to maintain a certain account status, you must
                    accumulate a minimum monthly sum of trader points that are
                    required for that account status. You can simply return to
                    any account status by fulfilling the monthly trader points
                    requirement for that account level as long as you meet the
                    minimum deposit criteria or by making minimum required
                    deposits that will automatically upgrade you to the next
                    account level. The monthly trader points requirement and
                    accumulated trader points status can be viewed under your
                    account menu.
                    <br />
                    <br />
                    Benefits – Takeovers and Transformations (including events
                    such as share consolidations/splits, mergers, takeovers,
                    spinoffs, MBOs, de-listings, etc.). Depending on the
                    circumstances of each event, our policy is to close out any
                    customer open Positions at the market price immediately
                    prior to the event taking place. As a result of such event,
                    if any Instrument becomes subject to an adjustment as the
                    result of a takeover or transformation action we shall
                    determine the appropriate adjustment to be made to the
                    contract price or contract quantity as we consider
                    appropriate to account for the diluting or concentrating
                    effect of the action. Such adjustment shall represent the
                    economic equivalent of the rights and obligations of us and
                    you immediately prior to the action.
                    <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>TERMINATION</h2>
                  <p>
                    You have the right to terminate the Agreement by giving the
                    Company at least 7 (seven) days written notice, specifying
                    the date of termination in such, on the condition that in
                    the case of such termination, all Client’s Open Positions
                    shall be closed by the date of termination without
                    derogating all the provision aforementioned therein,
                    including charges, fees and penalties.
                    <br />
                    <br />
                    The Company may terminate the Agreement by giving you a 7
                    (seven) days written notice, specifying the date of
                    termination therein.
                    <br />
                    <br />
                    The Company may terminate the Agreement immediately without
                    giving any notice in the following cases:
                    <br />
                    <br />
                    <ul>
                      <li>Death of the Client</li>
                      <li>
                        In case of a decision of bankruptcy or winding up of you
                        is taken through a meeting or through the submission of
                        an application for the aforementioned
                      </li>
                      <li>
                        Termination is required by any competent regulatory
                        authority or body
                      </li>
                      <li>
                        You violate any provision of the Agreement and in the
                        Company’s opinion the Agreement cannot be implemented
                      </li>
                      <li>
                        You violate any law or regulation to which you are
                        subject, including but not limited to, laws and
                        regulations relating to exchange control and
                        registration requirements
                      </li>
                      <li>
                        You involve the Company directly or indirectly in any
                        type of fraud
                      </li>
                      <li>
                        An Event of Default as defined in Section 24 of this
                        Agreement occurs
                      </li>
                    </ul>
                    The termination of the Agreement shall not in any case
                    affect the rights which have arisen, existing commitments or
                    any contractual provision which was intended to remain in
                    force after the termination and in the case of termination,
                    you shall pay:
                    <br />
                    <br />
                    <ul>
                      <li>
                        Any pending fee of the Company and any other amount
                        payable to the Company
                      </li>
                      <li>
                        Any charge and additional expenses incurred or to be
                        incurred by the Company as a result of the termination
                        of the Agreement
                      </li>
                      <li>
                        Any damages which arose during the arrangement or
                        settlement of pending obligations
                      </li>
                    </ul>
                    In case of breach by you of this agreement the Company
                    reserves the right to reverse all previous transactions
                    which place the Company’s interests and/or all or any its
                    clients’ interests at risk before terminating the Agreement.
                  </p>
                </li>
                <li>
                  <h2>EVENTS OF DEFAULT AND RIGHTS ON DEFAULT</h2>
                  <p>
                    The following shall constitute “Events of Default” on the
                    occurrence of which the Company shall be authorized to
                    exercise its rights in accordance with Paragraph below:
                    <ul>
                      <li>
                        The failure of you to observe or perform any other
                        provision of this Agreement and such failure continues
                        for one Business Day after notice of non-performance has
                        been provided to you by the Company.
                      </li>
                      <li>
                        The commencement by a third party of procedures seeking
                        your bankruptcy (in case of natural person) or your
                        insolvency or other similar voluntary case of
                        liquidation (in case of legal person) under the
                        applicable laws or any other similar proceedings which
                        are analogous to those pre-mentioned in relation to you.
                      </li>
                      <li>
                        You take advantage of delays occurred in the prices and
                        places Orders at outdated prices, trades at off-market
                        prices and/or outside operating hours and performs any
                        other action that constitutes improper trading.
                      </li>
                      <li>
                        You die or become of unsound mind (if natural person).
                      </li>
                      <li>
                        Any representation or warranty made or given or deemed
                        made or given by you under this Agreement proves to have
                        been false or misleading in any material respect as at
                        the time it was made or given or deemed made or given.
                      </li>
                      <li>
                        Any other situation where the Company reasonably
                        considers it necessary or desirable for its own
                        protection or any action is taken or event occurs which
                        the Company considers that might have a material adverse
                        effect upon your ability to perform any of its
                        obligations under this Agreement.
                      </li>
                    </ul>
                    On the occurrence of an Event of Default the Company shall
                    be entitled to take, in its absolute discretion, any of the
                    following actions at any time and without giving prior
                    notice to you:
                    <ul>
                      <li>
                        instead of returning to your investments equivalent to
                        those credited to your account, to pay you the fair
                        market value of such investments at the time the Company
                        exercise such right, and/or
                      </li>
                      <li>
                        to sell such of your investments as are in the Company’s
                        possession or in the possession of any nominee or third
                        party appointed under or pursuant to this Agreement, in
                        each case as the Company may in its absolute discretion
                        select or and upon such terms as the Company may in its
                        absolute discretion think fit (without being responsible
                        for any loss or diminution in price) in order to realize
                        funds sufficient to cover any amount due by you
                        hereunder, and/or
                      </li>
                      <li>
                        to close out, replace or reverse any Transaction, buy,
                        sell, borrow or lend or enter into any other Transaction
                        or take, or refrain from taking, such other action at
                        such time or times and in such manner as, at the
                        Company’s sole discretion, the Company consider
                        necessary or appropriate to cover, reduce or eliminate
                        its loss or liability under or in respect of any of your
                        contracts, positions or commitments, and/or
                      </li>
                      <li>
                        to treat any or all Transactions then outstanding as
                        having been repudiated by the Client, in which event the
                        Company’s obligations under such Transaction or
                        Transactions shall thereupon be cancelled and
                        terminated.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h2>ACKNOWLEDGEMENT OF RISKS</h2>
                  <p>
                    It shall be noted that due to market conditions and
                    fluctuations, the value of Financial Instruments may
                    increase or decrease, or may even be reduced to zero.
                    Regardless of the information the Company may provide to
                    you, you agree and acknowledges the possibility of these
                    cases occurring.
                    <br />
                    <br />
                    You are aware and acknowledge that there is a great risk of
                    incurring losses and damages as a result of the investment
                    activity (purchase and/or sale of Financial Instruments)
                    through the Company and the Company’s Trading Platform and
                    accepts that you are willing to undertake this risk upon
                    entering into this business relationship.
                    <br />
                    <br />
                    You declare that you have read, understood and unreservedly
                    accepted the following:
                    <br />
                    <br />
                    <ul>
                      <li>
                        Information of the previous performance of a Financial
                        Instrument does not guarantee its current and/or future
                        performance. Historical data are not and should not be
                        considered as reflective of the future returns of any
                        Financial Instrument.
                      </li>
                      <li>
                        In cases of Financial Instruments traded in currencies
                        other than the currency of your country of residence,
                        you are running the risk of a change in the exchange
                        rate that will decrease the value and price of the
                        Financial Instruments and in effect their performance.
                      </li>
                      <li>
                        You must be aware that you are running the risk of
                        losing all of your funds invested, and must only
                        purchase Financial Instruments if you are willing to do
                        so, if happened. Further, all expenses and commissions
                        incurred will be payable from you.
                      </li>
                    </ul>
                    The maximum loss that may be incurred by any customer is the
                    amount of money paid by them to the Company including
                    rolling fees for day trade deals.
                    <br />
                    <br />
                    Each financial contract purchased by a customer via the
                    Company’s website is an individual Agreement made between
                    that customer and the Company, and is not transferable,
                    negotiable or assignable to or with any third party.
                    <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>CONFIDENTIAL INFORMATION</h2>
                  <p>
                    The Company does not have any obligation to disclose to you
                    any information or take into consideration any information
                    either when making any decision or when it proceeds to any
                    act on behalf of you, unless otherwise agreed and stated in
                    this Agreement and where this is imposed by the relevant
                    Laws and Regulations and directives in force.
                    <br />
                    <br />
                    The Company will never disclose any private or otherwise
                    confidential information in regards to our clients and
                    former clients to third parties without the express, written
                    consent of our clients, except in such specific cases in
                    which disclosure is a requirement under law, or is otherwise
                    necessary in order to perform verification analysis on the
                    client’s identity for the purposes of safeguarding their
                    account and securing their personal information.
                    <br />
                    <br />
                    The Company will handle all of your personal data according
                    to the relevant Laws and Regulations for the protection of
                    Personal Data.
                    <br />
                    <br />
                    By accepting this Agreement, you consent that you have read
                    and accepted the terms of the “PRIVACY POLICY” that the
                    Company has adopted as this policy is mentioned in detail in
                    the Company’s main website public and available to all
                    Clients.
                    <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>NOTICES</h2>
                  <p>
                    Unless the contrary is specifically provided, any notice,
                    instructions, authorizations, requests or other
                    communications to be given to the Company by you under the
                    Agreement shall be in writing and shall be sent to the
                    Company’s mailing address as indicated in the Company’s
                    website or to any other address which the Company may from
                    time to time specify to you for this purpose and shall take
                    effect only when actually received by the Company, provided
                    they do not violate and are not contrary to any term of this
                    Agreement.
                    <br />
                    <br />
                    The Company reserves the right to specify any other way of
                    communication with you.
                    <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>CONFILICT OF INTEREST</h2>
                  <p>
                    Under Applicable Regulations the Company is required to have
                    arrangements in place to manage conflicts of interest
                    between the Company and its clients and between other
                    clients. The Company will make all reasonable efforts to
                    avoid conflicts of interest when they cannot be avoided the
                    Company shall ensure that you are treated fairly and at the
                    highest level of integrity and that their interests are
                    protected at all times.
                    <br />
                    <br />
                    You acknowledge and accept that you have read and accepted
                    the “Conflicts of Interest Policy”, which was provided to
                    you during the registration process and is uploaded on the
                    Company’s official website.
                    <br />
                    <br />
                  </p>
                </li>
                <li>
                  <h2>GENERAL PROVISIONS</h2>
                  <p>
                    You acknowledge that no representations were made to you by
                    or on behalf of the Company which have in any way incited or
                    persuaded you to enter into the Agreement.
                    <br />
                    <br />
                    In case any provision of the Agreement is or becomes, at any
                    time, illegal void or non-enforceable in any respect, in
                    accordance with a law and/or regulation of any jurisdiction,
                    the legality, validity or enforceability of the remaining
                    provisions of the Agreement or the legality, validity or
                    enforceability of this provision in accordance with the law
                    and/or regulation of any other jurisdiction, shall not be
                    affected.
                    <br />
                    <br />
                    All Transactions on behalf of you shall be subject to the
                    laws which govern the establishment and operation, the
                    regulations, arrangements, directives, circulars and customs
                    (jointly hereinafter called the “Laws and Regulations”) of
                    IFSC and any other authorities which govern the operation of
                    the Investment Firms (as defined in such Laws and
                    Regulations), as they are amended or modified from time to
                    time. The Company shall be entitled to take or omit to take
                    any measures which it considers desirable in view of
                    compliance with the Laws and Regulations in force at the
                    time. Any such measures as may be taken and all the Laws and
                    Regulations in force shall be binding for you.
                    <br />
                    <br />
                    You shall take all reasonably necessary measures (including,
                    without prejudice to the generality of the above, the
                    execution of all necessary documents) so that the Company
                    may duly fulfil its obligations under the Agreement.
                    <br />
                    <br />
                    The location of detailed information regarding the execution
                    and conditions for the investment transactions in Financial
                    Instruments conducted by the Company and other information
                    regarding the activity of the Company are accessible and
                    addressed to any natural persons and legal entities at the
                    Company’s website over the Internet.
                    <br />
                    <br />
                    The provisions of this document expressed in the English
                    language, prevail over the provisions of any other
                    translation of the same document, in whichever language the
                    potential translation might be.
                    <br />
                    <br />
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Whyus />
      <Footer />
    </div>
  );
};

export default TermsCondi;
