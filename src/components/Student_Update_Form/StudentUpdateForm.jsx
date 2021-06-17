import React,{useContext, useState} from 'react'
import './studentUpdateForm.css'
import {AppContext} from '../../useContext'

import axios from '../../axios'



function StudentUpdateForm() {

    const{student,setStudent,doEdit,setEdit}=useContext(AppContext)
    
    let updatedStudent={name:"",admissionNumber:"",department:"",batch:"",mobileNumber:"",address:""}
    const submit =(e)=>{
        e.preventDefault();
      updatedStudent.name= document.getElementById('name').value
      updatedStudent.admissionNumber= document.getElementById('admissionNumber').value
      updatedStudent.address= document.getElementById('address').value
      updatedStudent.department= document.getElementById('department').value
      updatedStudent.batch= document.getElementById('batch').value
      updatedStudent.mobileNumber= document.getElementById('mobile').value
      console.log(student._id);
      axios.post(`/update-student/${student._id}`,updatedStudent).then((response)=>{
          //console.log(response.data);
          alert("Document updated!")
          setStudent(updatedStudent);
          setEdit(false)

      })


      
   //  console.log(updatedStudent);

    }
    return (
        <div className="main-div-update-form">
            <div>
                <form action="" className="form-update" onSubmit={submit}>
                    <h3 className="heading">Update Student</h3>
                    <input className="inputField" type="text"  defaultValue={student.name}              id="name"  /><br />
                    <input className="inputField" type="text"  defaultValue={student.admissionNumber}   id="admissionNumber" /><br />
                    <input className="inputField" type="text"  defaultValue={student.department}        id="department" /><br />
                    <input className="inputField" type="text"  defaultValue={student.batch}             id="batch"   /><br />
                    <input className="inputField" type="text"  defaultValue={student.mobileNumber}      id="mobile"   /><br />
                    <input className="inputField" type="text"  defaultValue={student.address}           id="address" /><br />
                    <input type="submit" value="update" />
                </form>
            </div>

        </div>
    )
}

export default StudentUpdateForm
