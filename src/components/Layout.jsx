import React from 'react'
import Navbar from './Navbar';
import { Outlet, Link } from "react-router-dom";
import Footer from './Footer';

const Layout = () => {
    return (
      <>
        <Navbar />
  
        <Outlet />


      </>
    )
  };
  
  export default Layout;
  