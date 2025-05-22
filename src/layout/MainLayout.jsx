import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
// import Footer from '../shared/Footer'

export default function MainLayout() {
  return (
    <div className="font-barlow">
      <Navbar />
      <h1 className=" font-sora  text-lg text-red-600">hi</h1>
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
}
