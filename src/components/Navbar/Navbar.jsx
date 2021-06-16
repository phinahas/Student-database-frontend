import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            
         <div className="admin">
             Admin
         </div>

         <div className="links">
             <p style={ { marginLeft:"20px"} }>Home</p><p style={ { marginLeft:"20px"} }>Add Student</p>

         </div>

                        
        </div>
    )
}

export default Navbar
