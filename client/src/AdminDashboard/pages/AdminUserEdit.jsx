import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import menu from "../../assets/menu.svg";
import Loading from '../../components/Loading';

const AdminUserEdit = () => {
    const navigate = useNavigate()
    const { userId } = useParams();
//   const [user, setUser] = useState([]);
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [initialPlan, setInitialPlan] = useState("")
  const [account, setAccount] = useState("")
  const [intrest, setIntrest] = useState("")
  const [bonus, setBonus] = useState("")
  const [refbonus, setRefBonus] = useState("")
  const [slider, setSlider] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleMenu =()=>{
    setSlider(!slider)
  }
    useEffect(() => {
        axios
          .get(`/api/admin/${userId}`)
          .then((res) => {
            const userList = res.data.user;
            if(userList){
                setUserName(userList.userName)
                setEmail(userList.email)
                setInitialPlan(userList.initialPlan)
                setAccount(userList.account)
                setIntrest(userList.intrest)
                setBonus(userList.bonus)
                setRefBonus(userList.refbonus)
              }
          })
          .catch((err) => console.log(err, " fetching account"));

          

      }, [userId]);

    const handelProductSubmit = (e)=>{
        e.preventDefault()
        setLoading(true)
        const data = {userName, email, initialPlan, account, intrest, bonus, refbonus}
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        axios.put(`/api/admin/user/edit/${userId}`, data, config)
        .then(res=>{
          setLoading(false)
            navigate("/admin-dashboard");

        })
        .catch(err=>{
            console.log(err);
        })
    }
  return (
    <div>
      <HelmetProvider>
    <Helmet>
      <title>Admin Edit User - SwizzFunds</title>
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
              <div className='px-4 lg:px-10 mt-10'>
        <div className="relative w-full mx-auto ">
          <div className="mb-3 w-[100px] text-center">
            <Link
              className=" flex items-center justify-center border-2 border-blue-400 rounded-lg"
              to="/admin-dashboard"
            >
              <MdArrowBack /> Go Back
            </Link>
          </div>
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-gray-800">
              <h3 className="text-xl text-white font-semibold">Edit</h3>
            </div>
            {/*body*/}

            <div className="relative p-6 flex-auto">
              <form className="w-full" onSubmit={handelProductSubmit}>
                <div className="grid w-full">
                  <div className='mt-2'>
                    <label htmlFor="name" className="text-md px-1 py-4 text-primary">
                      Name
                    </label>
                    <input
                      onChange={(e) => setUserName(e.target.value)}
                      name="userName"
                      value={userName}
                      type="text"
                      id="name"
                      className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                    />
                    
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="name" className="text-md px-1 py-4 text-primary">
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      value={email}
                      type="text"
                      id="name"
                      className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                    />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="name" className="text-lg px-1 py-4 text-primary">
                      Plan
                    </label>
                    <input
                      onChange={(e) => setInitialPlan(e.target.value)}
                      name="plan"
                      value={initialPlan}
                      type="text"
                      id="name"
                      className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                    />
                  </div>

                  {/* numbers */}
                  <div className='md:flex justify-between mt-2 gap-4'>
                  <div className='w-full'>
                    <label htmlFor="name" className="text-md px-1 py-4 text-primary">
                      Account
                    </label>
                    <input
                      onChange={(e) => setAccount(e.target.value)}
                      name="account"
                      value={account}
                      type="text"
                      id="name"
                      className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor="name" className="text-md px-1 py-4 text-primary">
                      Intrest
                    </label>
                    <input
                      onChange={(e) => setIntrest(e.target.value)}
                      name="intrest"
                      value={intrest}
                      type="text"
                      id="name"
                      className="w-full text-md text-gray-400 bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor="name" className="text-md px-1 py-4 text-primary">
                      Bonus
                    </label>
                    <input
                      onChange={(e) => setBonus(e.target.value)}
                      name="bonus"
                      value={bonus}
                      type="text"
                      id="name"
                      className="w-full text-lg bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor="name" className="text-md px-1 py-4 text-primary">
                      Ref. Bonus
                    </label>
                    <input
                      onChange={(e) => setRefBonus(e.target.value)}
                      name="bonus"
                      value={refbonus}
                      type="text"
                      id="name"
                      className="w-full text-lg bg-gray-800 outline-2 outline-green-500 rounded-md p-2 md-2"
                    />
                  </div>
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
                

            <p className='pb-4 text-sm xl:text-lg lg:mt-[200px] text-secondary text-center mt-6'>2023 SwizzFunds. All Rights Reserved.</p>

            </div>
          </div>
      </div>
    </div>
    
  )
}

export default AdminUserEdit