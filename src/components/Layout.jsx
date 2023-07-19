import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-4 flex flex-col min-h-screen min-w-full'>
    <div className="bg-cover min-h-screen" >
      <Header />
      <Outlet />
    </div>
      
    </div>
  )
}

export default Layout
