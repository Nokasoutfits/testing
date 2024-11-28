import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import menu from "../../assets/menu.svg";
import Loading from "../../components/Loading";

export const EditDeposit = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState("");
  const [amount, setAmount] = useState("");
  const [investment, setInvestment] = useState("");
  const [plan, setPlan] = useState("");
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false)
  const [slider, setSlider] = useState(false)

  
  const handleMenu =()=>{
    setSlider(!slider)
  }

  useEffect(() => {
    axios
      .get(`/api/admin/deposit/${userId}`)
      .then((res) => {
        const depositData = res.data.deposit;
        if (depositData) {
          setUser(depositData.user);
          setAmount(depositData.amount);
          setInvestment(depositData.investment);
          setPlan(depositData.plan);
          setWallet(depositData.wallet);
          setStatus(depositData.status);
        }
      })
      .catch((err) => console.log(err, " fetching account"));
  }, [userId]);

  const handelProductSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const data = { user, amount, investment, plan, wallet, status };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .put(`/api/admin/deposit/edit/${userId}`, data, config)
      .then((res) => {
    setLoading(false)
        navigate("/admin-deposit");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='grid grid-cols-6 h-full  gap-6 w-full'>
      <HelmetProvider>
    <Helmet>
      <title>Admin Edit Deposit - SwizzFunds</title>
    </Helmet>
    </HelmetProvider>
      {loading && <Loading/>}
      
          <div className={!slider ? "hidden lg:block " : " lg:col-span-1 col-span-3" }>
            <Sidebar close={handleMenu}/>
          </div>
          <div className={!slider ? "col-span-6 lg:col-span-5 " : " col-span-3 lg:col-span-5"}>
            <div className={``}>
              <div className='flex justify-between items-center gap-6 '>
                <div className={!slider ? "pl-4 lg:hidden" : "p-0 lg:hidden"}>
                <img src={menu} alt="menu" onClick={handleMenu} className=" lg:w-[40px] w-[30px] cursor-pointer"/>
                </div>
                  <div className='w-full'>
                    <Navbar page={'Admin'}/>
                  </div>
              </div>
              <div className='px-4 lg:px-10'>
              <div
      
    >

        <div className="w-full ml-[2rem] pb-4 md:pb-[3rem] mt-[3rem] ">
          <div className="relative w-full mx-auto ">
            <div className="mb-3 w-[100px] text-center">
              <Link
                className=" flex items-center justify-center border-2 border-blue-400 rounded-lg"
                to="/admin/dashboard/withdraw"
              >
                <MdArrowBack /> Go Back
              </Link>
            </div>
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-[90%] bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-gray-800">
                <h3 className="text-xl text-white font-semibold">Edit</h3>
              </div>
              {/*body*/}

              <div className="relative p-6 flex-auto">
                <form className="w-full" onSubmit={handelProductSubmit}>
                  <div className="grid w-full">
                    <div className="mt-2">
                      <label htmlFor="user" className="text-md px-1 py-4 text-gray-800">
                        User
                      </label>
                      <input
                        onChange={(e) => setUser(e.target.value)}
                        name="user"
                        value={user}
                        type="text"
                        id="user"
                        className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="amount" className="text-md px-1 py-4 text-gray-800">
                        Amount
                      </label>
                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        name="amount"
                        value={amount}
                        type="text"
                        id="amount"
                        className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="investment" className="text-lg px-1 py-4 text-gray-800">
                        Investment
                      </label>
                      <input
                        onChange={(e) => setInvestment(e.target.value)}
                        name="investment"
                        value={investment}
                        type="text"
                        id="investment"
                        className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                      />
                    </div>

                    {/* numbers */}
                    <div className="md:flex justify-between mt-2">
                      <div>
                        <label htmlFor="plans" className="text-md px-1 py-4 text-gray-800">
                          Plans
                        </label>
                        <input
                          onChange={(e) => setPlan(e.target.value)}
                          name="plan"
                          value={plan}
                          type="text"
                          id="plan"
                          className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="wallet" className="text-md px-1 py-4 text-gray-800">
                          Walet
                        </label>
                        <input
                          onChange={(e) => setWallet(e.target.value)}
                          name="wallet"
                          value={wallet}
                          type="text"
                          id="name"
                          className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                        />
                      </div>
                      <div className="">
                        <div>

                      <label htmlFor="status" className="text-lg px-1 py-4 text-gray-800">
                      Status
                      </label>
                      <input
                        name="status"
                        value={status}
                        type="text"
                        id="status"
                        className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                      />
                        </div>
                    </div>
                    </div>
                        <div className="mt-2">
                        <button type="button" className="mt-2 bg-green-800 p-4" onClick={()=>{
                            setStatus("Approved")
                        }}>
                            Approve
                        </button>
                        <button type="button" className="mt-2 bg-red-800 p-4" onClick={()=>{
                            setStatus("Declined")
                        }}>
                            Decline
                        </button>
                        
                        </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-light text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-blue-400 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

    </div>
              </div>
                

            <p className='pb-4 text-sm xl:text-lg lg:mt-[200px] text-secondary text-center mt-6'>2023 SwizzFunds. All Rights Reserved.</p>

            </div>
          </div>
      </div>
    
  );
};

