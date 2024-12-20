import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { MdDashboard, MdDownload, MdHistory, MdLogout } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import closeimg from "../../assets/close.svg"
import { logout } from '../../constants/auth'

const Sidebar = ({close}) => {
    const navigate = useNavigate();

    const handelLogout = () => {
        logout(() => {
          navigate("/", { replace: true });
        });
      };
  return (
    <div className='bg-tertiary w-full h-[100vh]'>
        <div className='py-4 px-2 relative'>
            <img src={closeimg} alt="close" className='absolute right-2 text-xl cursor-pointer' onClick={close}/>
            <img src={logo} alt="logo"  className='mx-auto w-[50px] mb-4'/>
        <hr className='border-secondary'/>
            <div className='mt-10'>
                <span className='text-secondary'>Home</span>
                <Link to="/admin-dashboard" className='flex items-center gap-6 mt-4 hover:bg-tertiary p-2 rounded-lg'>
                    <span><MdDashboard className='text-xl'/></span>
                    <span className='text-[16px]'>Dashboard</span>
                </Link>
                
                <div className='mt-10'>
                <span className='text-secondary'>Pages</span>

                <Link to="/admin-deposit" className='flex items-center gap-6 mt-4 hover:bg-tertiary p-2 rounded-lg'>
                    <span><MdDownload className='text-xl'/></span>
                    <span className='text-[16px]'>Deposit</span>
                </Link>
                <Link to="/admin-withdraw" className='flex items-center gap-6 mt-4 hover:bg-tertiary p-2 rounded-lg'>
                    <span><MdDownload className='text-xl rotate-180'/></span>
                    <span className='text-[16px]'>Withdraw</span>
                </Link>
                
                </div>

                <div className='mt-10'>
                <span className='text-secondary '>Exit</span>
                <div className='flex items-center gap-6 mt-4 hover:bg-tertiary p-2 rounded-lg cursor-pointer'  onClick={handelLogout}>
                    <span><MdLogout className='text-xl rotate-180'/></span>
                    <span className='text-[16px]'>Logout</span>
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar