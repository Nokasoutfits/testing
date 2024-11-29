import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { MdNotifications } from 'react-icons/md'

const Navbar = ({page}) => {
  return (
    <div className=''>
      <div className='bg-white p-4 flex justify-between items-center w-full'>
        <h4 className='text-tertiary'>Dashboard / <span className='text-primary font-semibold'>{page}</span></h4>
      
        {/* <div className='flex gap-4'>
          <span ><FaUserCircle className='bg-tertiary w-[35px] h-[35px] cursor-pointer rounded-full p-2'/></span>
          <span ><MdNotifications className='bg-tertiary w-[35px] h-[35px] cursor-pointer rounded-full p-2'/></span>
        </div> */}
      </div>

    </div>
  )
}

export default Navbar