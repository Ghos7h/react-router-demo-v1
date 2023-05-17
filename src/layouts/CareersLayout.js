import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayout = () => {
  return (
    <div className='careers-layout'>
        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit sunt et ut ipsum accusantium odit, temporibus quo tenetur saepe iure eum, est fuga ipsa repudiandae aliquam eveniet mollitia adipisci?</p>

        <Outlet/>
    </div>
  )
}

export default CareersLayout