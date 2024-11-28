import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../constants/auth";


export const UserRoute = () => {
  return isAuthenticated() && isAuthenticated().role === 0 ? (
    <Outlet />
  ) : (
    <Navigate replace to="/login" />
  );
};


export const AdminRoute = () => {
  return ( 
        isAuthenticated() && isAuthenticated().role === 1 ? (
           <Outlet/>
        ) : (
            <Navigate replace to="/login"/>
        )
  )
}


