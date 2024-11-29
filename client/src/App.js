import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Investments from "./pages/Investments";
import Contact from "./pages/Contact";
import Gold from "./pages/Gold";
import Crypto from "./pages/Crypto";
import RealEstate from "./pages/RealEstate";
import Forex from "./pages/Forex";
import FAQ from "./pages/FAQ";
import TermsCondi from "./pages/TermsCondi";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import Stock from "./pages/Stock";
import CryptoPlan from "./pages/Accounts/CryptoPlan";
import ScrollToTop from "./components/ScrolToTop";
import ForexPlane from "./pages/Accounts/ForexPlane";
import StockPlan from "./pages/Accounts/SrockPlan";
import EstatePlane from "./pages/Accounts/EstatePlane";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./userDashboard/pages/Dashboard";
import Deposit from "./userDashboard/pages/Deposit";
import Withdraw from "./userDashboard/pages/Withdraw";
import Hisetory from "./userDashboard/pages/Hisetory";
import { AdminRoute, UserRoute } from "./pages/UserRoute";
import AdminDashboard from "./AdminDashboard/pages/AdminDashboard";
import AdminDeposit from "./AdminDashboard/pages/AdminDeposit";
import AdminWidthdraw from "./AdminDashboard/pages/AdminWidthdraw";
import { EditDeposit, EditWithdraw } from "./AdminDashboard/pages/EditDeposit";
import AdminUserEdit from "./AdminDashboard/pages/AdminUserEdit";
import VerifyEmail from "./pages/VerifyEmail";
import { ForgotPassword, ResetPassword } from "./pages/ResetPassword";
import GoldPlan from "./pages/Accounts/GoldPlan";

function App() {
  return (
    <div className="text-white ">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accounts" element={<Investments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gold-Investment" element={<Gold />} />
        <Route path="/gold-plan" element={<GoldPlan />} />
        <Route path="/stock-investment" element={<Stock />} />
        <Route path="/stock-plan" element={<StockPlan />} />
        <Route path="/crypto-Investment" element={<Crypto />} />
        <Route path="/crypto-plan" element={<CryptoPlan />} />
        <Route path="/real-estate-Investment" element={<RealEstate />} />
        <Route path="/real-estate-plan" element={<EstatePlane />} />
        <Route path="/forex-Investment" element={<Forex />} />
        <Route path="/forex-plan" element={<ForexPlane />} />
        {/* <Route path="/loans" element={<Loan />} /> */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/terms-and-condition" element={<TermsCondi />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/verify/:id/:token" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />


        {/* User Dashboard */}
        <Route element={<UserRoute />}>
          <Route path="/user-dashboard" element={<Dashboard />} />
          <Route path="/user-deposit" element={<Deposit />} />
          <Route path="/user-withdraw" element={<Withdraw />} />
          <Route path="/user-history" element={<Hisetory />} />
          </Route>
        {/* User Dashboard */}

         {/* AdminDashboard Route */}
         <Route element={<AdminRoute />}>
           <Route path="/admin-deposit" element={<AdminDeposit />} />
           <Route path="/admin-dashboard" element={<AdminDashboard />} />
           <Route path="/admin-withdraw" element={<AdminWidthdraw />} />
           <Route path="/admin/dashboard/deposit/edit/:userId" element={<EditDeposit />} />
             <Route path="/admin/dashboard/withdraw/edit/:userId" element={<EditWithdraw />} />
             <Route path="/admin/dashboard/user/edit/:userId" element={<AdminUserEdit />} />

          </Route>
          {/* AdminDashboard Route ended*/}
      </Routes>
    </div>
  );
}

export default App;
