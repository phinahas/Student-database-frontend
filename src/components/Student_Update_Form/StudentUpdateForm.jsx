import React from 'react'
import './studentUpdateForm.css'

function StudentUpdateForm() {
    return (
        <div className="main-div-update-form">
            <div>
                <form action="" className="form-update">
                    <h3 className="heading">Update Student</h3>
                    <input className="inputField" type="text" placeholder="Student Name" value="" /><br />
                    <input className="inputField" type="text" placeholder="Admision Number" value="" /><br />
                    <input className="inputField" type="text" placeholder="Department" value="" /><br />
                    <input className="inputField" type="text" placeholder="Batch(2000-2004)" value="" /><br />
                    <input className="inputField" type="text" placeholder="Mobile Number" value="" /><br />
                    <input className="inputField" type="text" placeholder="Address" value="" /><br />
                </form>
            </div>

        </div>
    )
}

export default StudentUpdateForm