export const EditWithdraw = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState("");
  const [amount, setAmount] = useState("");
  const [investment, setInvestment] = useState("");
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [slider, setSlider] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    axios
      .get(`/api/admin/withdraw/${userId}`)
      .then((res) => {
        const withdrawData = res.data.deposit;
        if (withdrawData) {
          setUser(withdrawData.user);
          setAmount(withdrawData.withdrawAmount);
          setInvestment(withdrawData.walletAddress);
          setWallet(withdrawData.wallet);
          setStatus(withdrawData.status);
        }
      })
      .catch((err) => console.log(err, " fetching account"));
  }, [userId]);

  const handelProductSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const data = { user, amount, investment, wallet, status };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .put(`/api/admin/withdraw/edit/${userId}`, data, config)
      .then((res) => {
        setLoading(false)
        navigate("/admin-withdraw");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMenu =()=>{
    setSlider(!slider)
  }

  return (
    <div>
      <HelmetProvider>
    <Helmet>
      <title>Admin Edit Withdraw - SwizzFunds</title>
    </Helmet>
    </HelmetProvider>
      {loading && <Loading/>}
      <div className='grid grid-cols-6 h-full  gap-6 w-full'>
          <div className={!slider ? "hidden lg:block " : " lg:col-span-1 col-span-3" }>
            <Sidebar close={handleMenu}/>
          </div>
          <div className={!slider ? "col-span-6 lg:col-span-5 " : " col-span-3 lg:col-span-5"}>
            <div className={``}>
              <div className='flex justify-between items-center gap-6 '>
                <div className={!slider ? "pl-4 lg:hidden" : "p-0 lg:hidden"}>
                <img src={menu} alt="menu" onClick={handleMenu} className=" lg:w-[40px] w-[30px] cursor-pointer"/>
                </div>
                  <div className='w-full'>
                    <Navbar page={'Admin'}/>
                  </div>
              </div>
              <div className='px-4 lg:px-10'>
              <div className="w-full ml-[2rem] pb-4 md:pb-[3rem] mt-[3rem] ">
            <div className="relative w-full mx-auto ">
              <div className="mb-3 w-[100px] text-center">
                <Link
                  className=" flex items-center justify-center border-2 border-blue-400 rounded-lg"
                  to="/admin/dashboard/deposit"
                >
                  <MdArrowBack /> Go Back
                </Link>
              </div>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-[90%] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-gray-800">
                  <h3 className="text-xl text-white font-semibold">Edit</h3>
                </div>
                {/*body*/}
  
                <div className="relative p-6 flex-auto">
                  <form className="w-full" onSubmit={handelProductSubmit}>
                    <div className="grid w-full">
                      <div className="mt-2">
                        <label htmlFor="user" className="text-md px-1 py-4 text-gray-800">
                          User
                        </label>
                        <input
                          onChange={(e) => setUser(e.target.value)}
                          name="user"
                          value={user}
                          type="text"
                          id="user"
                          className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="amount" className="text-md px-1 py-4 text-gray-800">
                          Amount
                        </label>
                        <input
                          onChange={(e) => setAmount(e.target.value)}
                          name="amount"
                          value={amount}
                          type="number"
                          id="amount"
                          className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                        />
                      </div>
                      <div className="mt-2">
                        <label htmlFor="investment" className="text-lg px-1 py-4 text-gray-800">
                          Investment
                        </label>
                        <input
                          onChange={(e) => setInvestment(e.target.value)}
                          name="investment"
                          value={investment}
                          type="text"
                          id="investment"
                          className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                        />
                      </div>
                      <div className="mt-2 md:flex">
                          <div>
  
                        <label htmlFor="status" className="text-lg px-1 py-4 text-gray-800">
                        Status
                        </label>
                        <input
                          name="status"
                          value={status}
                          type="text"
                          id="status"
                          className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                        />
                          </div>
                          <div className="mt-2">
                          <button type="button" className="mt-2 bg-green-800 p-4" onClick={()=>{
                              setStatus("Approved")
                          }}>
                              Approve
                          </button>
                          <button type="button" className="mt-2 bg-red-800 p-4" onClick={()=>{
                              setStatus("Declined")
                          }}>
                              Decline
                          </button>
                          
                          </div>
                      </div>
  
                      {/* numbers */}
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-light text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-blue-400 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
              </div>
                

            <p className='pb-4 text-sm xl:text-lg lg:mt-[200px] text-secondary text-center mt-6'>2023 SwizzFunds. All Rights Reserved.</p>

            </div>
          </div>
      </div>
    </div>
    
  );
};

