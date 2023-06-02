import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div className="fixed z-[100]">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout