import React from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate} from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  
  const  isLoggedIn=true;
  const navigate =useNavigate();
  if (!isLoggedIn){
    navigate('/about');
  }
  return (
  <>
  <Navbar/>
  <div className="content">
        <Outlet />
      </div>

  <Footer/>
  </>
  
  )
}

export default Layout