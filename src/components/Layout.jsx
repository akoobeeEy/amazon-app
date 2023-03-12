import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = () => {
  return (
    <div className='bg-gray-100'>
         <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout