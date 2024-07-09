import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import {Helmet} from "react-helmet";

function Blog() {
  

  return (
    <>
    <Helmet>
      <title>Blog - My Website </title>
       <meta name="description" content="Blog application" />
    </Helmet>
     <div className="flex justify-center items-center ">
     <NavLink  to="/blog/1" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Blog Details </NavLink>
    
    <Outlet/>
    </div>
    </>
  )
}

export default Blog