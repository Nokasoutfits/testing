import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ErrorMessage = ({ children }) => {
  
  useEffect(()=>{  
    if(children){
      toast.error(`${children}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },[children])
  return (
    <div className="cover">
      {/* <p>{children}</p> */}

        
        
      <ToastContainer />

    </div>
  );
};
export const SuccessMessage = ({ children }) => {
  
  useEffect(()=>{  
    if(children){
      toast.success(`${children}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },[children])
  return (
    <div className="cover">
      {/* <p>{children}</p> */}

        
        
      <ToastContainer />

    </div>
  );
};


