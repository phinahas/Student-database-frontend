import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'


function Navbar() {
    return (
        <div className="navbar">
            
         <div className="admin">
             Admin
         </div>

         <div className="links">
         <Link to='/' >  <p style={ { marginLeft:"20px", color:"white"} }> Home </p></Link>
         <Link to='/add-student'> <p style={ { marginLeft:"20px", color:"white"} }> Add Student </p></Link>

         </div>

                        
        </div>
    )
}

export default Navbar
