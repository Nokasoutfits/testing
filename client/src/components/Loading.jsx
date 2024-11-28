import React from 'react'

const Loading = () => {
  return (
    <div className='fixed top-0 h-full w-full  flex justify-center items-center left-0' style={{background: "rgba(0,0,0, .7", zIndex: "100"}}>
        <div className='flex justify-center items-center flex-col'>
        <div className="custom-loader "></div>
        <div className='mt-12 text-secondary text-sm'>Please wait...</div>
        </div>
    </div>
  )
}

export default Loading