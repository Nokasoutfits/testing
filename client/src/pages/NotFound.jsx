import React from 'react'
import notFound from "../assets/NotFound.png"
import { Helmet, HelmetProvider } from 'react-helmet-async'
const NotFound = () => {
  return (
    <div>
          <HelmetProvider>
    <Helmet>
      <title>Page Not Found - SwizzFunds</title>
      
    </Helmet>
    </HelmetProvider>
        <div className='flex justify-center items-center flex-col h-[100vh]'>
            <img src={notFound} alt="Not Found" className='w-[500px] rounded-full'/>
            <h1 className='text-2xl sm:text-5xl pt-6 font-bold '>Page Not Found!!</h1>
            <h1 className='text-xl p-2'>Please check the url</h1>
        </div>
    </div>
  )
}

export default NotFound