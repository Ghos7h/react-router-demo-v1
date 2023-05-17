import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'

const HelpLayout = () => {
  return (
    <div className='help-layout'>
      <BreadCrumbs/>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

         <nav>
            <NavLink to='faq'>FAQ</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
         </nav>

         <Outlet/>
    </div>
  )
}

export default HelpLayout