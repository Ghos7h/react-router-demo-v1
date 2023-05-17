import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>Page not found</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quos at pariatur eum laboriosam alias, odio vitae nulla iure fuga, quibusdam necessitatibus natus iusto dolores assumenda, aliquid consectetur ut unde!</p>

        <p>Go to <Link to='/'>Home Page</Link></p>
    </div>
  )
}

export default NotFound