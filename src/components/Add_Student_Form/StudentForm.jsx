import React from 'react'
import './studentForm.css'

function StudentForm() {
    return (
        <div className="main-div-add-student">

            <form action="" className="form">

             <h3 className="heading">Add New Student</h3>
             <input className="inputField" type="text" placeholder="Student Name" value="" /><br />
             <input className="inputField" type="text" placeholder="Admision Number" value="" /><br />
             <input className="inputField" type="text" placeholder="Department" value="" /><br />
             <input className="inputField" type="text" placeholder="Batch(2000-2004)" value="" /><br />
             <input className="inputField" type="text" placeholder="Mobile Number" value="" /><br />
             <input className="inputField" type="text" placeholder="Address" value="" /><br />
             <input type="submit" value="Add" />


            </form>
            
        </div>
    )
}

export default StudentForm
