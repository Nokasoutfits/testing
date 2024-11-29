import {HelmetProvider, Helmet} from "react-helmet-async"
import About from "../components/About";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Steps from "../components/Steps";
// import Testimonial from "../components/Testimonial";
import Whyus from "../components/Whyus";
import { styles } from "../styles";

const Home = () => {


  return (
    <div className="overflow-x-hidden">
      <HelmetProvider>
      <Helmet>
        <title>HomePage - SwizzFunds</title>
        <meta name="description" content="SwizzFunds is a regulated broker and financial services provider for
            traders across the world. We are also one of the fastest growing
            online brokers with an asset index of over 1,000 stocks, forex,
            commodities and indices available as CFDs." />
        <script src="https://crypto.com/price/static/widget/index.js"></script>

      </Helmet>
      </HelmetProvider>
      <div className="bg-hero-pattern w-full bg-no-repeat bg-center bg-cover">
      
      <Navbar/>
      <Hero/>
      </div>

      <About/>
      <Services/>
      <Steps/>
      <Account/>
      <div className={`${styles.paddingX} mt-[2rem] max-w-2xl mx-auto`}>
      <div
        id="crypto-widget-CoinList"
        data-transparent="true"
        data-design="classic"
        data-coin-ids="1,166,136,382,1120,20,1694,29,440"></div>
      </div>
      <Whyus/>
      {/* <Testimonial/> */}
      <Footer/>
      <div
  id="crypto-widget-CoinMarquee"
  className="fixed bottom-[-45px] border w-full overflow-hidden right-0 left-0"
  style={{zIndex:"50"}}
  data-theme="dark"
  data-design="classic"
  data-coin-ids="1,166,136,382,1120,20,440,29"></div>
    </div>
  );
};

export default Home;
