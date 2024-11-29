import React, { useEffect, useState } from 'react'
import { FaUser, FaUserCircle } from 'react-icons/fa'
import { MdNotifications } from 'react-icons/md'
const Navbar = ({page}) => {
const [openProfile, setOpenProfile] = useState(false)
  const [user, setUser] = useState("false");

 

  useEffect(()=>{
    const username = JSON.parse(localStorage.getItem("user"));
    setUser(username)
  },[])

  const handleProfile = () =>{
    setOpenProfile(!openProfile)
  }

  return (
    <div className=''>
      <div className='bg-white p-4 flex justify-between items-center w-full'>
        <h4 className='text-tertiary'>Dashboard / <span className='text-primary font-semibold'>{page}</span></h4>
      
        <div className='flex gap-4 relative'>
          <span ><FaUserCircle className='bg-tertiary w-[35px] h-[35px] cursor-pointer rounded-full p-2' onClick={handleProfile}/></span>
          <span ><MdNotifications className='bg-tertiary w-[35px] h-[35px] cursor-pointer rounded-full p-2'/></span>
        
            <div className={!openProfile? "hidden" : "p-4 bg-white rounded-lg absolute top-10 right-0 z-50 flex-col flex items-center justify-center"}>
              {/* <img src={user} alt="avater" /> */}
              <FaUser className='rounded-full text-4xl text-primary  my-4'/>
              <h1 className='text-primary font-bold text-md'>{user.userName}</h1>
              <p className='text-primary text-sm'>{user.email}</p>
            </div>
        </div>


      </div>

    </div>
  )
}

export default Navbar