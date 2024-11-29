import React, { useState } from 'react'
import { MainDash } from '../Components/Main'
import Navbar from '../Components/Navbar'
import menu from "../../assets/menu.svg";
import Sidebar from '../Components/Sidebar'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AdminDashboard = () => {
  const [slider, setSlider] = useState(false)

  const handleMenu =()=>{
    setSlider(!slider)
  }
  return (
    <div>
          <HelmetProvider>
    <Helmet>
      <title>Admin Dashboard - SwizzFunds</title>
    </Helmet>
    </HelmetProvider>
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
            <MainDash/>
              </div>
                

            <p className='pb-4 text-sm xl:text-lg lg:mt-[200px] text-secondary text-center mt-6'>2023 SwizzFunds. All Rights Reserved.</p>

            </div>
          </div>
      </div>
    </div>
  )
}

export default AdminDashboard